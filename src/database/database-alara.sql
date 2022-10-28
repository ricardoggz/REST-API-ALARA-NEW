-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-10-2022 a las 02:17:59
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


DROP TABLE IF EXISTS `ADMINS`;
CREATE TABLE IF NOT EXISTS `ADMINS` (
  `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ADMIN_NOMBRE` varchar(255) DEFAULT NULL,
  `ADMIN_USUARIO` varchar(255) NOT NULL,
  `ADMIN_CONTRASENA` varchar(255) NOT NULL,
  PRIMARY KEY (`ADMIN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `DETECTORES`;
CREATE TABLE IF NOT EXISTS `DETECTORES` (
  `DETECTOR_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DETECTOR_SERIE` varchar(60) NOT NULL,
  `DETECTOR_MARCA` varchar(60) DEFAULT NULL,
  `DETECTOR_TIPO` varchar(60) DEFAULT NULL,
  `DETECTOR_MODELO` varchar(60) DEFAULT NULL,
  `DETECTOR_ULT_SERVICIO` varchar(60) NOT NULL,
  `DETECTOR_PROX_SERVICIO` varchar(60) NOT NULL,
  `PSEUDO_ID` int(11) NOT NULL,
  `RAZON_ID` int(11) NOT NULL,
  PRIMARY KEY (`DETECTOR_ID`),
  KEY `PSEUDO_ID` (`PSEUDO_ID`),
  KEY `RAZON_ID` (`RAZON_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `PSEUDOSOCIOS`;
CREATE TABLE IF NOT EXISTS `PSEUDOSOCIOS` (
  `PSEUDO_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PSEUDO_NOMBRE` varchar(255) DEFAULT NULL,
  `PSEUDO_USUARIO` varchar(255) DEFAULT NULL,
  `PSEUDO_CONTRASENA` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PSEUDO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `RAZONSOCIAL`;
CREATE TABLE IF NOT EXISTS `RAZONSOCIAL` (
  `RAZON_ID` int(11) NOT NULL AUTO_INCREMENT,
  `RAZON_NOMBRE` varchar(255) NOT NULL,
  PRIMARY KEY (`RAZON_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;


INSERT INTO `RAZONSOCIAL` (`RAZON_ID`, `RAZON_NOMBRE`) VALUES
(3, 'Provederem Comyser, S.A. de C. V.'),
(4, 'RADIASEG, S.A. DE C.V.'),
(7, 'Accesorios para Laboratorios S.A, de C:V.'),
(10, 'Facundo Alfonso Peregrina Morales'),
(11, 'J.A. DIAZ Y CIA, S.A. DE C.V.'),
(12, 'RadFisica Aplicada, S.A. de C.V.'),
(13, 'SAB NAFTA, S.A DE C.V'),
(14, 'ARMANDO ESTRADA FRIAS'),
(15, 'Grupo Sandstorm Gam, S.A. de C.V.'),
(19, 'Tecnuclear, S.A. de C.V.'),
(23, 'Hospital Regional de Alta Especialidad (Ciudad Salud)'),
(25, 'Global Packaging Solutions, S.A. de C.V.'),
(26, 'ACCESOFARM, S.A. DE C.V.'),
(27, 'SCIENTY MED, S.A. DE C.V.'),
(29, 'Asesores en Radiaciones, S.A.'),
(35, 'Capstone Gold, S.A. de C.V.'),
(36, 'Almexa, S.A. de C.V. (Planta Tulpetlac)'),
(41, 'ELEMENTIA-NACOBRE'),
(44, 'C. Francisco Alonso Met'),
(50, 'Estudio Color, S.A. de C.V.'),
(54, 'Assesory and Logistic on Aplicated Radiation Assurance, S.A. de C.V.'),
(56, 'Segman, S.A. de C.V.'),
(62, 'RANTINA, S.A. DE C.V.'),
(63, 'Instituto Mexicano del Seguro Social. Hospital General Regional No. 72 \"Lic. Vicente Santos Guajardo\"'),
(65, 'Almexa Aluminio S.A. de C.V. (Planta Barrientos)'),
(67, 'Altopro S.A. de C.V');

ALTER TABLE `DETECTORES`
  ADD CONSTRAINT `PSEUDO_ID` FOREIGN KEY (`PSEUDO_ID`) REFERENCES `PSEUDOSOCIOS` (`PSEUDO_ID`),
  ADD CONSTRAINT `RAZON_ID` FOREIGN KEY (`RAZON_ID`) REFERENCES `RAZONSOCIAL` (`RAZON_ID`);
