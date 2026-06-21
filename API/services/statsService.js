const database = require('../database');

const { existeJugador } = require('./jugadorService');
const { existeClub } = require('./clubService');

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

    goles: 50,
    asistencias: 25,
    vallas_invictas: 100,
    mvps: 50,
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

async function agregarEstadisticaJugador(estadistica, auth, temporada, extra){

    existeEstadistica(estadistica);
    await existeJugador(auth);

    const gananciaXP = obtenerXP(estadistica, extra);
    const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

    await database.query(

            `
            UPDATE estadisticas
                SET ${estadistica} = ${estadistica} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE jugador_auth = ? AND id_temporada = ?
            `,
            [auth, temporada]

    );

}

async function agregarEstadisticaClub(estadistica, id, temporada, extra){

    existeEstadistica(estadistica);
    await existeClub(id);

    const gananciaXP = obtenerXP(estadistica, extra);
    const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

    await database.query(

            `
            UPDATE estadisticas
                SET ${estadistica} = ${estadistica} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE id_club = ? AND id_temporada = ?
            `,
            [id, temporada]

    );

}

function existeEstadistica(estadistica){
    if (!estadisticasValidas.includes(estadistica)) {
        console.log("Estadistica no existente" + estadistica);
        throw new Error("Estadistica no existente");
    }
}

function obtenerXP(estadistica, extra){

    if(extra === true && (estadistica == 'goles' || estadistica == 'asistencias')){
        return GANANCIA_XP[estadistica] + 1;
    }

    return GANANCIA_XP[estadistica];

    return XP ?? 0;
}

module.exports = {
    agregarEstadisticaJugador,
    agregarEstadisticaClub
}