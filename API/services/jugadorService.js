const database = require('../database');

async function crearJugador(nombre, auth, temporada){

    const [jugador] = await database.query(
            "INSERT INTO jugadores (auth, nombre) VALUES (?, ?)",
            [auth, nombre]
        );

    const [estadistica] = await database.query(
            "INSERT INTO estadisticas (jugador_auth, id_temporada) VALUES (?, ?)",
            [auth, temporada]
        );

}

async function crearVIP(auth){

    await existeJugador(auth);

    const emojiDefault = '💜';
    const textoDefault = 'El vip ha ingresado!';
    const colorDefault = '#FF00FF';

    await database.query(
            `
            INSERT INTO VIPs (jugador_auth, fecha_inicio, fecha_caducacion, emoji, texto_entrada, color_texto) VALUES
            (?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 30 DAY), ?, ?, ?);
            `,
            [auth, emojiDefault, textoDefault, colorDefault]
        );

}

async function crearJugadorRol(auth, id_rol){

    await existeJugador(auth);
    await existeRol(id_rol);

    await database.query(
            "INSERT INTO JugadoresRoles (jugador_auth, rol_id) VALUES (?, ?)",
            [auth, id_rol]
    );

}

/* 
  "xp": 0,
  "monedas": 0,
  "partidos_jugados": 0,
  "partidos_ganados": 0,
  "partidos_perdidos": 0,
  "partidos_arquero": 0,
  "partidos_abandonados": 0 
  */

async function buscarJugador(auth){

    const [rows] = await database.query(
            `
            SELECT 
            j.auth, j.nombre, j.id_club, 
            e.goles, e.asistencias, e.goles_en_contra, e.vallas_invictas, e.mvps, e.xp, e.monedas,
            e.partidos_jugados, e.partidos_ganados, e.partidos_perdidos, e.partidos_arquero, e.partidos_abandonados
            FROM Jugadores j
            LEFT JOIN EstadisticasActuales e
            ON e.jugador_auth = j.auth
            WHERE j.auth = ?
            `,
            [auth]
        );

    if(rows.length === 0){
        return null;
    }

    return rows[0];

}

async function buscarVIP(auth){

    const [rows] = await database.query(
            "SELECT * FROM JugadoresVIPSActivos WHERE auth = ?",
            [auth]
        );
    
    if(rows.length === 0){
        return null;
    }

    return rows[0];

}

async function buscarRol(auth, rolId){

    await existeRol(rolId);
    await existeJugador(auth);

    const [rows] = await database.query(
        `
        SELECT * FROM JugadoresRoles
        WHERE jugador_auth = ? AND rol_id = ?
        `,
        [auth, rolId]
    );

    if(rows.length === 0){
        return null;
    }

    return rows[0];

}

async function eliminarJugadorRol(auth, id_rol){

    const [consulta] = await database.query(
            `
            SELECT * FROM JugadoresRoles
            WHERE jugador_auth = ? AND rol_id = ?
            `,
            [auth, id_rol]
        );

    if(consulta.length === 0){
        throw new Error("Relacion no existe");
    }

    await database.query(
            `
            DELETE FROM JugadoresRoles
            WHERE jugador_auth = ? AND rol_id = ?
            `,
            [auth, id_rol]
        );

}

// Funciones de apoyo

async function existeJugador(auth){

    const [jugador] = await database.query(
            "SELECT * FROM Jugadores WHERE auth = ?",
            [auth]
        );

    if(jugador.length === 0){
        throw new Error("Jugador no existente");
    }

}

async function existeRol(id){
    const [rol] = await database.query(
            "SELECT * FROM Roles WHERE id = ?",
            [id]
        );

    if(rol.length === 0){
        throw new Error("Rol no existente");
    }
}

module.exports = {

    existeJugador,

    crearJugador,
    crearVIP,
    crearJugadorRol,

    buscarJugador,
    buscarVIP,

    buscarRol,
    eliminarJugadorRol

}
