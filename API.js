const express = require('express');
const database = require('./database');

const app = express();
const port = 4321;

const TEMPORADA_ACTIVA = 1;

const GANANCIA_XP = {
    
    goles: 2,
    asistencias: 1,
    goles_en_contra: -2,
    vallas_invictas: 4,
    mvps: 3,

    partidos_perdidos: -3,
    partidos_abandonados: -5,
    partidos_ganados: 3,

    partidos_arquero: 0,
    partidos_jugados: 0

};

const GANANCIA_MONEDAS = {

    goles: 30,
    asistencias: 20,
    vallas_invictas: 50,
    mvps: 30,
    partidos_ganados: 10,
    
    goles_en_contra: 0,
    partidos_perdidos: 0,
    partidos_abandonados: 0,
    partidos_arquero: 0,
    partidos_jugados: 0

}

const estadisticasValidas = [

    "goles",
    "asistencias",
    "goles_en_contra",
    "mvps",
    "vallas_invictas",
    "partidos_jugados",
    "partidos_ganados",
    "partidos_perdidos",
    "partidos_arquero",
    "partidos_abandonados"

];

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
});

app.use(express.json());

app.post("/ingresar-jugador", (req, res) => {

    const nombre = req.body.nombre;
    const auth = req.body.auth;

    const sqlJugador = "INSERT INTO jugadores (auth, nombre) VALUES (?, ?)";
    const sqlEstadisticas = "INSERT INTO estadisticas (id_jugador, id_temporada) VALUES (?, ?)";

    database.query(sqlJugador, [auth, nombre], (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        const jugadorId = result.insertId;

        database.query(sqlEstadisticas, [jugadorId, TEMPORADA_ACTIVA], (err, result) => {

            if(err){
                return res.status(500).json(err);
            }

            res.status(201).json("Jugador y estadísticas creados exitosamente");

        });

    });

});

app.post("/ingresar-VIP/:id", (req, res) => {

    const jugadorId = req.params.id;

    const sqlTest = "SELECT * FROM Jugadores WHERE id = ?"

    database.query(sqlTest, jugadorId, (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        if(result.length === 0){
            return res.status(404).json("Jugador no existente");
        }

        const emojiDefault = '💜';
        const textoDefault = 'El vip ha ingresado!';
        const colorDefault = '#FF00FF';

        const sql = `
                INSERT INTO VIPs (jugador_id, fecha_inicio, fecha_caducacion, emoji, texto_entrada, color_texto) VALUES
                (?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 30 DAY), ?, ?, ?);
                `;

        database.query(sql, [jugadorId, emojiDefault, textoDefault, colorDefault], (err, result) => {
    
            if(err){
                return res.status(500).json(err);
            }
    
            res.status(201).json("Vip creado exitosamente.");
    
        });

    });

});

app.post("/ingresar-jugador-rol/:id/:rol", (req, res) => {

    const jugadorId = req.params.id;
    const rolId = req.params.rol;

    const sqlTestJugador = "SELECT * FROM Jugadores WHERE id = ?";

    database.query(sqlTestJugador, jugadorId, (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        if(result.length === 0){
            return res.status(404).json("Jugador no existente");
        }

        const sqlTestRol = "SELECT * FROM Roles WHERE id = ?";
    
        database.query(sqlTestRol, rolId, (err, result) => {
    
            if(err){
                return res.status(500).json(err);
            }
    
            if(result.length === 0){
                return res.status(404).json("Rol no existente");
            }
    
            const sql = `
                        INSERT INTO JugadoresRoles (jugador_id, rol_id) VALUES
                        (?, ?);
                        `;
        
            database.query(sql, [jugadorId, rolId], (err, result) => {
        
                if(err){
                    return res.status(500).json(err);
                }
        
                res.status(201).json("Jugador con rol agregado exitosamente.");
        
            });

        });

    });

});

app.get("/jugador/:id", (req, res) => {

    const jugadorId = req.params.id;

    const sql = `
                SELECT * FROM jugadores j
                INNER JOIN EstadisticasActuales e ON j.id = e.id_jugador
                WHERE j.id = ?
                `;

    database.query(sql, jugadorId, (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        if(result.length === 0){
            return res.status(404).json("Jugador no encontrado");
        }

        res.status(200).json(result);

    });

});

app.get("/VIP/:id", (req, res) => {

    const jugadorId = req.params.id;

    const sql = `
                SELECT * FROM JugadoresVIPSActivos
                WHERE id = ?
                `;

    database.query(sql, jugadorId, (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        if(result.length === 0){
            return res.status(404).json("Jugador no encontrado");
        }

        res.status(200).json(result);

    });

});

app.put("/:estadistica/:id", (req, res) => {

    const jugadorId = req.params.id;
    const estadistica = req.params.estadistica;

    if (!estadisticasValidas.includes(estadistica)) {
        return res.status(404).json("Estadística no existente");
    }

    const gananciaXP = GANANCIA_XP[estadistica] ?? 0;
    const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

    const sql = `
                UPDATE estadisticas
                SET ${estadistica} = ${estadistica} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE id_jugador = ? AND id_temporada = ?
                `;

    database.query(sql, [jugadorId, TEMPORADA_ACTIVA], (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        if(result.affectedRows === 0){
            return res.status(404).json("Jugador no encontrado");
        }

        res.status(200).json(`${estadistica} actualizada exitosamente`);

    });

});