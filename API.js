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

app.post("/ingresar-jugador", async (req, res) => {

    try {

        const nombre = req.body.nombre;
        const auth = req.body.auth;

        const [jugador] = database.query(
            "INSERT INTO jugadores (auth, nombre) VALUES (?, ?)",
            [nombre, auth]
        );

        const [estadistica] = database.query(
            "INSERT INTO estadisticas (id_jugador, id_temporada) VALUES (?, ?)",
            [jugador.insertId, TEMPORADA_ACTIVA]
        );

        res.status(201).json("Jugador y estadísticas creados exitosamente");

    } catch (err) {

        res.status(500).json(err);

    }

});

app.post("/ingresar-VIP/:id", async (req, res) => {

    try {

        const jugadorId = req.params.id;

        const [jugador] = database.query(
            "SELECT * FROM Jugadores WHERE id = ?",
            [jugadorId]
        );

        if(jugador.length === 0){
            res.status(404).json("Jugador no existente");
        }

        const emojiDefault = '💜';
        const textoDefault = 'El vip ha ingresado!';
        const colorDefault = '#FF00FF';

        const [result] = database.query(
            `
            INSERT INTO VIPs (jugador_id, fecha_inicio, fecha_caducacion, emoji, texto_entrada, color_texto) VALUES
            (?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 30 DAY), ?, ?, ?);
            `,
            [jugadorId, emojiDefault, textoDefault, colorDefault]
        );

        res.status(201).json("VIP creado exitosamente");

    } catch (err) {

        res.status(500).json(err);

    }

});

app.post("/ingresar-jugador-rol/:id/:rol", async (req, res) => {

    try {

        const jugadorId = req.params.id;
        const rolId = req.params.rol;

        const [jugador] = await database.query(
            "SELECT * FROM Jugadores WHERE id = ?",
            [jugadorId]
        );

        if(jugador.length === 0){
            return res.status(404).json("Jugador no existente");
        }

        const [rol] = await database.query(
            "SELECT * FROM Roles WHERE id = ?",
            [rolId]
        );

        if(rol.length === 0){
            return res.status(404).json("Rol no existente");
        }

        await database.query(
            "INSERT INTO JugadoresRoles (jugador_id, rol_id) VALUES (?, ?)",
            [jugadorId, rolId]
        );

        res.status(201).json("Jugador con rol agregado exitosamente.");

    } catch(err){

        res.status(500).json(err);

    }

});

app.get("/jugador/:id", async (req, res) => {

    try {

        const [result] = await database.query(
            `
            SELECT * FROM Jugadores j
            LEFT JOIN EstadisticasActuales e
            ON e.id_jugador = j.id
            WHERE j.id = ?
            `,
            [req.params.id]
        );

        if(result.length === 0){
            res.status(404).json("Jugador no existente");
        }

        res.status(200).json(result);

    } catch(err) {

        res.status(500).json(err);

    }

});

app.get("/VIP/:id", async (req, res) => {

    try {

        const [result] = await database.query(
            "SELECT * FROM JugadoresVIPSActivos WHERE id = ?",
            [req.params.id]
        );

        if(result.length === 0){
            res.status(404).json("Jugador no existente");
        }

        res.status(200).json(result);

    } catch (err){

        res.status(500).json(err);

    }

});

app.put("/:estadistica/:id", async (req, res) => {

    try {

        const jugadorId = req.params.id;
        const estadistica = req.params.estadistica;

        if (!estadisticasValidas.includes(estadistica)) {
            return res.status(404).json("Estadística no existente");
        }

        const gananciaXP = GANANCIA_XP[estadistica] ?? 0;
        const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

        const [result] = database.query(

            `
            UPDATE estadisticas
                SET ${estadistica} = ${estadistica} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE id_jugador = ? AND id_temporada = ?
            `,
            [jugadorId, TEMPORADA_ACTIVA]

        );

        if(result.affectedRows === 0){
            return res.status(404).json("Jugador no existente");
        }

        res.status(202).json(`${estadistica} actualizado exitosamente!`);

    } catch (err){

        return res.status(500).json(err);

    }

});