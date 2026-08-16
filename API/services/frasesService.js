const database = require('../database');

async function buscarFrasesDeTipo(tipoFrase, auth = null){

    let query;
    let params;

    if(auth){
        query =`SELECT * FROM frases WHERE tipo_frase = ? AND jugador_auth = ?`;
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

module.exports = {

    buscarFrasesDeTipo

}