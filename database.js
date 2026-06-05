const database = require('mysql2');

const connection = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'elfutboldetoto'
});

connection.connect((err) => {

    if(err){
        console.log("No se pudo conectar con la base de datos: " + err);
        return;
    }

    console.log("Conexión a la base de datos establecida correctamente");

});

module.exports = connection;