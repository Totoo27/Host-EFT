const express = require('express');
const database = require('./database');

const app = express();
const port = 4321;

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
});

app.use(express.json());

app.post("/ingresar-jugador", (req, res) => {

    const nombre = req.body.nombre;
    const auth = req.body.auth;

    const sqlJugador = "INSERT INTO jugadores (auth, nombre) VALUES (?, ?)";
    const sqlEstadisticas = "INSERT INTO estadisticas (id_jugador) VALUES (?)";

    database.query(sqlJugador, [auth, nombre], (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        const jugadorId = result.insertId;

        database.query(sqlEstadisticas, [jugadorId], (err, result) => {

            if(err){
                return res.status(500).json(err);
            }

            res.status(201).json("Jugador y estadísticas creados exitosamente");

        });

    });

});