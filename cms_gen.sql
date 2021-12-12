-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Dic 12, 2021 alle 22:09
-- Versione del server: 10.4.13-MariaDB
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
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `component`
--

INSERT INTO `component` (`Name`, `Content`, `IDRoute`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Home', '<p>This is the homepage for the front end of the website</p>', 288, 1, '2021-12-07 10:53:12', 1, '2021-12-11 11:02:03', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `menus`
--

DROP TABLE IF EXISTS `menus`;
CREATE TABLE IF NOT EXISTS `menus` (
  `MenuName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Parent` int(11) NOT NULL DEFAULT -1,
  `IDRoute` int(11) NOT NULL,
  `MenuOrder` int(11) DEFAULT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `menus`
--

INSERT INTO `menus` (`MenuName`, `Name`, `Parent`, `IDRoute`, `MenuOrder`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('MainMenuBe', 'Configuration', -1, 323, 0, 1, '2021-05-12 20:24:19', 1, '2021-12-11 17:46:42', 1),
('MainMenuBe', 'Users', 1, 278, 0, 2, '2021-05-12 21:30:27', 1, '2021-12-05 21:13:43', 1),
('MainMenuBe', 'Routes', 1, 279, 20, 3, '2021-05-12 21:31:01', 1, '2021-12-05 21:13:53', 1),
('MainMenuBe', 'UserTypes', 1, 280, 10, 4, '2021-05-12 21:31:30', 1, '2021-12-05 21:14:04', 1),
('MainMenuBe', 'Menus', 1, 281, 30, 5, '2021-05-12 21:33:11', 1, '2021-12-05 21:14:15', 1),
('MainMenuBe', 'Logout', -1, 318, 99, 6, '2021-05-12 21:53:42', 1, '2021-12-11 17:28:44', 1),
('MainMenuFe', 'Login', -1, 319, 99, 29, '2021-05-14 11:27:35', 1, '2021-12-11 17:29:56', 1),
('MainMenuFe', 'Logout', -1, 282, 99, 60, '2021-05-12 21:53:42', 1, '2021-12-11 17:29:04', 1),
('MainMenuBe', 'Tools', -1, 323, 10, 53, '2021-08-01 16:44:51', 1, '2021-12-11 17:46:55', 1),
('MainMenuBe', 'Database', 53, 283, 0, 54, '2021-08-01 16:47:24', 1, '2021-12-05 21:14:50', 1),
('MainMenuFe', 'Register', -1, 286, 99, 51, '2021-08-01 16:17:28', 1, '2021-12-06 09:45:54', 1),
('MainMenuFe', 'Home', -1, 288, 0, 57, '2021-12-05 21:11:55', 1, '2021-12-11 17:25:54', 1),
('MainMenuFe', 'Backend', -1, 287, 99, 58, '2021-12-05 21:13:14', 1, '2021-12-11 17:24:27', 1),
('MainMenuBe', 'FrontEnd', -1, 288, 90, 59, '2021-12-06 09:16:33', 1, '2021-12-11 15:31:02', 1),
('MainMenuBe', 'Component Editor', -1, 284, 30, 61, '2021-12-07 11:26:08', 1, '2021-12-07 11:27:18', 1),
('MainMenuFe', 'Ambientazione', -1, 314, 10, 62, '2021-12-11 12:16:17', 1, '2021-12-11 17:30:43', 1),
('MainMenuFe', 'Regolamento', -1, 320, 20, 63, '2021-12-11 12:21:02', 1, '2021-12-11 17:31:28', 1),
('MainMenuFe', 'Guida', -1, 321, 40, 64, '2021-12-11 12:25:14', 1, '2021-12-11 17:32:02', 1),
('MainMenuFe', 'Info luoghi', -1, 322, 50, 65, '2021-12-11 12:29:16', 1, '2021-12-11 17:32:42', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `routes`
--

DROP TABLE IF EXISTS `routes`;
CREATE TABLE IF NOT EXISTS `routes` (
  `Package` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Func` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Type` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'fe',
  `Methods` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'GET',
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=325 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `routes`
--

INSERT INTO `routes` (`Package`, `Func`, `Type`, `Methods`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('page', 'routes', 'be', 'GET', 279, '2021-12-11 14:01:42', 1, '2021-12-11 14:01:42', 1),
('page', 'home', 'fe', 'GET', 288, '2021-12-11 15:07:02', 1, '2021-12-11 15:56:32', 1),
('page', 'componenteditor', 'be', 'GET', 284, '2021-12-11 14:43:29', 1, '2021-12-11 15:56:59', 1),
('page', 'database', 'be', 'GET', 283, '2021-12-11 14:41:26', 1, '2021-12-11 15:56:53', 1),
('page', 'usertypes', 'be', 'GET', 280, '2021-12-11 14:02:20', 1, '2021-12-11 15:57:30', 1),
('page', 'users', 'be', 'GET', 278, '2021-12-11 13:50:43', 1, '2021-12-11 15:57:24', 1),
('usertype', 'getusertypes', 'api', 'GET', 289, '2021-12-11 15:53:22', 1, '2021-12-11 15:53:22', 1),
('page', 'register', 'fe', 'GET', 286, '2021-12-11 14:53:11', 1, '2021-12-11 15:57:38', 1),
('page', 'home', 'be', 'GET', 287, '2021-12-11 15:00:03', 1, '2021-12-11 15:57:04', 1),
('page', 'menus', 'be', 'GET', 281, '2021-12-11 14:02:38', 1, '2021-12-11 15:57:12', 1),
('page', 'logout', 'fe', 'GET', 282, '2021-12-11 14:02:58', 1, '2021-12-11 17:27:16', 1),
('route', 'getroutes', 'api', 'GET', 290, '2021-12-11 15:53:22', 1, '2021-12-11 15:53:22', 1),
('route', 'updateroute', 'api', 'POST', 291, '2021-12-11 15:53:22', 1, '2021-12-11 15:53:22', 1),
('route', 'addroute', 'api', 'POST', 292, '2021-12-11 15:53:22', 1, '2021-12-11 15:53:22', 1),
('component', 'getcomponents', 'api', 'GET', 293, '2021-12-11 16:02:50', 1, '2021-12-11 16:02:50', 1),
('component', 'deletecomponent', 'api', 'DELETE', 294, '2021-12-11 16:03:05', 1, '2021-12-11 16:03:05', 1),
('component', 'addcomponent', 'api', 'POST', 295, '2021-12-11 16:03:19', 1, '2021-12-11 16:03:19', 1),
('component', 'updatecomponent', 'api', 'POST', 296, '2021-12-11 16:03:31', 1, '2021-12-11 16:03:31', 1),
('dbapi', 'getdatabases', 'api', 'GET', 297, '2021-12-11 16:04:08', 1, '2021-12-11 16:04:08', 1),
('dbapi', 'gettables', 'api', 'GET', 298, '2021-12-11 16:04:16', 1, '2021-12-11 16:04:16', 1),
('dbapi', 'opentable', 'api', 'GET', 299, '2021-12-11 16:04:26', 1, '2021-12-11 16:04:26', 1),
('dbapi', 'execute', 'api', 'POST', 300, '2021-12-11 16:04:38', 1, '2021-12-11 16:04:38', 1),
('menu', 'getmenu', 'api', 'GET', 301, '2021-12-11 16:25:43', 1, '2021-12-11 16:25:43', 1),
('menu', 'getplainmenu', 'api', 'GET', 302, '2021-12-11 16:25:58', 1, '2021-12-11 16:25:58', 1),
('menu', 'deletemenu', 'api', 'DELETE', 303, '2021-12-11 16:26:07', 1, '2021-12-11 16:26:07', 1),
('menu', 'addmenu', 'api', 'POST', 304, '2021-12-11 16:26:14', 1, '2021-12-11 16:26:14', 1),
('menu', 'updatemenu', 'api', 'POST', 305, '2021-12-11 16:26:22', 1, '2021-12-11 16:26:22', 1),
('user', 'login', 'api', 'POST', 306, '2021-12-11 16:37:38', 1, '2021-12-11 16:37:38', 1),
('user', 'register', 'api', 'POST', 307, '2021-12-11 16:37:48', 1, '2021-12-11 16:37:48', 1),
('user', 'verifyuser', 'api', 'GET', 308, '2021-12-11 16:37:58', 1, '2021-12-11 16:37:58', 1),
('user', 'loadusers', 'api', 'GET', 309, '2021-12-11 16:38:06', 1, '2021-12-11 16:38:06', 1),
('user', 'updateuser', 'api', 'POST', 310, '2021-12-11 16:38:15', 1, '2021-12-11 16:38:15', 1),
('user', 'exist', 'api', 'GET', 311, '2021-12-11 16:38:22', 1, '2021-12-11 16:38:22', 1),
('usertype', 'deleteusertype', 'api', 'DELETE', 312, '2021-12-11 16:39:54', 1, '2021-12-11 16:39:54', 1),
('usertype', 'addusertype', 'api', 'POST', 313, '2021-12-11 16:40:02', 1, '2021-12-11 16:40:02', 1),
('page', 'ambientazione', 'fe', 'GET', 314, '2021-12-11 16:57:36', 1, '2021-12-11 16:57:36', 1),
('route', 'getroutesfiltered', 'api', 'GET', 317, '2021-12-11 17:20:32', 1, '2021-12-11 17:20:32', 1),
('route', 'deleteroute', 'api', 'DELETE', 316, '2021-12-11 17:20:13', 1, '2021-12-11 17:20:13', 1),
('page', 'logout', 'be', 'GET', 318, '2021-12-11 17:27:16', 1, '2021-12-11 17:28:12', 1),
('page', 'login', 'fe', 'GET', 319, '2021-12-11 17:29:40', 1, '2021-12-11 17:29:40', 1),
('page', 'regolamento', 'fe', 'GET', 320, '2021-12-11 17:31:08', 1, '2021-12-11 17:31:08', 1),
('page', 'guida', 'fe', 'GET', 321, '2021-12-11 17:31:48', 1, '2021-12-11 17:31:48', 1),
('page', 'infoluoghi', 'fe', 'GET', 322, '2021-12-11 17:32:25', 1, '2021-12-11 17:32:25', 1),
('fake', 'fake', 'be', 'GET', 323, '2021-12-11 17:46:17', 1, '2021-12-11 17:46:17', 1);

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
) ENGINE=MyISAM AUTO_INCREMENT=212 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `routespermission`
--

INSERT INTO `routespermission` (`IDRoute`, `IDUserType`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
(309, 1, 183, '2021-12-11 16:38:06', 1, '2021-12-11 16:38:06', 1),
(308, 1, 182, '2021-12-11 16:37:58', 1, '2021-12-11 16:37:58', 1),
(307, 99, 181, '2021-12-11 16:37:48', 1, '2021-12-11 16:37:48', 1),
(306, 99, 180, '2021-12-11 16:37:38', 1, '2021-12-11 16:37:38', 1),
(319, 99, 198, '2021-12-11 17:29:40', 1, '2021-12-11 17:29:40', 1),
(311, 1, 185, '2021-12-11 16:38:22', 1, '2021-12-11 16:38:22', 1),
(312, 1, 186, '2021-12-11 16:39:54', 1, '2021-12-11 16:39:54', 1),
(313, 1, 187, '2021-12-11 16:40:02', 1, '2021-12-11 16:40:02', 1),
(305, 1, 179, '2021-12-11 16:26:22', 1, '2021-12-11 16:26:22', 1),
(304, 1, 178, '2021-12-11 16:26:14', 1, '2021-12-11 16:26:14', 1),
(303, 1, 177, '2021-12-11 16:26:07', 1, '2021-12-11 16:26:07', 1),
(302, 1, 176, '2021-12-11 16:25:58', 1, '2021-12-11 16:25:58', 1),
(320, 1, 199, '2021-12-11 17:31:08', 1, '2021-12-11 17:31:08', 1),
(320, 2, 200, '2021-12-11 17:31:08', 1, '2021-12-11 17:31:08', 1),
(320, 3, 201, '2021-12-11 17:31:08', 1, '2021-12-11 17:31:08', 1),
(301, 1, 175, '2021-12-11 16:25:43', 1, '2021-12-11 16:25:43', 1),
(300, 1, 174, '2021-12-11 16:04:38', 1, '2021-12-11 16:04:38', 1),
(299, 1, 173, '2021-12-11 16:04:26', 1, '2021-12-11 16:04:26', 1),
(298, 1, 172, '2021-12-11 16:04:16', 1, '2021-12-11 16:04:16', 1),
(321, 99, 206, '2021-12-11 17:31:48', 1, '2021-12-11 17:31:48', 1),
(321, 3, 205, '2021-12-11 17:31:48', 1, '2021-12-11 17:31:48', 1),
(297, 1, 171, '2021-12-11 16:04:08', 1, '2021-12-11 16:04:08', 1),
(296, 1, 170, '2021-12-11 16:03:31', 1, '2021-12-11 16:03:31', 1),
(295, 1, 169, '2021-12-11 16:03:19', 1, '2021-12-11 16:03:19', 1),
(294, 1, 168, '2021-12-11 16:03:05', 1, '2021-12-11 16:03:05', 1),
(293, 1, 167, '2021-12-11 16:02:50', 1, '2021-12-11 16:02:50', 1),
(280, 1, 165, '2021-12-11 15:57:30', 1, '2021-12-11 15:57:30', 1),
(278, 1, 164, '2021-12-11 15:57:24', 1, '2021-12-11 15:57:24', 1),
(292, 1, 166, '2021-12-11 15:52:19', 1, '2021-12-11 15:52:19', 1),
(281, 1, 162, '2021-12-11 15:57:12', 1, '2021-12-11 15:57:12', 1),
(314, 1, 188, '2021-12-11 16:57:36', 1, '2021-12-11 16:57:36', 1),
(314, 2, 189, '2021-12-11 16:57:36', 1, '2021-12-11 16:57:36', 1),
(314, 3, 190, '2021-12-11 16:57:36', 1, '2021-12-11 16:57:36', 1),
(321, 2, 204, '2021-12-11 17:31:48', 1, '2021-12-11 17:31:48', 1),
(282, 3, 196, '2021-12-11 17:27:16', 1, '2021-12-11 17:27:16', 1),
(282, 1, 161, '2021-12-11 15:57:08', 1, '2021-12-11 15:57:08', 1),
(287, 1, 160, '2021-12-11 15:57:04', 1, '2021-12-11 15:57:04', 1),
(310, 1, 184, '2021-12-11 16:38:15', 1, '2021-12-11 16:38:15', 1),
(282, 2, 195, '2021-12-11 17:27:16', 1, '2021-12-11 17:27:16', 1),
(320, 99, 202, '2021-12-11 17:31:08', 1, '2021-12-11 17:31:08', 1),
(284, 1, 159, '2021-12-11 15:56:59', 1, '2021-12-11 15:56:59', 1),
(283, 1, 158, '2021-12-11 15:56:53', 1, '2021-12-11 15:56:53', 1),
(288, 1, 157, '2021-12-11 15:56:32', 1, '2021-12-11 15:56:32', 1),
(291, 1, 156, '2021-12-11 15:52:19', 1, '2021-12-11 15:52:19', 1),
(321, 1, 203, '2021-12-11 17:31:48', 1, '2021-12-11 17:31:48', 1),
(290, 1, 155, '2021-12-11 15:52:19', 1, '2021-12-11 15:52:19', 1),
(289, 1, 154, '2021-12-11 15:52:19', 1, '2021-12-11 15:52:19', 1),
(318, 1, 197, '2021-12-11 17:28:12', 1, '2021-12-11 17:28:12', 1),
(288, 99, 152, '2021-12-11 15:26:47', 1, '2021-12-11 15:26:47', 1),
(288, 3, 151, '2021-12-11 15:26:47', 1, '2021-12-11 15:26:47', 1),
(288, 2, 150, '2021-12-11 15:26:47', 1, '2021-12-11 15:26:47', 1),
(279, 1, 153, '2021-12-11 15:52:19', 1, '2021-12-11 15:52:19', 1),
(286, 99, 138, '2021-12-11 14:53:11', 1, '2021-12-11 14:53:11', 1),
(316, 1, 193, '2021-12-11 17:20:13', 1, '2021-12-11 17:20:13', 1),
(317, 1, 194, '2021-12-11 17:20:32', 1, '2021-12-11 17:20:32', 1),
(314, 99, 191, '2021-12-11 16:57:36', 1, '2021-12-11 16:57:36', 1),
(322, 1, 207, '2021-12-11 17:32:25', 1, '2021-12-11 17:32:25', 1),
(322, 2, 208, '2021-12-11 17:32:25', 1, '2021-12-11 17:32:25', 1),
(322, 3, 209, '2021-12-11 17:32:25', 1, '2021-12-11 17:32:25', 1),
(322, 99, 210, '2021-12-11 17:32:25', 1, '2021-12-11 17:32:25', 1),
(323, 1, 211, '2021-12-11 17:46:17', 1, '2021-12-11 17:46:17', 1);

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
('GetMenu', 'SELECT DISTINCT Menus.MenuName, Menus.Name, Menus.Parent, Menus.IDROute, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM menus INNER JOIN routes ON menus.IDRoute = routes.ID INNER JOIN routespermission ON routes.ID = routespermission.IDRoute WHERE routespermission.IDUserType = ? AND menus.MenuName = ? AND menus.Parent = ? ORDER BY menus.MenuOrder', 1, '2021-08-28 11:31:36', 1, '2021-08-28 11:31:36', 1),
('GetRoutes', 'SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes', 4, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('UserPrinc', 'SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID', 3, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetComponent', 'SELECT component.Name, component.Content, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component JOIN routes ON component.IDRoute = routes.ID JOIN routespermission ON routes.ID = routespermission.IDRoute WHERE CONCAT(routes.Type, \'/\', routes.Func) = ? AND routespermission.IDUserType = ?', 24, '2021-12-07 10:41:23', 1, '2021-12-07 10:41:23', 1),
('CheckRoute', 'SELECT routes.Package, routes.Func FROM routes INNER JOIN routespermission ON routes.ID = routespermission.IDRoute INNER JOIN UserTypes ON routespermission.IDUserType = UserTypes.ID WHERE routespermission.IDUserType = ? AND routes.Package = ? AND routes.Func = ? AND routes.Type = ? AND Routes.Methods LIKE ? LIMIT 1', 5, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('UserTypePrinc', 'SELECT Description, ID, InsertDate, IDInsertUser, EditDate, IDEditUser FROM UserTypes', 6, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('RoutePermissionPrinc', 'SELECT RoutesPermission.IDRoute, RoutesPermission.IDUserType, UserTypes.Description, UserTypes.ID, UserTypes.InsertDate, UserTypes.IDInsertUser, UserTypes.EditDate, UserTypes.IDEditUser FROM RoutesPermission INNER JOIN Routes ON routespermission.IDRoute = routes.ID LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID WHERE RoutesPermission.IDRoute = ? OR ((routes.Package = ? OR routes.Package = \'*\') AND (routes.Func = ? OR routes.Func = \'*\') AND (routes.Type = ? OR routes.Type = \'*\'))', 7, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetMenuPlain', 'SELECT Menus.MenuName, Menus.Name, Menus.Parent, Menus.IDRoute, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM Menus LIMIT ?, ?', 8, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('MenuPermissionPrinc', 'SELECT MenuPermission.IDMenu, MenuPermission.IDUserType, UserTypes.Description, UserTypes.ID, UserTypes.InsertDate, UserTypes.IDInsertUser, UserTypes.EditDate, UserTypes.IDEditUser FROM MenuPermission LEFT JOIN UserTypes ON MenuPermission.IDUserType = UserTypes.ID WHERE MenuPermission.IDMenu = ?', 9, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddMenu', 'INSERT INTO Menus(MenuName, Name, Parent, IDRoute, MenuOrder, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, ?, NOW(), ?, NOW(), ?)', 11, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddRoute', 'INSERT INTO Routes(Package, Func, Type, Methods, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, NOW(), ?, NOW(), ?)', 12, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00', 0),
('AddUser', 'INSERT INTO Users (Username, Password, LastLogin, DatePassword, PasswordDuration, IDUserType, CodeResetPassword, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?, ?, NOW(), NOW(), ?, ?, ?, NOW(), ?, NOW(), ?)', 13, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddUserType', 'INSERT INTO UserTypes(Description, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, NOW(), ?, NOW(), ?)', 14, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('CountMenuPlain', 'SELECT COUNT(*) as Conteggio FROM Menus', 16, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('CountUser', 'SELECT COUNT(*) as Conteggio FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID', 18, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('CountRoute', 'SELECT COUNT(*) as Conteggio FROM Routes LEFT JOIN RoutesPermission ON Routes.ID = RoutesPermission.IDRoute LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID', 17, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetComponentFromID', 'SELECT component.Name, component.Content, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component WHERE component.ID = ? LIMIT 1', 28, '2021-12-07 10:59:07', 1, '2021-12-07 10:59:07', 1),
('LoadComponents', 'SELECT component.Name, component.Content, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component LIMIT ?, ?', 27, '2021-12-07 14:11:30', 1, '2021-12-07 14:11:30', 1),
('GetRoute', 'SELECT Routes.Package, Routes.Func, Routes.Type, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes LEFT JOIN RoutesPermission ON Routes.ID = RoutesPermission.IDRoute LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID WHERE routes.Package = ? AND routes.Func = ? AND Routes.Type = ? AND Routes.Methods LIKE ? LIMIT 1', 22, '2021-11-27 10:41:59', 1, '2021-11-27 10:41:59', 1),
('GetRouteFromID', 'SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes LEFT JOIN RoutesPermission ON Routes.ID = RoutesPermission.IDRoute LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID WHERE routes.ID = ? LIMIT 1', 23, '2021-11-27 11:40:09', 1, '2021-11-27 11:40:09', 1),
('GetComponentPermission', 'SELECT componentpermission.IDComponent, componentpermission.IDUserType, UserTypes.Description, componentpermission.ID, componentpermission.InsertDate, componentpermission.IDInsertUser, componentpermission.EditDate, componentpermission.IDEditUser FROM componentpermission LEFT JOIN UserTypes ON componentpermission.IDUserType = UserTypes.ID WHERE componentpermission.IDComponent = ?', 25, '2021-12-07 10:44:17', 1, '2021-12-07 10:44:17', 1),
('GetMenuFromID', 'SELECT menus.MenuName, menus.Name, menus.Parent, menus.IDRoute, menus.MenuOrder, menus.ID, menus.InsertDate, menus.IDInsertUser, menus.EditDate, menus.IDEditUser FROM menus WHERE menus.ID = ? LIMIT 1', 26, '2021-12-07 10:59:07', 1, '2021-12-07 10:59:07', 1),
('AddComponent', 'INSERT INTO component(Name, Content, IDRoute, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?,?,?,NOW(),?,NOW(),?)', 29, '2021-12-08 16:24:52', 1, '2021-12-08 16:24:52', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `Username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LastLogin` datetime NOT NULL,
  `DatePassword` datetime NOT NULL,
  `PasswordDuration` int(11) NOT NULL DEFAULT 90,
  `IDUserType` int(11) NOT NULL,
  `CodeResetPassword` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`Username`, `Password`, `LastLogin`, `DatePassword`, `PasswordDuration`, `IDUserType`, `CodeResetPassword`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('admin', 'e64b78fc3bc91bcbc7dc232ba8ec59e0', '2021-12-12 22:59:32', '2021-12-12 22:59:32', -1, 1, '', 5, '2021-12-12 22:59:32', 0, '2021-12-12 23:04:53', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `usertypes`
--

DROP TABLE IF EXISTS `usertypes`;
CREATE TABLE IF NOT EXISTS `usertypes` (
  `Description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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
