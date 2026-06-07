const express = require('express');
const database = require('./database');

const app = express();
const port = 4321;

const jugadorService = require('./services/jugadorService');
const clubService = require('./services/clubService');
const statsService = require('./services/statsService');

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
});

app.use(express.json());

app.post("/jugador/crear", async (req, res) => {

    try {

        const nombre = req.body.nombre;
        const auth = req.body.auth;

        await jugadorService.crearJugador(nombre, auth);

        return res.status(201).json("Jugador y estadísticas creados exitosamente");

    } catch (err) {

        return res.status(500).json(err);

    }

});

app.post("/crear/club", async (req, res) => {

    try{

        const nombre = req.body.nombre;
        const abreviacion = req.body.abreviacion;
        const liderId = req.body.liderId;

        await clubService.crearClub(liderId, nombre, abreviacion);

        return res.status(201).json("Club creado exitosamente.");

    } catch (err){

        return res.status(500).json(err);

    }

});

app.post("/VIP/crear/:id", async (req, res) => {

    try {

        const jugadorId = req.params.id;

        await jugadorService.crearVIP(jugadorId);

        return res.status(201).json("VIP creado exitosamente");

    } catch (err) {

        return res.status(500).json(err);

    }

});

app.post("/jugador-rol/crear/:id/:rol", async (req, res) => {

    try {

        const jugadorId = req.params.id;
        const rolId = req.params.rol;

        await jugadorService.crearJugadorRol(jugadorId, rolId);

        return res.status(201).json("Jugador con rol agregado exitosamente.");

    } catch(err){

        return res.status(500).json(err);

    }

});

app.get("/jugador/buscar/:id", async (req, res) => {

    try {

        const jugadorId = req.params.id;

        const result = await jugadorService.buscarJugador(jugadorId);

        return res.status(200).json(result);

    } catch(err) {

        return res.status(500).json(err);

    }

});

app.get("/VIP/buscar/:id", async (req, res) => {

    try {

        const jugadorId = req.params.id;

        const result = await jugadorService.buscarVIP(jugadorId);

        return res.status(200).json(result);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/jugador/agregar-estadistica/:estadistica/:id", async (req, res) => {

    try {

        const estadistica = req.params.estadistica;
        const jugadorId = req.params.id;

        await statsService.agregarEstadisticaJugador(estadistica, jugadorId);

        return res.status(200).json(`${estadistica} actualizado exitosamente en jugador!`);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/club/agregar-estadistica/:estadistica/:id", async (req, res) => {

    try {

        const estadistica = req.params.estadistica;
        const clubId = req.params.id;

        await statsService.agregarEstadisticaClub(estadistica, clubId);

        return res.status(200).json(`${estadistica} actualizado exitosamente en club!`);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/club/agregar/:idJugador/:idClub", async (req, res) => {

    try{

        const jugadorId = req.params.idJugador;
        const clubId = req.params.idClub;

        await clubService.unirJugador(jugadorId, clubId);

        return res.status(200).json("Jugador cambiado de club exitosamente");

    } catch(err){

        return res.status(500).json(err);

    }

});

app.put("/club/eliminar-jugador/:id", async (req, res) => {

    try{

        const jugadorId = req.params.id;

        await clubService.eliminarJugador(jugadorId);

        return res.status(200).json("Jugador eliminado de club exitosamente");

    }catch(err){
        
        return res.status(500).json(err);

    }

});

app.delete("/jugador-rol/eliminar/:idJugador/:idRol", async (req, res) => {

    try{

        const jugadorId = req.params.idJugador;
        const rolId = req.params.idRol;

        await jugadorService.eliminarJugadorRol(jugadorId, rolId);

        return res.status(200).json("Conexión rol-jugador eliminada exitosamente.");

    } catch(err){

        return res.status(500).json(err);

    }

});