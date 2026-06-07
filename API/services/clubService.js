const database = require("../database");

const { existeJugador } = require('./jugadorService');

async function crearClub(auth, nombre, abreviacion, temporada){

    const [lider] = await database.query(
        `
        SELECT * FROM Jugadores WHERE auth = ? AND id_club IS NULL
        `,
        [auth]
    );

    if(lider.length === 0){
        throw new Error("Jugador no existe o ya tiene club");
    }

    const [club] = await database.query(
            `INSERT INTO Clubes (auth_lider, nombre, abreviacion, fecha_creacion) VALUES
            (?, ?, ?, CURDATE())`,
            [auth, nombre, abreviacion]
        );

    const id_club = club.insertId;

    const [estadistica] = await database.query(
        "INSERT INTO estadisticas (id_club, id_temporada) VALUES (?, ?)",
        [id_club, temporada]
    );

    await unirJugador(auth, id_club);

}

async function unirJugador(auth, id_club){

    await existeJugador(auth);
    await existeClub(id_club);

    const [result] = await database.query(

            `
            UPDATE Jugadores
            SET id_club = ?
            WHERE auth = ?
            `,
            [id_club, auth]

        );
}

async function eliminarJugador(auth){

    await existeJugador(auth);

    const [result] = await database.query(

            `
            UPDATE Jugadores
            SET id_club = NULL
            WHERE auth = ? AND id_club IS NOT NULL
            `,
            auth

        );

}

async function existeClub(id){

    const [club] = await database.query(
            "SELECT * FROM Clubes WHERE id = ?",
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