const database = require('../database');

async function crearJugador(nombre, auth, temporada){

    const [jugador] = await database.query(
            "INSERT INTO jugadores (auth, nombre) VALUES (?, ?)",
            [nombre, auth]
        );

    const [estadistica] = await database.query(
            "INSERT INTO estadisticas (id_jugador, id_temporada) VALUES (?, ?)",
            [jugador.insertId, temporada]
        );

}

async function crearVIP(id_jugador){

    await existeJugador(id_jugador);

    const emojiDefault = '💜';
    const textoDefault = 'El vip ha ingresado!';
    const colorDefault = '#FF00FF';

    await database.query(
            `
            INSERT INTO VIPs (jugador_id, fecha_inicio, fecha_caducacion, emoji, texto_entrada, color_texto) VALUES
            (?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 30 DAY), ?, ?, ?);
            `,
            [id_jugador, emojiDefault, textoDefault, colorDefault]
        );

}

async function crearJugadorRol(id_jugador, id_rol){

    await existeJugador(id_jugador);
    await existeRol(id_rol);

    await database.query(
            "INSERT INTO JugadoresRoles (jugador_id, rol_id) VALUES (?, ?)",
            [jugadorId, rolId]
    );

}

async function buscarJugador(id){

    await existeJugador(id);

    const [rows] = await database.query(
            `
            SELECT * FROM Jugadores j
            LEFT JOIN EstadisticasActuales e
            ON e.id_jugador = j.id
            WHERE j.id = ?
            `,
            [id]
        );

    return rows;

}

async function buscarVIP(id_jugador){

    const [result] = await database.query(
            "SELECT * FROM JugadoresVIPSActivos WHERE id = ?",
            [id_jugador]
        );

    if(result.length === 0){
        throw new Error("VIP no existente");
    }

    return result;

}

async function eliminarJugadorRol(id_jugador, id_rol){

    const [consulta] = await database.query(
            `
            SELECT * FROM JugadoresRoles
            WHERE jugador_id = ? AND rol_id = ?
            `,
            [id_jugador, id_rol]
        );

    if(consulta.length === 0){
        throw new Error("Relacion no existe");
    }

    await database.query(
            `
            DELETE FROM JugadoresRoles
            WHERE jugador_id = ? AND rol_id = ?
            `,
            [id_jugador, id_rol]
        );

}

// Funciones de apoyo

async function existeJugador(id){

    const [jugador] = await database.query(
            "SELECT * FROM Jugadores WHERE id = ?",
            [id]
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

    eliminarJugadorRol

}
