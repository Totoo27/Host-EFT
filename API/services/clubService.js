const database = require("../database");

const { existeJugador } = require('./jugadorService');

async function crearClub(liderId, nombre, abreviacion){

    const [club] = await database.query(
            `INSERT INTO Clubes (id_lider, nombre, abreviacion, fecha_creacion) VALUES
            (?, ?, ?, CURDATE())`,
            [liderId, nombre, abreviacion]
        );

    const [estadistica] = await database.query(
        "INSERT INTO estadisticas (id_club, id_temporada) VALUES (?, ?)",
        [club.insertId, TEMPORADA_ACTIVA]
    );

}

async function unirJugador(id_jugador, id_club){

    await existeJugador(id_jugador);
    await existeClub(id_club);

    const [result] = await database.query(

            `
            UPDATE Jugadores
            SET id_club = ?
            WHERE id = ?
            `,
            [id_club, id_jugador]

        );
}

async function eliminarJugador(id_jugador){

    await existeJugador(id_jugador);

    const [result] = await database.query(

            `
            UPDATE Jugadores
            SET id_club = NULL
            WHERE id = ? AND id_club IS NOT NULL
            `,
            id_jugador

        );

}

async function existeClub(id){

    const [club] = await database.query(
            "SELECT * FROM Jugadores WHERE id = ?",
            [id]
        );

    if(club.length === 0){
        throw new Error("Club no existente");
    }

}

module.exports = {

    existeClub,

    crearClub,

    unirJugador,

    eliminarJugador
}