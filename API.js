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

app.post("/crear/jugador", async (req, res) => {

    try {

        const nombre = req.body.nombre;
        const auth = req.body.auth;

        const [jugador] = await database.query(
            "INSERT INTO jugadores (auth, nombre) VALUES (?, ?)",
            [nombre, auth]
        );

        const [estadistica] = await database.query(
            "INSERT INTO estadisticas (id_jugador, id_temporada) VALUES (?, ?)",
            [jugador.insertId, TEMPORADA_ACTIVA]
        );

        return res.status(201).json("Jugador y estadísticas creados exitosamente");

    } catch (err) {

        return res.status(500).json(err);

    }

});

app.post("/crear/club", async (req, res) => {

    try{

        const nombre = req.body.nombre;
        const abreviacion = req.body.abreviacion;

        const [club] = await database.query(
            `INSERT INTO Clubes (nombre, abreviacion, fecha_creacion) VALUES
            (?, ?, CURDATE())`,
            [nombre, abreviacion]
        );

        const [estadistica] = await database.query(
            "INSERT INTO estadisticas (id_club, id_temporada) VALUES (?, ?)",
            [club.insertId, TEMPORADA_ACTIVA]
        );

        return res.status(201).json("Club creado exitosamente.");

    } catch (err){

        return res.status(500).json(err);

    }

});

app.post("/crear/VIP/:id", async (req, res) => {

    try {

        const jugadorId = req.params.id;

        existeJugador(res, jugadorId);

        const emojiDefault = '💜';
        const textoDefault = 'El vip ha ingresado!';
        const colorDefault = '#FF00FF';

        const [result] = await database.query(
            `
            INSERT INTO VIPs (jugador_id, fecha_inicio, fecha_caducacion, emoji, texto_entrada, color_texto) VALUES
            (?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 30 DAY), ?, ?, ?);
            `,
            [jugadorId, emojiDefault, textoDefault, colorDefault]
        );

        return res.status(201).json("VIP creado exitosamente");

    } catch (err) {

        return res.status(500).json(err);

    }

});

app.post("/crear/jugador-rol/:id/:rol", async (req, res) => {

    try {

        const jugadorId = req.params.id;
        const rolId = req.params.rol;

        existeJugador(res, jugadorId);
        existeRol(res, rolId);

        const [result] = await database.query(
            "INSERT INTO JugadoresRoles (jugador_id, rol_id) VALUES (?, ?)",
            [jugadorId, rolId]
        );

        return res.status(201).json("Jugador con rol agregado exitosamente.");

    } catch(err){

        return res.status(500).json(err);

    }

});

app.get("/buscar/jugador/:id", async (req, res) => {

    try {

        const jugadorId = req.params.id;

        existeJugador(res, jugadorId);

        const [result] = await database.query(
            `
            SELECT * FROM Jugadores j
            LEFT JOIN EstadisticasActuales e
            ON e.id_jugador = j.id
            WHERE j.id = ?
            `,
            [jugadorId]
        );

        return res.status(200).json(result);

    } catch(err) {

        return res.status(500).json(err);

    }

});

app.get("/buscar/VIP/:id", async (req, res) => {

    try {

        const [result] = await database.query(
            "SELECT * FROM JugadoresVIPSActivos WHERE id = ?",
            [req.params.id]
        );

        if(result.length === 0){
            return res.status(404).json("Jugador no existente");
        }

        return res.status(200).json(result);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/estadisticas/agregar-jugador/:estadistica/:id", async (req, res) => {

    try {

        const estadistica = req.params.estadistica;
        const jugadorId = req.params.id;

        if (!estadisticasValidas.includes(estadistica)) {
            return res.status(404).json("Estadística no existente");
        }
        existeJugador(res, jugadorId);

        const gananciaXP = GANANCIA_XP[estadistica] ?? 0;
        const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

        const [result] = await database.query(

            `
            UPDATE estadisticas
                SET ${estadistica} = ${estadistica} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE id_jugador = ? AND id_temporada = ?
            `,
            [jugadorId, TEMPORADA_ACTIVA]

        );

        return res.status(200).json(`${estadistica} actualizado exitosamente en jugador!`);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/estadisticas/agregar-club/:estadistica/:id", async (req, res) => {

    try {

        const estadistica = req.params.estadistica;
        const clubId = req.params.id;

        if (!estadisticasValidas.includes(estadistica)) {
            return res.status(404).json("Estadística no existente");
        }
        existeClub(res, clubId);

        const gananciaXP = GANANCIA_XP[estadistica] ?? 0;
        const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

        const [result] = await database.query(

            `
            UPDATE estadisticas
                SET ${estadistica} = ${estadistica} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE id_club = ? AND id_temporada = ?
            `,
            [clubId, TEMPORADA_ACTIVA]

        );

        return res.status(200).json(`${estadistica} actualizado exitosamente en club!`);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/club/agregar/:idJugador/:idClub", async (req, res) => {

    try{

        const jugadorId = req.params.idJugador;
        const clubId = req.params.idClub;

        existeJugador(res, jugadorId);
        existeClub(res, clubId);

        const [result] = await database.query(

            `
            UPDATE Jugadores
            SET id_club = ?
            WHERE id = ?
            `,
            [clubId, jugadorId]

        );

        return res.status(200).json("Jugador cambiado de club exitosamente");

    } catch(err){

        return res.status(500).json(err);

    }

});

app.put("/club/eliminar-jugador/:id", async (req, res) => {

    try{

        const jugadorId = req.params.id;

        existeJugador(res, jugadorId);

        const [result] = await database.query(

            `
            UPDATE Jugadores
            SET id_club = NULL
            WHERE id = ? AND id_club IS NOT NULL
            `,
            jugadorId

        );

        return res.status(200).json("Jugador eliminado de club exitosamente");

    }catch(err){
        
        return res.status(500).json(err);

    }

});

app.delete("/eliminar/jugador-rol/:idJugador/:idRol", async (req, res) => {

    try{

        const jugadorId = req.params.idJugador;
        const rolId = req.params.idRol;

        const [consulta] = await database.query(
            `
            SELECT * FROM JugadoresRoles
            WHERE jugador_id = ? AND rol_id = ?
            `,
            [jugadorId, rolId]
        );

        if(consulta.length === 0){
            return res.status(404).json("Conexión rol-jugador no encontrada.");
        }

        const [result] = await database.query(
            `
            DELETE FROM JugadoresRoles
            WHERE jugador_id = ? AND rol_id = ?
            `,
            [jugadorId, rolId]
        );

        return res.status(200).json("Conexión rol-jugador eliminada exitosamente.");

    } catch(err){

        return res.status(500).json(err);

    }

});

// --- FUNCIONES

async function existeJugador(res, id){

    const [jugador] = await database.query(
            "SELECT * FROM Jugadores WHERE id = ?",
            [id]
        );

    if(jugador.length === 0){
        return res.status(404).json("Jugador no encontrado");
    }

}

async function existeClub(res, id){

    const [club] = await database.query(
            "SELECT * FROM Jugadores WHERE id = ?",
            [id]
        );

    if(club.length === 0){
        return res.status(404).json("Club no encontrado");
    }

}

async function existeClub(res, id){
    const [rol] = await database.query(
            "SELECT * FROM Roles WHERE id = ?",
            [id]
        );

    if(rol.length === 0){
        return res.status(404).json("Rol no existente");
    }
}