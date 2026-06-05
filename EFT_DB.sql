CREATE DATABASE IF NOT EXISTS ElFutbolDeToto;

USE ElFutbolDeToto;

CREATE TABLE IF NOT EXISTS Clubes (

    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    abreviacion VARCHAR(3) NOT NULL UNIQUE,
    fecha_creacion DATE NOT NULL

);

CREATE TABLE IF NOT EXISTS Jugadores (

    id INT AUTO_INCREMENT PRIMARY KEY,
    auth VARCHAR(40) NOT NULL UNIQUE,
    nombre VARCHAR(40) NOT NULL,
    id_club INT NULL,

    FOREIGN KEY (id_club) REFERENCES Clubes(id) ON DELETE SET NULL;

);

CREATE TABLE IF NOT EXISTS Roles (

    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL UNIQUE

);

CREATE TABLE IF NOT EXISTS Remeras (

    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    color VARCHAR(7) NOT NULL,
    club_id INT NOT NULL,

    FOREIGN KEY (club_id) REFERENCES Clubes(id) ON DELETE CASCADE;

);

CREATE TABLE IF NOT EXISTS Frases (

    id INT AUTO_INCREMENT PRIMARY KEY,
    frase VARCHAR(255) NOT NULL,
    jugador_id INT NULL,
    tipo_frase enum('gol', 'asistencia', 'gol_en_contra') NOT NULL,
    
    FOREIGN KEY (jugador_id) REFERENCES Jugadores(id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS VIPs (

    id INT AUTO_INCREMENT PRIMARY KEY,
    jugador_id INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_caducacion DATE NOT NULL,

    emoji VARCHAR(10) NOT NULL,
    texto_entrada VARCHAR(255) NOT NULL,
    color_texto VARCHAR(7) NOT NULL,

    FOREIGN KEY (jugador_id) REFERENCES Jugadores(id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS JugadoresRoles (

    jugador_id INT NOT NULL,
    rol_id INT NOT NULL,

    PRIMARY KEY (jugador_id, rol_id),
    FOREIGN KEY (jugador_id) REFERENCES Jugadores(id) ON DELETE CASCADE,
    FOREIGN KEY (rol_id) REFERENCES Roles(id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS Estadisticas (

    id INT AUTO_INCREMENT PRIMARY KEY,
    id_jugador INT NULL,
    id_club INT NULL,

    CONSTRAINT chk_jugador_club CHECK (
        (id_jugador IS NOT NULL AND id_club IS NULL) OR
        (id_jugador IS NULL AND id_club IS NOT NULL)
    ),

    goles INT DEFAULT 0,
    asistencias INT DEFAULT 0,
    goles_en_contra INT DEFAULT 0,
    mvps INT DEFAULT 0,
    vallas_invictas INT DEFAULT 0,

    monedas INT DEFAULT 0,

    partidos_jugados INT DEFAULT 0,
    partidos_ganados INT DEFAULT 0,
    partidos_perdidos INT DEFAULT 0,
    partidos_arquero INT DEFAULT 0,
    partidos_abandonados INT DEFAULT 0,

    FOREIGN KEY (id_jugador) REFERENCES Jugadores(id) ON DELETE CASCADE,
    FOREIGN KEY (id_club) REFERENCES Clubes(id) ON DELETE CASCADE

);

CREATE VIEW IF NOT EXISTS Administradores AS
SELECT j.id, j.auth, j.nombre FROM Jugadores j
JOIN JugadoresRoles jr ON j.id = jr.jugador_id
JOIN Roles r ON jr.rol_id = r.id
WHERE r.nombre = 'Administrador';

CREATE VIEW IF NOT EXISTS JugadoresVIPS AS
SELECT j.id, j.auth, j.nombre, DATEDIFF(v.fecha_caducacion, CURDATE()) AS dias_restantes FROM Jugadores j
JOIN VIPs v ON j.id = v.jugador_id;

