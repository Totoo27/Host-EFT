const database = require('../database');

const TEMPORADA_ACTIVA = 1;

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

async function agregarEstadisticaJugador(estadistica, id){

    const gananciaXP = GANANCIA_XP[estadistica] ?? 0;
    const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

    existeEstadistica(estadistica);
    await existeJugador(id);

    await database.query(

            `
            UPDATE estadisticas
                SET ${estadistica} = ${estadistica} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE id_jugador = ? AND id_temporada = ?
            `,
            [id, TEMPORADA_ACTIVA]

    );

}

async function agregarEstadisticaClub(estadistica, id){

    const gananciaXP = GANANCIA_XP[estadistica] ?? 0;
    const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

    existeEstadistica(estadistica);
    await existeClub(id);

    await database.query(

            `
            UPDATE estadisticas
                SET ${estadistica} = ${estadistica} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE id_club = ? AND id_temporada = ?
            `,
            [id, TEMPORADA_ACTIVA]

    );

}

function existeEstadistica(estadistica){
    if (!estadisticasValidas.includes(estadistica)) {
        throw new Error("Estadistica no existente");
    }
}

module.exports = {
    agregarEstadisticaJugador,
    agregarEstadisticaClub
}