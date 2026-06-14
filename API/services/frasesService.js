const database = require('../database');

async function buscarFrasesDeTipo(tipoFrase){

    const [frases] = await database.query(
        `
        SELECT * FROM frases WHERE tipo_frase = ?
        `,
        [tipoFrase]
    )

    if(frases.length === 0){
        throw new Error("Tipo de frase no existente o no existen frases todavía");
    }

    return frases;

}

module.exports = {

    buscarFrasesDeTipo

}