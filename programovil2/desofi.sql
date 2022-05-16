create database desofiwdb;

use database desofiwdb;

create table personas(
    personaPk int not null auto_increment,
    nombre varchar(50),
    apellido varchar(50),
    telefono varchar(8),
    tipo ENUM('empleado','cliente'),
    imagenUrl varchar(255),
    fechaNacimiento date,
    fechaRegistro TIMESTAMP default current_timestamp,
    estado bit default 1,
    PRIMARY KEY(personaPk)

);


create table usuarios(
    nombreUsuario varchar(15) not null,
    email varchar(320),
    clave varchar(450),
    personaFk int ,
    estado ENUM('activo','inactivo','bloqueado'),
    loginsFallidos int,
    pinRecuperacion varchar(15),
    fechaRegistro TIMESTAMP default current_timestamp,
    fechaActualizacion TIMESTAMP default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(nombreUsuario),
    FOREIGN KEY(personaFk) references personas(personaPk)
);

create table iniciosSession(
    id int not null,
    usuario varchar(15) not null,
    estado ENUM('exitoso','fallido'),
    fecha TIMESTAMP default current_timestamp,
    PRIMARY KEY(id),
    FOREIGN KEY(usuario) references usuarios(nombreUsuario)
);