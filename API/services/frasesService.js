const database = require('../database');
const { existeJugador } = require('./jugadorService');

async function buscarFrasesDeTipo(tipoFrase, auth = null){

    let query;
    let params;

    if(auth){
        query = `SELECT * FROM frases WHERE tipo_frase = ? AND jugador_auth = ?`;
        params = [tipoFrase, auth]
    } else {
        query = `SELECT * FROM frases WHERE tipo_frase = ?`;
        params = [tipoFrase];
    }

    const [frases] = await database.query(query, params);

    if(!auth && frases.length === 0){
        throw new Error("Tipo de frase no existente o no existen frases todavía");
    }

    return frases;

}

async function cambiarFrase(ID, frase){

    const [fraseCheck] = await database.query(
        `SELECT * FROM frases WHERE id = ?`,
        [ID]
    );

    if(fraseCheck.length === 0) return res.status(404).json("La frase no existe.");

    await database.query(
        `
        UPDATE frases
        SET frase = ?
        WHERE id = ?`,
        [frase, ID]
    );

}

async function crearFrase(type, auth){

    await existeJugador(auth);

    let texto;

    switch(type){
        case 'gol':
            texto = "gol personalizado de {player}";
        break;

        case 'asistencia':
            texto = "asistencia personalizada de {player}";
        break;

        case 'gol_en_contra':
            texto = "gol en contra personalizado de {player}";
        break;
    }

    await database.query(

        `
        INSERT INTO frases(frase, jugador_auth, tipo_frase) VALUES
        (?, ?, ?);
        `,
        [texto, auth, type]

    );

}

module.exports = {

    buscarFrasesDeTipo,
    cambiarFrase,
    crearFrase

}