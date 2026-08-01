const database = require('../database');

async function buscarRemera(id) {

    const [remeras] = await database.query(
            "SELECT * FROM Remeras WHERE id = ?",
            [id]
        );

    if(remeras.length === 0){
        throw new Error("Remera no existente");
    }

    return remeras[0];
    
}

async function getCantRemeras() {

    const [remeras] = await database.query(
        "SELECT COUNT(*) as cantidad FROM Remeras"
    )

    return remeras[0];
    
}

module.exports = {

    buscarRemera,
    getCantRemeras

};