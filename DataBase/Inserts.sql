INSERT INTO Roles (nombre) VALUES 
('Administrador'),
('Balon de oro'),
('Honorario'),
('Lev Yashin'),
('Baneado');

INSERT INTO Temporadas (activa, fecha_inicio, fecha_fin) VALUES 
( TRUE, '2026-01-01', '2026-12-31');

INSERT INTO JugadoresRoles (jugador_auth, rol_id) VALUES
("F2EX_YiIOGCzOoVp-f-OCQqr4I8cmAJ_o6gSqE86Udw", 1);

INSERT INTO Remeras (nombre, color) VALUES
('Boca Juniors', '[90, "FFFFFF", "0019BF", "FFA733", "0019BF"]'),
('River Plate', '[60, "000000", "FFFFFF", "C92020", "FFFFFF"]'),
/*
('Argentina', '[60, "000000", "FFFFFF", "C92020", "FFFFFF"]'),
('Brasil', '[60, "000000", "FFFFFF", "C92020", "FFFFFF"]'),
('Francia', '[60, "000000", "FFFFFF", "C92020", "FFFFFF"]'),
*/

INSERT INTO frases (frase, tipo_frase) VALUES
("{player} metió un golazo", 'gol'),
("{player} metió una re asistencia", 'asistencia'),
("{player} metió gol en contra", 'gol_en_contra');
