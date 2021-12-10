-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Dic 10, 2021 alle 12:09
-- Versione del server: 8.0.17
-- Versione PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms_gen`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `component`
--

DROP TABLE IF EXISTS `component`;
CREATE TABLE IF NOT EXISTS `component` (
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `IDRoute` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `component`
--

INSERT INTO `component` (`Name`, `Content`, `IDRoute`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Home', '', 265, 1, '2021-12-07 10:53:12', 1, '2021-12-10 12:43:04', 1),
('Backend Home', '<h2>This is the homepage for the Backend of the website</h2>', 261, 2, '2021-12-08 16:28:14', 1, '2021-12-08 16:53:24', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `componentpermission`
--

DROP TABLE IF EXISTS `componentpermission`;
CREATE TABLE IF NOT EXISTS `componentpermission` (
  `IDComponent` int(11) NOT NULL,
  `IDUserType` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `componentpermission`
--

INSERT INTO `componentpermission` (`IDComponent`, `IDUserType`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
(1, 1, 0, '2021-12-07 11:11:19', 1, '2021-12-07 11:11:19', 1),
(1, 99, 0, '2021-12-07 11:11:19', 1, '2021-12-07 11:11:19', 1),
(2, 1, 0, '2021-12-08 16:28:32', 1, '2021-12-08 16:28:32', 1),
(1, 2, 0, '2021-12-10 12:43:04', 1, '2021-12-10 12:43:04', 1),
(1, 3, 0, '2021-12-10 12:43:04', 1, '2021-12-10 12:43:04', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `menupermission`
--

DROP TABLE IF EXISTS `menupermission`;
CREATE TABLE IF NOT EXISTS `menupermission` (
  `IDMenu` int(11) NOT NULL,
  `IDUserType` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=348 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dump dei dati per la tabella `menupermission`
--

INSERT INTO `menupermission` (`IDMenu`, `IDUserType`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
(17, 1, 56, '2021-05-13 19:55:15', 1, '2021-05-13 19:55:15', 1),
(16, 102, 55, '2021-05-13 19:55:09', 1, '2021-05-13 19:55:09', 1),
(17, 102, 57, '2021-05-13 19:55:15', 1, '2021-05-13 19:55:15', 1),
(16, 1, 54, '2021-05-13 19:55:09', 1, '2021-05-13 19:55:09', 1),
(14, 102, 53, '2021-05-13 19:55:05', 1, '2021-05-13 19:55:05', 1),
(14, 1, 52, '2021-05-13 19:55:05', 1, '2021-05-13 19:55:05', 1),
(13, 102, 51, '2021-05-13 19:55:00', 1, '2021-05-13 19:55:00', 1),
(13, 1, 50, '2021-05-13 19:55:00', 1, '2021-05-13 19:55:00', 1),
(12, 102, 49, '2021-05-13 19:54:54', 1, '2021-05-13 19:54:54', 1),
(12, 1, 48, '2021-05-13 19:54:54', 1, '2021-05-13 19:54:54', 1),
(11, 102, 47, '2021-05-13 19:54:50', 1, '2021-05-13 19:54:50', 1),
(11, 1, 46, '2021-05-13 19:54:50', 1, '2021-05-13 19:54:50', 1),
(9, 102, 45, '2021-05-13 19:54:45', 1, '2021-05-13 19:54:45', 1),
(9, 1, 44, '2021-05-13 19:54:45', 1, '2021-05-13 19:54:45', 1),
(10, 102, 43, '2021-05-13 19:54:41', 1, '2021-05-13 19:54:41', 1),
(10, 1, 42, '2021-05-13 19:54:41', 1, '2021-05-13 19:54:41', 1),
(8, 102, 41, '2021-05-13 19:54:35', 1, '2021-05-13 19:54:35', 1),
(8, 1, 40, '2021-05-13 19:54:35', 1, '2021-05-13 19:54:35', 1),
(15, 102, 39, '2021-05-13 19:54:29', 1, '2021-05-13 19:54:29', 1),
(15, 1, 38, '2021-05-13 19:54:29', 1, '2021-05-13 19:54:29', 1),
(56, 1, 330, '2021-11-15 17:28:48', 1, '2021-11-15 17:28:48', 1),
(6, 1, 36, '2021-05-13 19:54:22', 1, '2021-05-13 19:54:22', 1),
(7, 1, 35, '2021-05-13 19:54:15', 1, '2021-05-13 19:54:15', 1),
(5, 1, 34, '2021-05-13 19:54:09', 1, '2021-05-13 19:54:09', 1),
(4, 1, 33, '2021-05-13 19:54:02', 1, '2021-05-13 19:54:02', 1),
(3, 1, 32, '2021-05-13 19:53:55', 1, '2021-05-13 19:53:55', 1),
(41, 2, 274, '2021-05-15 11:12:29', 1, '2021-05-15 11:12:29', 1),
(1, 1, 30, '2021-05-13 19:49:53', 1, '2021-05-13 19:49:53', 1),
(61, 1, 347, '2021-12-07 11:26:25', 1, '2021-12-07 11:26:25', 1),
(58, 1, 344, '2021-12-05 21:13:23', 1, '2021-12-05 21:13:23', 1),
(18, 1, 60, '2021-05-13 19:57:40', 1, '2021-05-13 19:57:40', 1),
(18, 102, 61, '2021-05-13 19:57:40', 1, '2021-05-13 19:57:40', 1),
(19, 1, 62, '2021-05-13 19:58:15', 1, '2021-05-13 19:58:15', 1),
(19, 102, 63, '2021-05-13 19:58:15', 1, '2021-05-13 19:58:15', 1),
(20, 1, 64, '2021-05-13 19:59:47', 1, '2021-05-13 19:59:47', 1),
(21, 1, 65, '2021-05-13 20:00:36', 1, '2021-05-13 20:00:36', 1),
(21, 102, 66, '2021-05-13 20:00:36', 1, '2021-05-13 20:00:36', 1),
(22, 1, 67, '2021-05-13 20:03:18', 1, '2021-05-13 20:03:18', 1),
(22, 102, 68, '2021-05-13 20:03:18', 1, '2021-05-13 20:03:18', 1),
(23, 1, 69, '2021-05-13 20:04:12', 1, '2021-05-13 20:04:12', 1),
(23, 102, 70, '2021-05-13 20:04:12', 1, '2021-05-13 20:04:12', 1),
(24, 1, 71, '2021-05-13 20:17:52', 1, '2021-05-13 20:17:52', 1),
(24, 102, 72, '2021-05-13 20:17:52', 1, '2021-05-13 20:17:52', 1),
(18, 1, 73, '2021-05-13 20:18:08', 1, '2021-05-13 20:18:08', 1),
(18, 102, 74, '2021-05-13 20:18:08', 1, '2021-05-13 20:18:08', 1),
(19, 1, 75, '2021-05-13 20:18:25', 1, '2021-05-13 20:18:25', 1),
(19, 102, 76, '2021-05-13 20:18:25', 1, '2021-05-13 20:18:25', 1),
(21, 1, 77, '2021-05-13 20:18:43', 1, '2021-05-13 20:18:43', 1),
(21, 102, 78, '2021-05-13 20:18:43', 1, '2021-05-13 20:18:43', 1),
(16, 1, 79, '2021-05-13 20:19:08', 1, '2021-05-13 20:19:08', 1),
(16, 102, 80, '2021-05-13 20:19:08', 1, '2021-05-13 20:19:08', 1),
(17, 1, 81, '2021-05-13 20:19:17', 1, '2021-05-13 20:19:17', 1),
(17, 102, 82, '2021-05-13 20:19:17', 1, '2021-05-13 20:19:17', 1),
(18, 1, 83, '2021-05-13 20:19:42', 1, '2021-05-13 20:19:42', 1),
(18, 102, 84, '2021-05-13 20:19:42', 1, '2021-05-13 20:19:42', 1),
(19, 1, 85, '2021-05-13 20:19:51', 1, '2021-05-13 20:19:51', 1),
(19, 102, 86, '2021-05-13 20:19:51', 1, '2021-05-13 20:19:51', 1),
(21, 1, 87, '2021-05-13 20:20:03', 1, '2021-05-13 20:20:03', 1),
(21, 102, 88, '2021-05-13 20:20:03', 1, '2021-05-13 20:20:03', 1),
(25, 1, 89, '2021-05-13 20:20:37', 1, '2021-05-13 20:20:37', 1),
(26, 1, 90, '2021-05-13 20:21:08', 1, '2021-05-13 20:21:08', 1),
(27, 1, 91, '2021-05-13 20:21:56', 1, '2021-05-13 20:21:56', 1),
(27, 102, 92, '2021-05-13 20:21:56', 1, '2021-05-13 20:21:56', 1),
(16, 1, 93, '2021-05-13 20:22:07', 1, '2021-05-13 20:22:07', 1),
(16, 102, 94, '2021-05-13 20:22:07', 1, '2021-05-13 20:22:07', 1),
(17, 1, 95, '2021-05-13 20:22:19', 1, '2021-05-13 20:22:19', 1),
(17, 102, 96, '2021-05-13 20:22:19', 1, '2021-05-13 20:22:19', 1),
(18, 1, 97, '2021-05-13 20:22:35', 1, '2021-05-13 20:22:35', 1),
(18, 102, 98, '2021-05-13 20:22:35', 1, '2021-05-13 20:22:35', 1),
(19, 1, 99, '2021-05-13 20:22:43', 1, '2021-05-13 20:22:43', 1),
(19, 102, 100, '2021-05-13 20:22:43', 1, '2021-05-13 20:22:43', 1),
(21, 1, 101, '2021-05-13 20:22:52', 1, '2021-05-13 20:22:52', 1),
(21, 102, 102, '2021-05-13 20:22:52', 1, '2021-05-13 20:22:52', 1),
(28, 1, 103, '2021-05-13 20:23:44', 1, '2021-05-13 20:23:44', 1),
(28, 102, 104, '2021-05-13 20:23:44', 1, '2021-05-13 20:23:44', 1),
(28, 1, 105, '2021-05-13 20:24:03', 1, '2021-05-13 20:24:03', 1),
(28, 102, 106, '2021-05-13 20:24:03', 1, '2021-05-13 20:24:03', 1),
(13, 1, 107, '2021-05-13 20:24:16', 1, '2021-05-13 20:24:16', 1),
(13, 102, 108, '2021-05-13 20:24:16', 1, '2021-05-13 20:24:16', 1),
(14, 1, 109, '2021-05-13 20:24:42', 1, '2021-05-13 20:24:42', 1),
(14, 102, 110, '2021-05-13 20:24:42', 1, '2021-05-13 20:24:42', 1),
(32, 102, 148, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(41, 1, 273, '2021-05-15 11:12:29', 1, '2021-05-15 11:12:29', 1),
(34, 102, 173, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(32, 99, 152, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(32, 2, 150, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(32, 99, 147, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(32, 2, 145, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(32, 102, 153, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(32, 3, 151, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(32, 1, 149, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(32, 3, 146, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(32, 1, 144, '2021-05-14 11:45:41', 1, '2021-05-14 11:45:41', 1),
(30, 1, 124, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 2, 125, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 3, 126, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 99, 127, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 102, 128, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 1, 129, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 2, 130, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 3, 131, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 99, 132, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(30, 102, 133, '2021-05-14 11:44:52', 1, '2021-05-14 11:44:52', 1),
(31, 1, 134, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 2, 135, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 3, 136, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 99, 137, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 102, 138, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 1, 139, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 2, 140, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 3, 141, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 99, 142, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(31, 102, 143, '2021-05-14 11:45:00', 1, '2021-05-14 11:45:00', 1),
(34, 99, 172, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(34, 3, 171, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(34, 2, 170, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(34, 1, 169, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(33, 1, 159, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 2, 160, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 3, 161, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 99, 162, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 102, 163, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 1, 164, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 2, 165, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 3, 166, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 99, 167, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(33, 102, 168, '2021-05-14 11:47:22', 1, '2021-05-14 11:47:22', 1),
(34, 1, 174, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(34, 2, 175, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(34, 3, 176, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(34, 99, 177, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(34, 102, 178, '2021-05-14 11:48:09', 1, '2021-05-14 11:48:09', 1),
(35, 3, 310, '2021-06-06 14:47:10', 1, '2021-06-06 14:47:10', 1),
(35, 2, 180, '2021-05-14 11:49:01', 1, '2021-05-14 11:49:01', 1),
(35, 3, 181, '2021-05-14 11:49:01', 1, '2021-05-14 11:49:01', 1),
(35, 102, 182, '2021-05-14 11:49:01', 1, '2021-05-14 11:49:01', 1),
(35, 2, 309, '2021-06-06 14:47:10', 1, '2021-06-06 14:47:10', 1),
(35, 2, 184, '2021-05-14 11:49:01', 1, '2021-05-14 11:49:01', 1),
(35, 3, 185, '2021-05-14 11:49:01', 1, '2021-05-14 11:49:01', 1),
(35, 102, 186, '2021-05-14 11:49:01', 1, '2021-05-14 11:49:01', 1),
(36, 1, 187, '2021-05-14 11:49:44', 1, '2021-05-14 11:49:44', 1),
(36, 2, 188, '2021-05-14 11:49:44', 1, '2021-05-14 11:49:44', 1),
(36, 102, 189, '2021-05-14 11:49:44', 1, '2021-05-14 11:49:44', 1),
(36, 1, 190, '2021-05-14 11:49:44', 1, '2021-05-14 11:49:44', 1),
(36, 2, 191, '2021-05-14 11:49:44', 1, '2021-05-14 11:49:44', 1),
(36, 102, 192, '2021-05-14 11:49:44', 1, '2021-05-14 11:49:44', 1),
(39, 1, 204, '2021-05-14 11:51:58', 1, '2021-05-14 11:51:58', 1),
(38, 99, 203, '2021-05-14 11:51:16', 1, '2021-05-14 11:51:16', 1),
(38, 99, 202, '2021-05-14 11:51:16', 1, '2021-05-14 11:51:16', 1),
(37, 1, 196, '2021-05-14 11:50:32', 1, '2021-05-14 11:50:32', 1),
(37, 2, 197, '2021-05-14 11:50:32', 1, '2021-05-14 11:50:32', 1),
(37, 102, 198, '2021-05-14 11:50:32', 1, '2021-05-14 11:50:32', 1),
(37, 1, 199, '2021-05-14 11:50:32', 1, '2021-05-14 11:50:32', 1),
(37, 2, 200, '2021-05-14 11:50:32', 1, '2021-05-14 11:50:32', 1),
(37, 102, 201, '2021-05-14 11:50:32', 1, '2021-05-14 11:50:32', 1),
(39, 2, 205, '2021-05-14 11:51:58', 1, '2021-05-14 11:51:58', 1),
(39, 3, 206, '2021-05-14 11:51:58', 1, '2021-05-14 11:51:58', 1),
(39, 102, 207, '2021-05-14 11:51:58', 1, '2021-05-14 11:51:58', 1),
(39, 1, 208, '2021-05-14 11:51:58', 1, '2021-05-14 11:51:58', 1),
(39, 2, 209, '2021-05-14 11:51:58', 1, '2021-05-14 11:51:58', 1),
(39, 3, 210, '2021-05-14 11:51:58', 1, '2021-05-14 11:51:58', 1),
(39, 102, 211, '2021-05-14 11:51:58', 1, '2021-05-14 11:51:58', 1),
(47, 1, 212, '2021-05-14 11:57:37', 1, '2021-05-14 11:57:37', 1),
(47, 2, 213, '2021-05-14 11:57:37', 1, '2021-05-14 11:57:37', 1),
(47, 102, 214, '2021-05-14 11:57:37', 1, '2021-05-14 11:57:37', 1),
(47, 1, 215, '2021-05-14 11:57:37', 1, '2021-05-14 11:57:37', 1),
(47, 2, 216, '2021-05-14 11:57:37', 1, '2021-05-14 11:57:37', 1),
(47, 102, 217, '2021-05-14 11:57:37', 1, '2021-05-14 11:57:37', 1),
(40, 1, 218, '2021-05-14 11:57:44', 1, '2021-05-14 11:57:44', 1),
(40, 2, 219, '2021-05-14 11:57:44', 1, '2021-05-14 11:57:44', 1),
(40, 102, 220, '2021-05-14 11:57:44', 1, '2021-05-14 11:57:44', 1),
(40, 1, 221, '2021-05-14 11:57:44', 1, '2021-05-14 11:57:44', 1),
(40, 2, 222, '2021-05-14 11:57:44', 1, '2021-05-14 11:57:44', 1),
(40, 102, 223, '2021-05-14 11:57:44', 1, '2021-05-14 11:57:44', 1),
(41, 1, 224, '2021-05-14 11:57:53', 1, '2021-05-14 11:57:53', 1),
(41, 2, 225, '2021-05-14 11:57:53', 1, '2021-05-14 11:57:53', 1),
(41, 102, 226, '2021-05-14 11:57:53', 1, '2021-05-14 11:57:53', 1),
(41, 1, 227, '2021-05-14 11:57:53', 1, '2021-05-14 11:57:53', 1),
(41, 2, 228, '2021-05-14 11:57:53', 1, '2021-05-14 11:57:53', 1),
(41, 102, 229, '2021-05-14 11:57:53', 1, '2021-05-14 11:57:53', 1),
(42, 1, 230, '2021-05-14 11:58:00', 1, '2021-05-14 11:58:00', 1),
(42, 2, 231, '2021-05-14 11:58:00', 1, '2021-05-14 11:58:00', 1),
(42, 102, 232, '2021-05-14 11:58:00', 1, '2021-05-14 11:58:00', 1),
(42, 1, 233, '2021-05-14 11:58:00', 1, '2021-05-14 11:58:00', 1),
(42, 2, 234, '2021-05-14 11:58:00', 1, '2021-05-14 11:58:00', 1),
(42, 102, 235, '2021-05-14 11:58:00', 1, '2021-05-14 11:58:00', 1),
(43, 1, 236, '2021-05-14 11:58:10', 1, '2021-05-14 11:58:10', 1),
(43, 2, 237, '2021-05-14 11:58:10', 1, '2021-05-14 11:58:10', 1),
(43, 102, 238, '2021-05-14 11:58:10', 1, '2021-05-14 11:58:10', 1),
(43, 1, 239, '2021-05-14 11:58:10', 1, '2021-05-14 11:58:10', 1),
(43, 2, 240, '2021-05-14 11:58:10', 1, '2021-05-14 11:58:10', 1),
(43, 102, 241, '2021-05-14 11:58:10', 1, '2021-05-14 11:58:10', 1),
(44, 1, 242, '2021-05-14 11:58:17', 1, '2021-05-14 11:58:17', 1),
(44, 2, 243, '2021-05-14 11:58:17', 1, '2021-05-14 11:58:17', 1),
(44, 102, 244, '2021-05-14 11:58:17', 1, '2021-05-14 11:58:17', 1),
(44, 1, 245, '2021-05-14 11:58:17', 1, '2021-05-14 11:58:17', 1),
(44, 2, 246, '2021-05-14 11:58:17', 1, '2021-05-14 11:58:17', 1),
(44, 102, 247, '2021-05-14 11:58:17', 1, '2021-05-14 11:58:17', 1),
(45, 1, 248, '2021-05-14 11:58:25', 1, '2021-05-14 11:58:25', 1),
(45, 2, 249, '2021-05-14 11:58:25', 1, '2021-05-14 11:58:25', 1),
(45, 102, 250, '2021-05-14 11:58:25', 1, '2021-05-14 11:58:25', 1),
(45, 1, 251, '2021-05-14 11:58:25', 1, '2021-05-14 11:58:25', 1),
(45, 2, 252, '2021-05-14 11:58:25', 1, '2021-05-14 11:58:25', 1),
(45, 102, 253, '2021-05-14 11:58:25', 1, '2021-05-14 11:58:25', 1),
(46, 1, 254, '2021-05-14 11:58:32', 1, '2021-05-14 11:58:32', 1),
(46, 2, 255, '2021-05-14 11:58:32', 1, '2021-05-14 11:58:32', 1),
(46, 102, 256, '2021-05-14 11:58:32', 1, '2021-05-14 11:58:32', 1),
(46, 1, 257, '2021-05-14 11:58:32', 1, '2021-05-14 11:58:32', 1),
(46, 2, 258, '2021-05-14 11:58:32', 1, '2021-05-14 11:58:32', 1),
(46, 102, 259, '2021-05-14 11:58:32', 1, '2021-05-14 11:58:32', 1),
(48, 1, 260, '2021-05-14 11:58:38', 1, '2021-05-14 11:58:38', 1),
(48, 2, 261, '2021-05-14 11:58:38', 1, '2021-05-14 11:58:38', 1),
(48, 102, 262, '2021-05-14 11:58:38', 1, '2021-05-14 11:58:38', 1),
(48, 1, 263, '2021-05-14 11:58:38', 1, '2021-05-14 11:58:38', 1),
(48, 2, 264, '2021-05-14 11:58:38', 1, '2021-05-14 11:58:38', 1),
(48, 102, 265, '2021-05-14 11:58:38', 1, '2021-05-14 11:58:38', 1),
(47, 1, 266, '2021-05-14 11:58:58', 1, '2021-05-14 11:58:58', 1),
(47, 2, 267, '2021-05-14 11:58:58', 1, '2021-05-14 11:58:58', 1),
(47, 102, 268, '2021-05-14 11:58:58', 1, '2021-05-14 11:58:58', 1),
(47, 1, 269, '2021-05-14 11:58:58', 1, '2021-05-14 11:58:58', 1),
(47, 2, 270, '2021-05-14 11:58:58', 1, '2021-05-14 11:58:58', 1),
(47, 102, 271, '2021-05-14 11:58:58', 1, '2021-05-14 11:58:58', 1),
(2, 1, 272, '2021-05-15 10:54:55', 1, '2021-05-15 10:54:55', 1),
(41, 102, 275, '2021-05-15 11:12:29', 1, '2021-05-15 11:12:29', 1),
(41, 1, 276, '2021-05-15 11:13:37', 1, '2021-05-15 11:13:37', 1),
(41, 2, 277, '2021-05-15 11:13:37', 1, '2021-05-15 11:13:37', 1),
(41, 102, 278, '2021-05-15 11:13:37', 1, '2021-05-15 11:13:37', 1),
(42, 1, 279, '2021-05-15 11:17:12', 1, '2021-05-15 11:17:12', 1),
(42, 2, 280, '2021-05-15 11:17:12', 1, '2021-05-15 11:17:12', 1),
(42, 102, 281, '2021-05-15 11:17:12', 1, '2021-05-15 11:17:12', 1),
(43, 1, 282, '2021-05-15 11:17:19', 1, '2021-05-15 11:17:19', 1),
(43, 2, 283, '2021-05-15 11:17:19', 1, '2021-05-15 11:17:19', 1),
(43, 102, 284, '2021-05-15 11:17:19', 1, '2021-05-15 11:17:19', 1),
(44, 1, 285, '2021-05-15 11:17:25', 1, '2021-05-15 11:17:25', 1),
(44, 2, 286, '2021-05-15 11:17:25', 1, '2021-05-15 11:17:25', 1),
(44, 102, 287, '2021-05-15 11:17:25', 1, '2021-05-15 11:17:25', 1),
(45, 1, 288, '2021-05-15 11:17:31', 1, '2021-05-15 11:17:31', 1),
(45, 2, 289, '2021-05-15 11:17:31', 1, '2021-05-15 11:17:31', 1),
(45, 102, 290, '2021-05-15 11:17:31', 1, '2021-05-15 11:17:31', 1),
(46, 1, 291, '2021-05-15 11:17:36', 1, '2021-05-15 11:17:36', 1),
(46, 2, 292, '2021-05-15 11:17:36', 1, '2021-05-15 11:17:36', 1),
(46, 102, 293, '2021-05-15 11:17:36', 1, '2021-05-15 11:17:36', 1),
(48, 1, 294, '2021-05-15 11:17:44', 1, '2021-05-15 11:17:44', 1),
(48, 2, 295, '2021-05-15 11:17:44', 1, '2021-05-15 11:17:44', 1),
(48, 102, 296, '2021-05-15 11:17:44', 1, '2021-05-15 11:17:44', 1),
(47, 1, 297, '2021-05-15 11:17:50', 1, '2021-05-15 11:17:50', 1),
(47, 2, 298, '2021-05-15 11:17:50', 1, '2021-05-15 11:17:50', 1),
(47, 102, 299, '2021-05-15 11:17:50', 1, '2021-05-15 11:17:50', 1),
(36, 1, 300, '2021-05-15 11:37:00', 1, '2021-05-15 11:37:00', 1),
(36, 2, 301, '2021-05-15 11:37:00', 1, '2021-05-15 11:37:00', 1),
(36, 102, 302, '2021-05-15 11:37:00', 1, '2021-05-15 11:37:00', 1),
(37, 1, 303, '2021-05-15 11:37:08', 1, '2021-05-15 11:37:08', 1),
(37, 2, 304, '2021-05-15 11:37:08', 1, '2021-05-15 11:37:08', 1),
(37, 102, 305, '2021-05-15 11:37:08', 1, '2021-05-15 11:37:08', 1),
(29, 99, 306, '2021-06-05 10:11:25', 1, '2021-06-05 10:11:25', 1),
(50, 1, 307, '2021-06-06 07:43:14', 1, '2021-06-06 07:43:14', 1),
(50, 102, 308, '2021-06-06 07:43:14', 1, '2021-06-06 07:43:14', 1),
(35, 102, 311, '2021-06-06 14:47:10', 1, '2021-06-06 14:47:10', 1),
(35, 2, 312, '2021-06-06 14:48:12', 1, '2021-06-06 14:48:12', 1),
(35, 3, 313, '2021-06-06 14:48:12', 1, '2021-06-06 14:48:12', 1),
(35, 102, 314, '2021-06-06 14:48:12', 1, '2021-06-06 14:48:12', 1),
(35, 2, 315, '2021-06-06 15:05:12', 1, '2021-06-06 15:05:12', 1),
(35, 3, 316, '2021-06-06 15:05:12', 1, '2021-06-06 15:05:12', 1),
(35, 102, 317, '2021-06-06 15:05:12', 1, '2021-06-06 15:05:12', 1),
(35, 1, 318, '2021-06-06 18:53:48', 1, '2021-06-06 18:53:48', 1),
(35, 2, 319, '2021-06-06 18:53:48', 1, '2021-06-06 18:53:48', 1),
(35, 3, 320, '2021-06-06 18:53:48', 1, '2021-06-06 18:53:48', 1),
(35, 102, 321, '2021-06-06 18:53:48', 1, '2021-06-06 18:53:48', 1),
(51, 99, 323, '2021-08-01 16:18:31', 1, '2021-08-01 16:18:31', 1),
(57, 99, 343, '2021-12-05 21:12:19', 1, '2021-12-05 21:12:19', 1),
(6, 2, 325, '2021-08-01 16:30:39', 1, '2021-08-01 16:30:39', 1),
(6, 3, 326, '2021-08-01 16:30:39', 1, '2021-08-01 16:30:39', 1),
(53, 1, 327, '2021-08-01 16:45:07', 1, '2021-08-01 16:45:07', 1),
(54, 1, 328, '2021-08-01 16:47:38', 1, '2021-08-01 16:47:38', 1),
(55, 1, 329, '2021-08-06 11:58:21', 1, '2021-08-06 11:58:21', 1),
(57, 3, 342, '2021-12-05 21:12:19', 1, '2021-12-05 21:12:19', 1),
(57, 2, 341, '2021-12-05 21:12:19', 1, '2021-12-05 21:12:19', 1),
(57, 1, 340, '2021-12-05 21:12:19', 1, '2021-12-05 21:12:19', 1),
(59, 1, 345, '2021-12-06 09:16:54', 1, '2021-12-06 09:16:54', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `menus`
--

DROP TABLE IF EXISTS `menus`;
CREATE TABLE IF NOT EXISTS `menus` (
  `MenuName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Parent` int(11) NOT NULL DEFAULT '-1',
  `Path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `MenuOrder` int(11) DEFAULT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `menus`
--

INSERT INTO `menus` (`MenuName`, `Name`, `Parent`, `Path`, `MenuOrder`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('MainMenuBe', 'Configuration', -1, '', 0, 1, '2021-05-12 20:24:19', 1, '2021-11-27 15:49:40', 1),
('MainMenuBe', 'Users', 1, '../be/users', 0, 2, '2021-05-12 21:30:27', 1, '2021-12-05 21:13:43', 1),
('MainMenuBe', 'Routes', 1, '../be/routes', 20, 3, '2021-05-12 21:31:01', 1, '2021-12-05 21:13:53', 1),
('MainMenuBe', 'UserTypes', 1, '../be/userTypes', 10, 4, '2021-05-12 21:31:30', 1, '2021-12-05 21:14:04', 1),
('MainMenuBe', 'Menus', 1, '../be/menus', 30, 5, '2021-05-12 21:33:11', 1, '2021-12-05 21:14:15', 1),
('MainMenuBe', 'Logout', -1, '../logout', 99, 6, '2021-05-12 21:53:42', 1, '2021-12-06 09:46:28', 1),
('MainMenuFe', 'Login', -1, '../login', 99, 29, '2021-05-14 11:27:35', 1, '2021-12-06 09:46:12', 1),
('MainMenuFe', 'Logout', -1, '../logout', 99, 60, '2021-05-12 21:53:42', 1, '2021-12-06 09:46:28', 1),
('MainMenuBe', 'Tools', -1, '', 10, 53, '2021-08-01 16:44:51', 1, '2021-08-01 16:45:07', 1),
('MainMenuBe', 'Database', 53, '../be/db', 0, 54, '2021-08-01 16:47:24', 1, '2021-12-05 21:14:50', 1),
('MainMenuFe', 'Register', -1, '../register', 99, 51, '2021-08-01 16:17:28', 1, '2021-12-06 09:45:54', 1),
('MainMenuFe', 'Home', -1, 'home', 0, 57, '2021-12-05 21:11:55', 1, '2021-12-05 21:12:19', 1),
('MainMenuFe', 'Backend', -1, '../be/home', 0, 58, '2021-12-05 21:13:14', 1, '2021-12-05 21:13:23', 1),
('MainMenuBe', 'FrontEnd', -1, '../home', 90, 59, '2021-12-06 09:16:33', 1, '2021-12-06 09:16:54', 1),
('MainMenuBe', 'Component Editor', -1, '../be/componenteditor', 30, 61, '2021-12-07 11:26:08', 1, '2021-12-07 11:27:18', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `routes`
--

DROP TABLE IF EXISTS `routes`;
CREATE TABLE IF NOT EXISTS `routes` (
  `Package` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Func` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Type` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'fe',
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=267 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `routes`
--

INSERT INTO `routes` (`Package`, `Func`, `Type`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('usertype', '*', '*', 242, '2021-11-27 01:53:20', 1, '2021-11-27 01:53:20', 1),
('menu', 'getmenu', 'api', 240, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('page', '*', '*', 256, '2021-11-27 11:43:34', 1, '2021-11-27 11:43:34', 1),
('page', 'home', 'be', 261, '2021-11-27 11:55:26', 1, '2021-11-27 11:55:50', 1),
('page', 'login', 'fe', 262, '2021-11-27 11:59:43', 1, '2021-11-27 11:59:43', 1),
('page', 'logout', 'fe', 263, '2021-11-27 12:00:03', 1, '2021-11-27 12:00:03', 1),
('dbapi', '*', 'api', 264, '2021-11-27 17:34:27', 1, '2021-11-27 17:34:27', 1),
('route', '*', 'api', 236, '2021-08-01 16:28:09', 1, '2021-08-01 16:28:13', 1),
('user', '*', 'api', 237, '2021-08-01 16:28:52', 1, '2021-08-01 16:28:56', 1),
('menu', '*', 'api', 235, '2021-08-01 16:27:30', 1, '2021-08-01 16:27:34', 1),
('page', 'home', 'fe', 265, '2021-11-27 11:55:26', 1, '2021-11-27 11:55:50', 1),
('component', '*', 'api', 266, '2021-12-07 15:07:00', 1, '2021-12-07 15:10:36', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `routespermission`
--

DROP TABLE IF EXISTS `routespermission`;
CREATE TABLE IF NOT EXISTS `routespermission` (
  `IDRoute` int(11) NOT NULL,
  `IDUserType` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dump dei dati per la tabella `routespermission`
--

INSERT INTO `routespermission` (`IDRoute`, `IDUserType`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
(266, 1, 108, '2021-12-07 15:10:11', 1, '2021-12-07 15:10:11', 1),
(264, 1, 107, '2021-11-27 17:34:27', 1, '2021-11-27 17:34:27', 1),
(1, 1, 106, '2021-11-27 15:28:37', 1, '2021-11-27 15:28:37', 1),
(1, 1, 105, '2021-11-27 15:28:19', 1, '2021-11-27 15:28:19', 1),
(1, 1, 104, '2021-11-27 15:27:37', 1, '2021-11-27 15:27:37', 1),
(1, 1, 103, '2021-11-27 15:27:20', 1, '2021-11-27 15:27:20', 1),
(1, 1, 102, '2021-11-27 15:26:52', 1, '2021-11-27 15:26:52', 1),
(1, 1, 101, '2021-11-27 15:26:00', 1, '2021-11-27 15:26:00', 1),
(1, 1, 100, '2021-11-27 15:25:31', 1, '2021-11-27 15:25:31', 1),
(1, 1, 99, '2021-11-27 15:24:19', 1, '2021-11-27 15:24:19', 1),
(1, 1, 98, '2021-11-27 15:23:56', 1, '2021-11-27 15:23:56', 1),
(263, 3, 97, '2021-11-27 12:00:03', 1, '2021-11-27 12:00:03', 1),
(263, 2, 96, '2021-11-27 12:00:03', 1, '2021-11-27 12:00:03', 1),
(262, 99, 95, '2021-11-27 11:59:43', 1, '2021-11-27 11:59:43', 1),
(235, 1, 67, '2021-08-01 16:27:34', 1, '2021-08-01 16:27:34', 1),
(261, 3, 93, '2021-11-27 11:55:50', 1, '2021-11-27 11:55:50', 1),
(232, 1, 65, '2021-08-01 16:22:52', 1, '2021-08-01 16:22:52', 1),
(241, 1, 73, '2021-09-04 22:41:23', 1, '2021-09-04 22:41:23', 1),
(236, 1, 68, '2021-08-01 16:28:13', 1, '2021-08-01 16:28:13', 1),
(261, 99, 94, '2021-11-27 11:55:50', 1, '2021-11-27 11:55:50', 1),
(256, 1, 84, '2021-11-27 11:43:34', 1, '2021-11-27 11:43:34', 1),
(237, 1, 69, '2021-08-01 16:28:56', 1, '2021-08-01 16:28:56', 1),
(242, 1, 74, '2021-11-27 01:54:30', 1, '2021-11-27 01:54:30', 1),
(225, 1, 58, '2021-08-01 14:43:34', 1, '2021-08-01 14:43:34', 1),
(239, 1, 71, '2021-08-06 14:28:58', 1, '2021-08-06 14:28:58', 1),
(240, 99, 72, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
(222, 1, 55, '2021-07-30 17:57:24', 1, '2021-07-30 17:57:24', 1),
(221, 1, 54, '2021-07-30 17:53:32', 1, '2021-07-30 17:53:32', 1),
(261, 2, 92, '2021-11-27 11:55:50', 1, '2021-11-27 11:55:50', 1),
(219, 1, 52, '2021-07-30 14:43:26', 1, '2021-07-30 14:43:26', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `storedqueries`
--

DROP TABLE IF EXISTS `storedqueries`;
CREATE TABLE IF NOT EXISTS `storedqueries` (
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Command` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `storedqueries`
--

INSERT INTO `storedqueries` (`Name`, `Command`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('MenuPrinc', 'SELECT DISTINCT Menus.MenuName, Menus.Name, Menus.Parent, Menus.Path, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM menus INNER JOIN menupermission ON menus.ID = menupermission.IDMenu INNER JOIN UserTypes ON menupermission.IDUserType = UserTypes.ID WHERE menupermission.IDUserType = ? AND menus.MenuName = ? AND menus.Parent = ? ORDER BY menus.MenuOrder', 1, '2021-08-28 11:31:36', 1, '2021-08-28 11:31:36', 1),
('RoutePrinc', 'SELECT Routes.Package, Routes.Func, Routes.Type, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes', 4, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('UserPrinc', 'SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID', 3, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetComponent', 'SELECT component.Name, component.Content, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component JOIN componentpermission ON component.ID = componentpermission.IDComponent  JOIN routes ON component.IDRoute = routes.ID WHERE CONCAT(routes.Type, \'/\', routes.Func) = ? AND componentpermission.IDUserType = ?', 24, '2021-12-07 10:41:23', 1, '2021-12-07 10:41:23', 1),
('CheckRoute', 'SELECT routes.Package, routes.Func FROM routes INNER JOIN routespermission ON routes.ID = routespermission.IDRoute INNER JOIN UserTypes ON routespermission.IDUserType = UserTypes.ID WHERE (routespermission.IDUserType = ? AND routes.Package = ? AND (routes.Func = ? OR routes.Func = \'*\') AND (routes.Type = ? OR routes.Type = \'*\')) LIMIT 1', 5, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('UserTypePrinc', 'SELECT Description, ID, InsertDate, IDInsertUser, EditDate, IDEditUser FROM UserTypes', 6, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('RoutePermissionPrinc', 'SELECT RoutesPermission.IDRoute, RoutesPermission.IDUserType, UserTypes.Description, UserTypes.ID, UserTypes.InsertDate, UserTypes.IDInsertUser, UserTypes.EditDate, UserTypes.IDEditUser FROM RoutesPermission LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID WHERE RoutesPermission.IDRoute = ?', 7, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('MenuPlain', 'SELECT Menus.MenuName, Menus.Name, Menus.Parent, Menus.Path, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM Menus LIMIT ?, ?', 8, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('MenuPermissionPrinc', 'SELECT MenuPermission.IDMenu, MenuPermission.IDUserType, UserTypes.Description, UserTypes.ID, UserTypes.InsertDate, UserTypes.IDInsertUser, UserTypes.EditDate, UserTypes.IDEditUser FROM MenuPermission LEFT JOIN UserTypes ON MenuPermission.IDUserType = UserTypes.ID WHERE MenuPermission.IDMenu = ?', 9, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddMenu', 'INSERT INTO Menus(MenuName, Name, Parent, Path, MenuOrder, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, ?, NOW(), ?, NOW(), ?)', 11, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddRoute', 'INSERT INTO Routes(Package, Func, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, NOW(), ?, NOW(), ?)', 12, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00', 0),
('AddUser', 'INSERT INTO Users (Username, Password, LastLogin, DatePassword, PasswordDuration, IDUserType, CodeResetPassword, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?, ?, NOW(), NOW(), ?, ?, ?, NOW(), ?, NOW(), ?)', 13, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddUserType', 'INSERT INTO UserTypes(Description, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, NOW(), ?, NOW(), ?)', 14, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('CountMenuPlain', 'SELECT COUNT(*) as Conteggio FROM Menus', 16, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('CountUser', 'SELECT COUNT(*) as Conteggio FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID', 18, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('CountRoute', 'SELECT COUNT(*) as Conteggio FROM Routes LEFT JOIN RoutesPermission ON Routes.ID = RoutesPermission.IDRoute LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID', 17, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetComponentFromID', 'SELECT component.Name, component.Content, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component WHERE component.ID = ? LIMIT 1', 28, '2021-12-07 10:59:07', 1, '2021-12-07 10:59:07', 1),
('LoadComponents', 'SELECT component.Name, component.Content, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component LIMIT ?, ?', 27, '2021-12-07 14:11:30', 1, '2021-12-07 14:11:30', 1),
('GetRoute', 'SELECT Routes.Package, Routes.Func, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes LEFT JOIN RoutesPermission ON Routes.ID = RoutesPermission.IDRoute LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID WHERE routes.Package = ? AND routes.Func = ? LIMIT 1', 22, '2021-11-27 10:41:59', 1, '2021-11-27 10:41:59', 1),
('GetRouteFromID', 'SELECT Routes.Package, Routes.Func, Routes.Type, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes LEFT JOIN RoutesPermission ON Routes.ID = RoutesPermission.IDRoute LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID WHERE routes.ID = ? LIMIT 1', 23, '2021-11-27 11:40:09', 1, '2021-11-27 11:40:09', 1),
('GetComponentPermission', 'SELECT componentpermission.IDComponent, componentpermission.IDUserType, UserTypes.Description, componentpermission.ID, componentpermission.InsertDate, componentpermission.IDInsertUser, componentpermission.EditDate, componentpermission.IDEditUser FROM componentpermission LEFT JOIN UserTypes ON componentpermission.IDUserType = UserTypes.ID WHERE componentpermission.IDComponent = ?', 25, '2021-12-07 10:44:17', 1, '2021-12-07 10:44:17', 1),
('GetMenuFromID', 'SELECT menus.MenuName, menus.Name, menus.Parent, menus.Path, menus.MenuOrder, menus.ID, menus.InsertDate, menus.IDInsertUser, menus.EditDate, menus.IDEditUser FROM menus WHERE menus.ID = ? LIMIT 1', 26, '2021-12-07 10:59:07', 1, '2021-12-07 10:59:07', 1),
('AddComponent', 'INSERT INTO component(Name, Content, IDRoute, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?,?,?,NOW(),?,NOW(),?)', 29, '2021-12-08 16:24:52', 1, '2021-12-08 16:24:52', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `Username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `LastLogin` datetime NOT NULL,
  `DatePassword` datetime NOT NULL,
  `PasswordDuration` int(11) NOT NULL DEFAULT '90',
  `IDUserType` int(11) NOT NULL,
  `CodeResetPassword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`Username`, `Password`, `LastLogin`, `DatePassword`, `PasswordDuration`, `IDUserType`, `CodeResetPassword`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('ghimdalas@gmail.com', '16a7d7a86556c85a393eb602549efe75', '2021-08-12 09:53:39', '2021-09-03 19:03:03', -1, 1, '', 1, '2020-12-28 16:34:51', 1, '2021-12-07 11:22:08', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `usertypes`
--

DROP TABLE IF EXISTS `usertypes`;
CREATE TABLE IF NOT EXISTS `usertypes` (
  `Description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `usertypes`
--

INSERT INTO `usertypes` (`Description`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Admin', 1, '2020-12-28 16:34:17', 1, '2020-12-28 16:34:17', 1),
('User', 2, '2020-12-28 16:34:17', 1, '2020-12-28 16:34:17', 1),
('UserNotVerified', 3, '2020-12-28 16:34:17', 1, '2020-12-28 16:34:17', 1),
('Guest', 99, '2020-12-28 16:34:17', 1, '2020-12-28 16:34:17', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
