const database = require('../database');

const { existeJugador } = require('./jugadorService');
const { existeClub } = require('./clubService');

const GANANCIA_XP = {
    
    goles: 3,
    asistencias: 2,
    goles_en_contra: -2,
    vallas_invictas: 5,
    mvps: 3,

    partidos_abandonados: -15,
    
    partidos_perdidos: 0,
    partidos_ganados: 0,
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

const estadisticasValidas = {
    goles: "goles",

    asistencias: "asistencias",

    goles_en_contra: "goles_en_contra",
    gec: "goles_en_contra",

    mvps: "mvps",

    vallas_invictas: "vallas_invictas",
    vallas: "vallas_invictas",

    partidos_jugados: "partidos_jugados",
    pj: "partidos_jugados",

    partidos_ganados: "partidos_ganados",
    pg: "partidos_ganados",

    partidos_perdidos: "partidos_perdidos",
    pp: "partidos_perdidos",

    partidos_arquero: "partidos_arquero",
    pa: "partidos_arquero",

    partidos_abandonados: "partidos_abandonados",
    pab: "partidos_abandonados",

    xp: "xp",

    monedas: "monedas"
};

async function actualizarXP(auth, xp, temporada, clubId){

    await existeJugador(auth);

    await database.query(

            `
            UPDATE estadisticas
                SET xp = xp + ?
                WHERE jugador_auth = ? AND id_temporada = ?
            `,
            [xp, auth, temporada]

    );

}

async function agregarEstadistica(estadistica, auth, temporada, extra, clubId){

    const columna = existeEstadistica(estadistica);
    await existeJugador(auth);

    const gananciaXP = obtenerXP(estadistica, extra);
    const gananciaMonedas = GANANCIA_MONEDAS[estadistica] ?? 0;

    await database.query(

            `
            UPDATE estadisticas
                SET ${columna} = ${columna} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE jugador_auth = ? AND id_temporada = ?
            `,
            [auth, temporada]

    );

    if(clubId == null){
        return;
    }

    await database.query(

            `
            UPDATE estadisticas
                SET ${columna} = ${columna} + 1, xp = xp + ${gananciaXP}, monedas = monedas + ${gananciaMonedas}
                WHERE id_club = ? AND id_temporada = ?
            `,
            [clubId, temporada]

    );

}

function existeEstadistica(estadistica){

    const columna = estadisticasValidas[estadistica];
    if (!columna) {
        console.log("Estadistica no existente: " + estadistica);
        throw new Error("Estadistica no existente");
    }

    return columna;

}

function obtenerXP(estadistica, extra){

    if(extra === true && (estadistica == 'goles' || estadistica == 'asistencias')){
        return GANANCIA_XP[estadistica] + 1;
    }

    return GANANCIA_XP[estadistica];

    return XP ?? 0;
}

async function obtenerTop(estadistica, limite){

    const columna = estadisticasValidas[estadistica];

    if (!columna) {
        return false;
    }

    const top = await database.query(
        `
        SELECT j.nombre AS nombre, e.${columna} AS stat FROM EstadisticasActuales e
        INNER JOIN Jugadores j
        ON j.auth = e.jugador_auth
        ORDER BY ${columna} DESC
        LIMIT ?;
        `,
        [limite]
    );

    return top;
}

module.exports = {
    agregarEstadistica,
    actualizarXP,
    obtenerTop
}