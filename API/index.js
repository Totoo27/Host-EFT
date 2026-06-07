const express = require('express');
const router = express.Router();
const cors = require("cors");

const database = require('./database');

const app = express();
const port = 4321;

const jugadorService = require('./services/jugadorService');
const clubService = require('./services/clubService');
const statsService = require('./services/statsService');

const TEMPORADA_ACTIVA = 1;

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
});

app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.post("/jugador/crear", async (req, res) => {

    try {

        const { nombre, auth } = req.body;

        await jugadorService.crearJugador(nombre, auth, TEMPORADA_ACTIVA);

        return res.status(201).json("Jugador y estadísticas creados exitosamente");

    } catch (err) {

        return res.status(500).json(err);

    }

});

app.post("/club/crear/:nombre/:abreviacion/:lider_auth", async (req, res) => {

    try{

        const nombre = req.params.nombre;
        const abreviacion = req.params.abreviacion;
        const liderAuth = req.params.lider_auth;

        await clubService.crearClub(liderAuth, nombre, abreviacion, TEMPORADA_ACTIVA);

        return res.status(201).json("Club creado exitosamente.");

    } catch (err){

        return res.status(500).json(err);

    }

});

app.post("/VIP/crear/:auth", async (req, res) => {

    try {

        const jugadorAuth = req.params.auth;

        await jugadorService.crearVIP(jugadorAuth);

        return res.status(201).json("VIP creado exitosamente");

    } catch (err) {

        return res.status(500).json(err);

    }

});

app.post("/jugador-rol/crear/:auth/:rol", async (req, res) => {

    try {

        const jugadorAuth = req.params.auth;
        const rolId = req.params.rol;

        await jugadorService.crearJugadorRol(jugadorAuth, rolId);

        return res.status(201).json("Jugador con rol agregado exitosamente.");

    } catch(err){

        return res.status(500).json(err);

    }

});

app.get("/jugador/buscar/:auth", async (req, res) => {

    try {

        const auth = req.params.auth;

        const result = await jugadorService.buscarJugador(auth);

        return res.status(200).json(result);

    } catch(err) {

        return res.status(500).json(err);

    }

});

app.get("/VIP/buscar/:auth", async (req, res) => {

    try {

        const jugadorAuth = req.params.auth;

        const result = await jugadorService.buscarVIP(jugadorAuth);

        return res.status(200).json(result);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/jugador/agregar-estadistica/:estadistica/:auth", async (req, res) => {

    try {

        const estadistica = req.params.estadistica;
        const jugadorAuth = req.params.auth;

        await statsService.agregarEstadisticaJugador(estadistica, jugadorAuth, TEMPORADA_ACTIVA);

        return res.status(200).json(`${estadistica} actualizado exitosamente en jugador!`);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/club/agregar-estadistica/:estadistica/:id", async (req, res) => {

    try {

        const estadistica = req.params.estadistica;
        const clubId = req.params.id;

        await statsService.agregarEstadisticaClub(estadistica, clubId, TEMPORADA_ACTIVA);

        return res.status(200).json(`${estadistica} actualizado exitosamente en club!`);

    } catch (err){

        return res.status(500).json(err);

    }

});

app.put("/club/agregar/:authJugador/:idClub", async (req, res) => {

    try{

        const jugadorAuth = req.params.authJugador;
        const clubId = req.params.idClub;

        await clubService.unirJugador(jugadorAuth, clubId);

        return res.status(200).json("Jugador cambiado de club exitosamente");

    } catch(err){

        return res.status(500).json(err);

    }

});

app.put("/club/eliminar-jugador/:auth", async (req, res) => {

    try{

        const jugadorAuth = req.params.auth;

        await clubService.eliminarJugador(jugadorAuth);

        return res.status(200).json("Jugador eliminado de club exitosamente");

    }catch(err){
        
        return res.status(500).json(err);

    }

});

app.delete("/jugador-rol/eliminar/:authJugador/:idRol", async (req, res) => {

    try{

        const jugadorAuth = req.params.authJugador;
        const rolId = req.params.idRol;

        await jugadorService.eliminarJugadorRol(jugadorAuth, rolId);

        return res.status(200).json("Conexión rol-jugador eliminada exitosamente.");

    } catch(err){

        return res.status(500).json(err);

    }

});