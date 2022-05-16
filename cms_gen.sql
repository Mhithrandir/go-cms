-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Mag 15, 2022 alle 07:24
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
-- Struttura della tabella `characters`
--

DROP TABLE IF EXISTS `characters`;
CREATE TABLE IF NOT EXISTS `characters` (
  `Name` varchar(255) NOT NULL,
  `Icon` varchar(255) NOT NULL,
  `LendFace` varchar(255) NOT NULL,
  `Background` text NOT NULL,
  `IDUser` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `charactervalues`
--

DROP TABLE IF EXISTS `charactervalues`;
CREATE TABLE IF NOT EXISTS `charactervalues` (
  `Name` varchar(255) NOT NULL,
  `Value` text NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `chatmessages`
--

DROP TABLE IF EXISTS `chatmessages`;
CREATE TABLE IF NOT EXISTS `chatmessages` (
  `Message` text NOT NULL,
  `IDCharacter` int(11) NOT NULL,
  `IDLocation` int(11) NOT NULL,
  `Archive` int(11) NOT NULL,
  `IDMaster` int(11) NOT NULL,
  `Validated` tinyint(1) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `component`
--

DROP TABLE IF EXISTS `component`;
CREATE TABLE IF NOT EXISTS `component` (
  `IDElement` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Columns` int(11) NOT NULL,
  `VerticalOrientation` tinyint(1) NOT NULL,
  `Content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ImageName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `IsClass` tinyint(1) NOT NULL,
  `IDParent` int(11) NOT NULL,
  `IDRoute` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `component`
--

INSERT INTO `component` (`IDElement`, `Type`, `Columns`, `VerticalOrientation`, `Content`, `ImageName`, `IsClass`, `IDParent`, `IDRoute`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('', 'title', 0, 0, 'Guida', '', 0, 13, 0, 24, '2022-03-16 12:32:50', 0, '2022-03-16 12:32:50', 0),
('', 'text', 0, 0, '<p class=\"MsoNormal\"><b>Serie, film e videogames a cui Ispirarsi:</b></p><p class=\"MsoNormal\">Alien, Altered Carbon, Another Life, Battlestar Galactica, Dark Matter, Firefly, Serenity, Killjoys, The Expanse, Passengers, Predator,&#160;Starship Troopers, Halo, Mass Effect Andromeda, Titan Fall.</p><p class=\"MsoNormal\"><b><br></b></p><p class=\"MsoNormal\"><b>Guida alla compilazione della scheda personaggio (I.D. Badge)</b><br></p><p class=\"MsoNormal\">&#160;Prima di poter cominciare a giocare bisogna seguire i prossimi tre passi:</p><p class=\"MsoNormal\"><u>1)Compilazione scheda del personaggio</u></p><p class=\"MsoNormal\"><u>2)Vidimazione del Background da parte dello staff</u></p><p class=\"MsoNormal\"><u>3)prima giocata di risveglio dal sonno somatico.</u></p><p class=\"MsoNormal\"><b><br></b></p><p class=\"MsoNormal\"><b>1) Compilazione scheda del personaggio:</b><br></p><p class=\"MsoNormal\"><b>Razza:</b></p><p class=\"MsoNormal\">Prima di scegliere la classe di cui far&#224; parte il proprio personaggio, va scelta una razza, o meglio una delle due denominazioni di origine a disposizione:</p><p class=\"MsoNormal\"><b><u>Earther:</u></b></p><p class=\"MsoNormal\">Il personaggio &#232; nato sulla terra o su di un grande pianeta terra formato della federazione, incarna lo stereotipo dell\'umano medio, abile a destreggiarsi i tutte le situazioni senza per&#242; avere bonus o malus di partenza. Risulta insofferente ai lunghi periodi passati in orbita senza la possibilit&#224; di scendere sulla superficie di un pianeta.</p><p class=\"MsoNormal\"><b><u>Spacer:&#160;</u></b></p><p class=\"MsoNormal\">Il personaggio &#232; nato e vissuto in orbita, su di una astronave, una stazione orbitale, luna e planetoide, dove si passa abitualmente da 1g a 0g di gravit&#224;, questo si &#232; tradotto in un corpo pi&#249; agile (+2 a destrezza) ma al contempo meno forte (-2 forza). Risulta essere insofferente e stranito dal permanere per lunghi periodi sulla superficie di una pianeta.&#160;</p><p class=\"MsoNormal\"><b><u>Duster:&#160;</u></b><br></p><p class=\"MsoNormal\">Il personaggio &#232; nato su Marte, il grande pianeta&#160; rosso.</p><div>La popolazione marziana &#232; da sempre abituata al sacrificio ed &#232; cresciuta per centinaia di anni in una societ&#224; spartana con un unico fine, la terra-formazione del pianeta, forti nel fisico (+2&#160; forza)&#160; ma con una massa muscolare che li rallenta (-2 destrezza) e temprati nella fatica, i Duster hanno dovuto affrontare dopo la terra formazione anche la ricostruzione di Marte a seguito della devastazione di 50 anni di dominio Bioroide.</div><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\"><b>Classi:</b></p><p class=\"MsoNormal\">prima di compilare la parte dedicata alle statistiche ed alla abilit&#224; del vostro personaggio va scelta la classe (tra le 10 disponibili) di cui esso fa parte. Questo da accesso ad una serie di Bundle dedicati che permettono di avere dei bonus di nelle abilit&#224; chiave a cui la classe fa riferimento.</p><p class=\"MsoNormal\">Le abilit&#224; sono a scelta libera, di seguito vengono consigliate quelle su cui improntare gli archetipi di classe.</p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\"><b><u>Agent:</u></b></p><p class=\"MsoNormal\">il tuo personaggio &#232; un abile detective, che sia in forza alla pubblica sicurezza federale o che sia una abile investigatore privato, sa destreggiarsi nel tessuto urbano di un pianeta o di una stazione orbitale, conosce la gente giusta e sa non dare nell\'occhio, se qualcuno non canta sa come fargli sciogliere la lingua, si esatto sei uno sbirro.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: conoscenza bassifondi, intimidire, investigare, profiling, sparare con armi leggere, percezione, furtivit&#224;, mascherare, pilotare droni.</p><p class=\"MsoNormal\">Bundle di classe:&#160;Eagle eye,Ghost,&#160;&#160;Gunslinger,&#160;&#160;Mind hunter,&#160;Moobster,&#160;Poker Face,&#160;Sherlock,&#160;3rd grade.</p><p class=\"MsoNormal\"><u>&#160;</u></p><p class=\"MsoNormal\"><b><u>Combat Medic:</u></b></p><p class=\"MsoNormal\">il tuo personaggio &#232; addestrato al recupero dei feriti nelle zone di combattimento, che il suo maestro sia stata l\'accademia o la strada, sa destreggiarsi in questo in tutti gli ambienti, che esse siano lontani campi di battaglia su esopianeti inesplorati o nel dedalo di acciaio di una stazione orbitale o nave spaziale.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: sparare con armi leggere, combattere con armi bianche, addestramento zero G, resistenza alla fatica, sopravvivenza, primo soccorso, medi chirurgia, medicina zero G, uso jet pack</p><p class=\"MsoNormal\">Bundle di classe:&#160;E.R.,&#160;Gunslinger,&#160;Ronin,&#160;&#160;Rocket man,&#160;Star-man,&#160;The Doc,&#160;Unbreakable,&#160;&#160;Zero Doc</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><u>&#160;</u></p><p class=\"MsoNormal\"><b><u>Combat Sapper:</u></b></p><p class=\"MsoNormal\">il tuo personaggio &#232; un geniere e demolitore, che sia stato addestrato in accademia o la sua maestra sia stata la strada, per risolvere le situazioni pi&#249; disparate ti basta una graffetta, un elastico ed una cannuccia, si sei un maledetto McGyver che sa pure combattere.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: sparare con armi leggere, combattere con armi bianche, esplosivi, addestramento zero G, resistenza alla fatica, sopravvivenza, , uso jet pack, pilotare droni, Riparare.</p><p class=\"MsoNormal\">Bundle di classe:&#160;Demolition man ; Drone Master, Gunslinger, McGyver, Rocket Man, Ronin, Star-man, Unbreakable<br></p><p class=\"MsoNormal\"><span lang=\"EN-US\"></span></p><p class=\"MsoNormal\"><u>&#160;</u></p><p class=\"MsoNormal\"><b><u>Goliath Pilot:</u></b></p><p class=\"MsoNormal\">Il tuo personaggio &#232; un abile pilota di goliath, che sia stato addestrato nella flotta o abbia imparato da solo, alla guida del suo mech, sulla superficie d un pianeta o esopianeta, o durante gli sbarchi orbitali,non ha rivali.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: sparare con armi leggere, combattere con armi bianche, navigazione terrestre, sistemi arma integrati, sensori integrati, sopravvivenza, pilotare Goliath, resistenza alla fatica, percezione.</p><p class=\"MsoNormal\">Bundle di classe:&#160;Armored pilot; Gunslinger, Man of the wild, Ronin, The Systemist, Trail blazer, Umbreakable, Weapon Master</p><p class=\"MsoNormal\"><u>&#160;</u></p><p class=\"MsoNormal\"><b><u>Med Researcher:</u></b></p><p class=\"MsoNormal\">il tuo personaggio &#232; un medico ricercatore, laureato presso le universit&#224; federali, la sua missione, portare benessere tra i coloni e studiare le forme di vita aliene, sia animali che vegetali,catalogarle e trovarne un utilizzo in seno alla federazione, oltre ad aiutare i Tech Resercher nella loro missione di terraformazione.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: medi chirurgia, psicologia, Medicina Impiantistica, conoscenze terra-formazione, Xeno Medi chirurgia, Xeno Psicologia, Xeno Biologia, Xeno Botanica, primo soccorso.</p><p class=\"MsoNormal\">Bundle di classe:&#160;Cyber-system; Mind Blower, The Doc, Terraformer , Xeno Doc, Xeno Biologist, Xeno Mentalist, Xeno Plant<br></p><p class=\"MsoNormal\"><span lang=\"EN-US\"></span></p><p class=\"MsoNormal\"><u>&#160;</u></p><p class=\"MsoNormal\"><b><u>Scout:</u></b></p><p class=\"MsoNormal\">Il tuo personaggio &#232; un cacciatore, battitore di piste ed esploratore, abituato ad operare su pianeti e sugli esopianeti della fascia esterna, abile nel combattimento a distanza e ravvicinato oltre che alla guida dei rover su terreni pi&#249; impervi.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: sparare con armi leggere, sparare con armi pesanti, combattere con armi bianche, guidare veicoli, uso jet pack, sopravvivenza, resistenza alla fatica, navigazione terrestre, percezione.</p><p class=\"MsoNormal\">&#160;Bundle di classe:&#160;<span lang=\"EN-US\">Gunslinger, Hot road, Long Shot, Man of the wild,&#160;</span><span lang=\"EN-US\">Rocket Man,&#160;</span><span lang=\"EN-US\">Ronin, Unbreakable, Trail blazer</span></p><p class=\"MsoNormal\"><span lang=\"EN-US\"></span></p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\"><b><u>Space Cowboy:</u></b></p><p class=\"MsoNormal\">il tuo personaggio &#232; un cacciatore di taglie regolarmente iscritto al registro federale, sei il lungo e brutale braccio della legge, dove essa non arriva, abile nel combattimento corpo a copro ed a distanza, la tua seconda casa &#232; la tua navetta che usi come un moderno cavallo del vecchio west.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: sparare con armi leggere, combattere a mani nude, conoscenza bassifondi, investigare, astronavigazione, pilotare velivoli, mascherare, furtivit&#224;, percezione.</p><p class=\"MsoNormal\">&#160;Bundle di classe:&#160;Ace-High, Ghost, Gunslinger, Moobster, Navigator, Pokerface, Suker Punch , Sherlock</p><p class=\"MsoNormal\"><span lang=\"EN-US\"></span></p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\"><b><u>Star Pilot:</u></b></p><p class=\"MsoNormal\">il tuo personaggio &#232; un abile pilota, che sia stato addestrato nella flotta o abbia imparato da solo, una cosa &#232; certa, ai comandi di una navetta o di un caccia, che sia nel vuoto cosmico o nell\'atmosfera di un pianeta od esopianeta non ha rivali,&#160;<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: sparare con armi leggere, combattere con armi bianche, sopravvivenza, pilotare velivoli, sistemi arma integrati, sensori integrati, addestramento zero G, astronavigazione, resistenza alla fatica.</p><p class=\"MsoNormal\">Bundle di classe:&#160;Ace-High, Unbreakable, Gunslinger, Man of the wild, Navigator, Ronin, Star-man, The Systemist, Weapon master<br></p><p class=\"MsoNormal\"><span lang=\"EN-US\"></span></p><p class=\"MsoNormal\"><u>&#160;</u></p><p class=\"MsoNormal\"><b><u>Star Warrior</u></b></p><p class=\"MsoNormal\">il tuo personaggio &#232; un marine federale o un mercenario abituato a combattere su pianeti ed esopianeti e nel freddo vuoto dello spazio esterno tra gli asteroidi o in rocamboleschi arrembaggi e combattimenti all\'ultimo uomo.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: sparare con armi leggere, sparare con armi pesanti, combattere a mani nude, combattere con armi bianche, tattica di combattimento, resistenza alla fatica, sopravvivenza, addestramento a zero g, uso jet pack.</p><p class=\"MsoNormal\">Bundle di classe:&#160;Field Operator, Gunslinger, Long Shot, Ronin, Rocket man, Star-man, Suker Punch, Umbreakable<br></p><p class=\"MsoNormal\"><span lang=\"EN-US\"></span></p><p class=\"MsoNormal\"><u>&#160;</u></p><p class=\"MsoNormal\"><b><u>Tech Researcher:</u></b></p><p class=\"MsoNormal\">il tuo personaggio &#232; un tecnico ricercatore,laureato presso una delle universit&#224; federali, la tua missione portare le nuove colonie operative e terraformare gli esopianeti, recuperare e studiare i manufatti Xeno e scoprire i loro segreti per inglobarli nelle tecnologie federali.<br></p><p class=\"MsoNormal\">Abilit&#224; consigliate: ing. Meccatronica, ing. Aerospaziale, Hacking, programmazione, conoscenze terra-formazione, Xeno programmazione, Xeno ingegneria,&#160;&#160;Xeno&#160;hacking, riparare.</p><p class=\"MsoNormal\">&#160;Bundle di classe:Electro-man, Hacker-man, Space tech, The Geek, Terraformer, Xeno Geek, Xeno Hackin, Xeno Tronic</p><p class=\"MsoNormal\"><span lang=\"EN-US\"></span></p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\"><b>Nome e presta-volto:</b></p><p class=\"MsoNormal\">La seconda &#160;cosa da fare &#232; dare un nome ed un volto al proprio personaggio seguendo questa semplice linea guida.</p><p class=\"MsoNormal\">Nel 2520 sono cambiate molte cose con lo spargersi dell&#8217;umanit&#224; nel sistema solare ed oltre, mentre sulla terra i nomi sono rimasti legati alle etnie ed alle enclave culturali, in orbita le cose sono cambiate, creando spesso un meticciato sia di razze che di nomi.</p><p class=\"MsoNormal\">Il fenotipo chiaro(biondi, rossi, castani chiari, occhi azzurri e verdi, carnagione chiara) &#232; rimasto per alcune enclave sulla terra in quanto recessivo, mentre dall&#8217;orbita in poi, il continuare degli incroci razziali ha portato alla vittoria del fenotipo scuro(capelli neri, castano scuri, occhi nocciola o neri, carnagione olivastra).</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Statistiche e abilit&#224;:</b></p><p class=\"MsoNormal\">Una volta scelta la classe, nome e volto del personaggio &#232; venuto il momento di spendere i punti esperienza iniziali e decidere come dividerli tra statistiche(stats), abilit&#224; (skill) e bundle di classe.</p><p class=\"MsoNormal\">Costo stats : livello attuale X20 (la media umana in una statistica &#232; considerata di 2 punti massima a 5 punti)</p><p class=\"MsoNormal\">Costo skill: livello attuale X10 ( si parte da un minimo d 1 punto ad un massimo di 10 punti)</p><p class=\"MsoNormal\">Costo Bundle: 150 ( forniscono bonus alle abilit&#224; di classe)</p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\"><b>Statistiche:</b></p><p class=\"MsoNormal\"><b>Forza:&#160;</b>Rappresenta la forza fisica del personaggio.</p><p class=\"MsoNormal\"><b>Destrezza:&#160;</b>Rappresenta l\'agilit&#224; e la velocit&#224; di reazione del personaggio</p><p class=\"MsoNormal\"><b>Costituzione:&#160;</b><u></u>Rappresenta la capacit&#224; del fisico del personaggio a resistere a fatica fisica, malattie e situazione di privazione.</p><p class=\"MsoNormal\"><b>Carisma :&#160;</b><u></u>Rappresenta le attitudini sociali del personaggio</p><p class=\"MsoNormal\"><b>Intelligenza:&#160;</b><u></u>Rappresenta la capacit&#224; di ragionamento ed astrazione del personaggio</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>Volont&#224; :&#160;</b><u></u>Rappresenta la capacit&#224; del personaggio di resistere allo stress e la fermezza nel perseguire i propri obiettivi.</p><p class=\"MsoNormal\"><u><br></u></p><p class=\"MsoNormal\"><b>Descrizione abilit&#224;:</b></p><p class=\"MsoNormal\">&#160;<b>Addestramento zero G:&#160;</b>il PG possiede un addestramento che gli/le permette di agire in assenza di gravit&#224;,&#160;dal combattimento alla manutenzione esterna alla nave.</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>Atletica:&#160;</b>Il/la PG possiede un grado di agilit&#224; che gli/le permette di effettuare movimenti ed esercizi di grado superiore man mano che la skill avanza</p><p class=\"MsoNormal\"><b>Astronavigazione:&#160;</b>Il/la PG &#232; in grado di padroneggiare una consolle di navigazione con capacit&#224; di manovra e navigazione via via pi&#249; complesse</p><p class=\"MsoNormal\"><b>Furtivit&#224;:&#160;</b>Il/la PG possiede la capacit&#224; di muoversi con furtivit&#224; in situazioni che richiedano un basso profilo e il non dare nell\'occhio</p><p class=\"MsoNormal\"><b>&#160;Pilotare velivoli:</b>&#160;il/la PG possiede la capacit&#224; di pilotare ,caccia, navette, dropship, racer e astronavi affinando la capacit&#224; con il progredire della skill</p><p class=\"MsoNormal\"><b>Pilotare Droni:&#160;</b>il/la PG &#232; in grado di guidare da remoto, mezzi da ricognizione o attacco<b></b></p><p class=\"MsoNormal\"><b>Pilotare Goliath:&#160;</b>il /la PG acquisisce con il progredire della Skill, la capacit&#224; di pilotare mech da combattimento o lavoro, con il progredire della skill le sue capacit&#224; di manovra si affineranno</p><p class=\"MsoNormal\"><b>Guidare veicoli:</b>&#160;il/la PG &#232; in grado di utilizzare rover anche in condizioni critiche, capacit&#224; che si affina con il crescere della skill</p><p class=\"MsoNormal\"><b>Comb. a mani nude:&#160;</b>il/la PG &#232; in grado di affrontare un combattimento a mani nude, con il progredire della skill si specializzer&#224; in una tecnica di combattimento affinandola. La scelta della tecnica dal 5 in poi.<b></b></p><p class=\"MsoNormal\"><b>Comb. Armi Bianche:</b>&#160;il/la PG destreggia le armi bianche con una certa abilit&#224;, si potr&#224; scegliere un&#8217;arma specifica dal 5 in poi</p><p class=\"MsoNormal\"><b>Comb. Armi da fuoco leggere:&#160;</b>il/la PG padroneggia le armi da fuoco leggere, pistole, mitragliette, fucili d&#8217;assalto fucili di precisione, con il progredire la sua maestria con tali armi aumenter&#224; di pari passo.</p><p class=\"MsoNormal\"><b>Comb. Armi da fuoco pesanti:&#160;</b>i il/la PG destreggia le armi bianche con una certa maestria, fucili anti-materiale, mitragliatrici di supporto, lanciarazzi, lanciagranate , col progredire la sua maestria nell\'uso di tali armi aumenter&#224; di pari passo</p><p class=\"MsoNormal\"><b>Resistenza alla fatica:&#160;</b>il/la PG presentano una notevole resistenza fisica alla fatica<b>&#160;</b>fisica, mantenendo sempre una risposta lucida alle sollecitazioni man mano che la skill progredisce</p><p class=\"MsoNormal\"><b>Resistenza al dolore:&#160;</b>il/la PG presentano una notevole resistenza al dolore, mantenendo sempre una risposta lucida alle sollecitazioni man mano che la skill progredisce.</p><p class=\"MsoNormal\"><b>Uso Jet Pack</b>: il/la PG sono in grado di utilizzare questo sistema di spostamento senza spiaccicarsi a terra pi&#249; del dovuto man mano che la skill progredisce</p><p class=\"MsoNormal\"><b>Uso sistemi d&#8217;arma integrati:&#160;</b><a>il/la PG sono in grado di utilizzare i sistemi d&#8217;arma integrati, su astronavi, navette,caccia, veicoli,Goliath</a></p><p class=\"MsoNormal\"><b>Uso sensori integrati:</b>&#160;il/la PG sono in grado di utilizzare i sistemi sensori integrati, su astronavi, navette,caccia, veicoli,Goliath , per lo studio e la rilevazione di dati esterni</p><p class=\"MsoNormal\"><b>Conoscenza esplosivi</b>: il/la PG hanno una conoscenza base degli esplosivi, con il progredire della skill riusciranno a maneggiarli ed utilizzarli senza far saltare in aria se stessi ed &#160;i compagni</p><p class=\"MsoNormal\"><b>Primo soccorso:&#160;</b>il/la PG hanno conoscenza delle tecniche di primo soccorso, che aumenter&#224; con l&#8217;aumentare della skill, sino ad azioni pi&#249; precise ed articolate</p><p class=\"MsoNormal\"><b>Tattica di combattimento:&#160;</b>il/la PG possiede la capacit&#224; di applicare una strategia sia che si tratti di uno scontro individuale, sia si tratti di uno scontro campale</p><p class=\"MsoNormal\"><b>Leadership:&#160;</b>il/la PG ha una innata capacit&#224; di infondere sicurezza nei compagni, capacit&#224; che aumenter&#224; con il progredire della skill, (da uno a cinque +1, da cinque a dieci ulteriore +2)</p><p class=\"MsoNormal\"><b>Navigazione terrestre:&#160;</b>meglio conosciuta come topografia, il/la PG sar&#224; in grado di rilevare e ricostruire oltre che interpretare e leggere, le mappe anche di zone sconosciute<b></b></p><p class=\"MsoNormal\"><b>Medicina a zero G:&#160;</b>il/la PG hanno conoscenza della medicina e la sua applicazione in mancanza di gravit&#224;</p><p class=\"MsoNormal\"><b>Medi-chirurgia:</b>&#160;il/la PG acquisiscono maggiori capacit&#224; con il progredire della skill, su quelle che sono le tecniche di chirurgia e medicina<b></b></p><p class=\"MsoNormal\"><b>Medicina Implantistica:&#160;</b>il/la PG hanno dimestichezza, in maniera progressiva, delle competenze sugli implanti cibernetici su esseri viventi.<b></b></p><p class=\"MsoNormal\"><b>Psicologia:&#160;</b>il/la PG possiedono le capacit&#224; e gli studi necessari per aiutare dal punto di vista psicologico, coloro che ne abbiano bisogno<b></b></p><p class=\"MsoNormal\"><b>Xeno Psicologia:&#160;</b>il/la PG hanno approfondito ed applicato la xeno-psicologia, utile arma per il contatto con altri esseri non umani<b></b></p><p class=\"MsoNormal\"><b>Xeno-medi-chirurgia:&#160;</b>il/la PG conoscono la fisiologia delle principali forme aliene, possono intervenire per limitare i danni di un attacco o di una ferita<b></b></p><p class=\"MsoNormal\"><b>Conoscenze terra-formazione:&#160;</b>il/la PG sono in grado di sviluppare un piano di terraformazione sugli eso-pianeti partendo dalle loro stesse caratteristiche ecologiche.</p><p class=\"MsoNormal\"><b>Xeno Biologia:&#160;</b><a>il/la PG hanno acquisito una conoscenza riguardo alla biologia aliena, sulla base di queste conoscenze possono elaborare strategie di compatibilit&#224; con l&#8217;uomo</a><b></b></p><p class=\"MsoNormal\"><b>Xeno Botanica:&#160;</b>il/la PG hanno acquisito una conoscenza riguardo alla botanica aliena, sulla base di queste conoscenze possono elaborare strategie di compatibilit&#224; con l&#8217;uomo<b></b></p><p class=\"MsoNormal\"><b>Ingegneria aerospaziale:&#160;</b>il/la PG hanno conoscenza delle massime strutture aerospaziali ed loro funzionamento, sino ad arrivare alla capacit&#224; di progettarne da zero<b></b></p><p class=\"MsoNormal\"><b>Ingegneria meccatronica</b>: specialit&#224; che permette la creazione di implanti cibernetici sempre pi&#249; avanzati e performanti</p><p class=\"MsoNormal\"><b>Xeno ingegneria:&#160;</b>la conoscenza di ingegneria aliena, permette di sfruttare tecnologie compatibili con le conoscenze umane in fatto di meccanica<b></b></p><p class=\"MsoNormal\"><b>Riparare:&#160;</b>dategli/le un cacciavite e ti smonter&#224; il mondo, l&#8217;importante e poi rimetterlo insieme nel modo corretto!</p><p class=\"MsoNormal\"><b>Programmazione avanzata:&#160;</b>questa abilit&#224; si basa sulla conoscenza della programmazione che passa via via, da un accendo il pc, alla creazione di sistema integrati utili alle pi&#249; disparate situazioni</p><p class=\"MsoNormal\"><b>Xeno programmazione:&#160;</b>si integra alla programmazione avanzata e la integra con sistemi alieni compatibili con i sistemi terrestri<b></b></p><p class=\"MsoNormal\"><b>Hacking:&#160;</b>il lato oscuro della programmazione, permette di craccare i sistemi pi&#249; complessi, man mano che l&#8217;abilit&#224; cresce<b></b></p><p class=\"MsoNormal\"><b>Investigare:&#160;</b>permette al/alla PG di riconoscere indizi e formulare ipotesi nel caso serva chiarire una situazione sospetta di qualsiasi natura essa sia<b></b></p><p class=\"MsoNormal\"><b>Profiling:&#160;</b>associato ad una buona conoscenza psicologica, permette di tracciare le caratteristiche comportamentali di un soggetto, ma pu&#242; anche servire per prevenire e favorire un primo contatto</p><p class=\"MsoNormal\"><b>Intrattenere:&#160;</b>&#160;il/la PG &#232; un animale da palcoscenico, capace di intrattenere e divertire la folla, suonando o dando spettacolo delle sue doti canore<b></b></p><p class=\"MsoNormal\"><b>Intimidire:</b>&#160;il/la pg che possiede questa skill ha una innata capacit&#224; di intimidire con atteggiamenti o parole la persona/e&#160; mettendole in svantaggio (da uno a cinque -1, da cinque a dieci ulteriore-2)<b></b></p><p class=\"MsoNormal\"><b>Socializzare:&#160;</b>il/la PG, che possiedono questa skill, non hanno difficolt&#224; ad entrare in contatto con gli altri e creare legami di amicizia e complicit&#224; , pi&#249; la skill &#232; elevata pi&#249; la rete di contatti del personaggio sar&#224; ampia (da uno a cinque 2 contatti, da cinque a dieci altri 3 contatti)<b></b></p><p class=\"MsoNormal\"><b>Conoscenze bassifondi:&#160;</b>il/la PG hanno una certa dimestichezza nel girare nelle zone peggiori, dove la legge fa fatica ad imporsi, sono in grado di recuperare informazioni con mezzi anche poco leciti</p><p class=\"MsoNormal\"><b>Mascherare:&#160;</b>capacit&#224; di nascondere le proprie intenzioni agli altri, con il progredire della skill, la capacit&#224; di affina sino a diventare un&#8217;arte</p><p class=\"MsoNormal\"><b>Percezione:&#160;</b>decisamente utile nelle situazioni di pericolo, il/la PG svilupperanno l&#8217;abilit&#224; di percepire ci&#242; che agli altri sfugge<b></b></p><p class=\"MsoNormal\"><b>Sopravvivenza</b>: il/la PG sono addestrati alla sopravvivenza in situazioni di estrema difficolt&#224;, possono tirarsi fuori da qualsiasi situazione semplicemente utilizzando tecniche di adattamento stile Mcgiver<b></b></p><p class=\"MsoNormal\"><b>Bundle Razziali :&#160;</b></p><p class=\"MsoNormal\">Attribuzione automatica alla creazione del personaggio.</p><p class=\"MsoNormal\"><b>Void Weakness</b>&#160;(spacer/): la vita nello spazio non ti ha permesso di sviluppare una massa muscolare adatta a sopportare grandi sforzi fisici a differenza degli Earther e dei Duster (-2 Forza).</p><p class=\"MsoNormal\"><b>Rapid</b>&#160;(spacer): abituato a sgusciare in spazi angusti ed a reagire rapidamente alle situazioni di pericolo sei decisamente pi&#249; agile rispetto agli Earther e Duster (+2 destrezza).</p><p class=\"MsoNormal\"><b>Tough Boy</b>&#160;(duster): La vita su Marte &#232; dura e segnata dalla fatica, sin da giovani i coloni del pianeta rosso sono stati allevati per un solo obiettivo, ricostruire il pianeta e lavorare nei cantieri astronautici della Federazione, cosa che ha accresciuto la loro struttura muscolare in maniera maggiore rispetto agli earther ed agli spacer (+2 Forza).</p><p class=\"MsoNormal\"><b>The Rock</b>&#160;(duster):La vostra massa muscolare dovuta ,sia dalla vita spartana e costellata di fatica, che al vostro retaggio &#160;non vi rende sicuramente agili quanto uno Spacer o un Earther (-2 Destrezza).</p><p class=\"MsoNormal\"><b>Bundle di Classe:</b></p><p class=\"MsoNormal\"><b>Gunslinger</b>:Il personaggio &#232; specializzato nell&#8217;utilizzo di armi leggere, pistole semiautomatiche, revolver, mitragliette, fucili d&#8217;assalto, ottenendo un bonus di +3 nel loro utilizzo.</p><p class=\"MsoNormal\"><b>Long shot</b>: Il personaggio &#232; specializzato nell&#8217;utilizzo di armi pesanti &#160;a lunga distanza, come fucili di precisione, anti materiale, lanciarazzi e lancia granate , ottenendo un bonus di +3 nel loro utilizzo.</p><p class=\"MsoNormal\"><b>Ronin</b>&#160;: Il personaggio &#232; specializzato nell&#8217;utilizzo di armi bianche, come pugnali, spade e tomahawk, ottenendo un bonus di +3 nel loro utilizzo.</p><p class=\"MsoNormal\"><b>Suker punch:</b>&#160;Il personaggio &#232; specializzato&#160; nel combattimento corpo a corpo, ottenendo un bonus di +3 nelle azioni di combattimento senza armi.</p><p class=\"MsoNormal\"><b>Field Operator</b>: Il personaggio &#232; specializzato nella tattica di combattimento dandogli un vantaggio sul terreno di scontro, il pg ottiene un bonus di +3 a tattiche di combattimento</p><p class=\"MsoNormal\"><b>Unbreakable</b>: il personaggio &#232; abituato ed addestrato al sopportare la fatica e la stanchezza, mantenendosi lucido e reattivo, il personaggio ottiene un bonus di +3 a resistere alla fatica.</p><p class=\"MsoNormal\"><b>Rocket Man</b>: Il personaggio &#232; addestrato nell&#8217;uso del jet pack e ne padroneggia egregiamente il pilotaggio, il personaggio ottiene un bonus di +3 all&#8217;utilizzo del sistema jet pack.</p><p class=\"MsoNormal\"><b>Star Man</b>: Il personaggio &#232; altamente addestrato nelle operazioni a zero G ottenendo un bonus di +3 ad addestramento a zero G.</p><p class=\"MsoNormal\"><b>E.R</b>.: Il personaggio &#160;&#232; un medico di primo soccorso abituato ad operare in condizioni critiche e di emergenza, il personaggio ottiene un bonus di +3 a primo soccorso</p><p class=\"MsoNormal\"><b>The Doc</b>: Il personaggio &#232; un medi-chirurgo scafato, aggiornato all&#8217;utilizzo della pi&#249; moderna tecnologia medica e tecniche operatorie; il personaggio ottiene un bonus di +3 a medi-chirurgia</p><p class=\"MsoNormal\"><b>Zero g Doc:&#160;</b>Il personaggio &#232; un medi-chirurgo scafato, aggiornato all&#8217;utilizzo della pi&#249; moderna tecnologia medica e tecniche operatorie in completa assenza di gravit&#224;; il personaggio ottiene un bonus di +3 a medi-chirurgia</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>Demolition Man:&#160;</b>Il personaggio &#232; un esperto demolitore e sminatore,&#160; capace di utilizzare tutti gli esplosivi comunemente utilizzati ed anche quelli improvvisati; il personaggio ottiene un bonus di +3 a consocenza esplosivi.</p><p class=\"MsoNormal\"><b>Drone Master</b>&#160;: Il personaggio &#232; un abile pilota di droni da posizione remota, ottiene un bonus di +3 a pilotare droni.</p><p class=\"MsoNormal\"><b>Mc Gyver</b>&#160;: Il personaggio &#232; in grado di improvvisare, adattarsi e raggiungere il risultato in tutte le occasioni di riparazioni di emergenza, arrangiandosi con quello che trova a portata di mano, il personaggio ottiene un bonus di +3 a riparare</p><p class=\"MsoNormal\"><b>Man of the wild :&#160;</b>Il personaggio &#232; altamente addestrato a sopravvivere abbandonato a se stesso nella taura selvaggia, il personaggio ottiene un bonus di +3 a sopravvivenza</p><p class=\"MsoNormal\"><b>Ace-High&#160; :&#160;</b>Il pilota &#232; un vero&#160; asso ai comandi di una qualsivoglia, nave, navetta o caccia, il personaggio ottiene un bonus di +3 a pilotare velivoli</p><p class=\"MsoNormal\"><b>Weapon master :&#160;</b>Il personaggio &#232; maestro nell&#8217;utilizzo dei sistemi d&#8217;arma integrati, riuscendo ad ottenere il meglio da loro, il personaggio ottiene un bonus di +3 a uso sistemi d&#8217;arma integrati</p><p class=\"MsoNormal\"><b>The systemist:&#160;</b>Il personaggio &#232; maestro nell&#8217;utilizzo dei sistemi di rilevamento dati integrati, riuscendo ad ottenere il meglio da loro, il personaggio ottiene un bonus di +3 a uso sensori integrati</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>Navigator :&#160;</b>Il personaggio &#232; maestro nell&#8217;utilizzo delle piattaforme di navigazioni integrate, riuscendo ad ottenere il meglio da loro, il personaggio ottiene un bonus di +3&#160; ad astro-navigazione.</p><p class=\"MsoNormal\"><b>Trail blazer:&#160;</b>Il personaggio &#232; un asso nella navigazione terrestre sapendo sempre dove si trova, anche con pochi riferimenti visivi, trovando sempre il percorso migliore e pi&#249; veloce da intraprendere; il personaggio ottiene un bonus di +3 a navigazione terrestre</p><p class=\"MsoNormal\"><b>Armored pilot : &#160;</b>Il personaggio &#232; un maestro nel pilotaggio dei Goliath, riuscendo a compiere le manovre pi&#249; difficili con successo, il personaggio ottiene un bonus di +3 a pilotare Goliath</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>Moobster&#160;</b>: il personaggio sa mescolarsi nei bassifondi e tra la malavita locale, sa a che porte bussare o dove allunbgare qualche credito per avere le informazioni che gli interessano; il personaggio ottiene un bonus di +3 a conoscenza bassifondi.</p><p class=\"MsoNormal\"><b>3rd grade :&#160;</b>il personaggio &#232; abile nello spremere le informazioni &#160;che gli servono, anche senza toccare l&#8217;interrogato, il personaggio ottiene un bonus di +3 ad intimidire</p><p class=\"MsoNormal\"><b>Sherlock :&#160;</b>Il personaggio ha una lucida mente analitica, per lui &#232; routine collegare, fatti, volti o indizi; il personaggio ottiene un +3 ad investigare</p><p class=\"MsoNormal\"><b>Mind hunter:&#160;</b>Il personaggio &#232; un esperto profiler e conoscitore della psiche criminale, il personaggio ottiene un bonus di +3 a profiling</p><p class=\"MsoNormal\"><b>Eagle eye :&#160;</b>il personaggio &#232; un occhio d&#8217;aquila e non gli sfugge un dettaglio, anche il pi&#249; piccolo, il personaggio ottiene un bonus di +3 a percezione</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>Ghost :</b>&#160;Il personaggio &#232; sfuggevole come un fantasma, sa confondersi con l&#8217;ambiente circostante e le ombre; il personaggio ottiene un bonus di +3 a furtivit&#224;</p><p class=\"MsoNormal\"><b>Poker Face :&#160;</b>il personaggio ha la classica faccia di bronzo, intellegibile ai pi&#249;, non vorreste trovarvelo mai al vostro stesso tavolo da poker, il personaggio ottiene un bonus di +3 a mascherare</p><p class=\"MsoNormal\"><b>Mind Blower&#160;</b>: il personaggio conosce come le proprie tasche la psiche umana, il personaggio ottiene un bonus di +3 a psicologia</p><p class=\"MsoNormal\"><b>Cyber-system :&#160;</b>il personaggio &#232; un asso nell&#8217;impianto elementi cibernetici nel corpo umano, ottiene un bonus di +3 a medicina implantistica</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>Terraformer:&#160;</b>Il personaggio &#232; esperto nella terra-formazione degli eso-pianeti, portandoli dall essere fredde rocce inospitali a accoglienti pianeti in cui cominciare una nuova vita; il personaggio ottiene un bonus di +3 a conoscenze terra-formazione</p><p class=\"MsoNormal\"><b>Hacker-man:&#160;</b>Il personaggio &#232; un abili hacker, capace di bucare tutti i sistemi che gli si parano difronte, anche quelli meglio difesi, il personaggio ottiene un bonus di +3 a Hacking</p><p class=\"MsoNormal\"><b>Space tech:&#160;</b>il personaggio &#232; un esperto ingegnere aerospaziale, abile a manutenere, migliorare o modificare tutti i sistemi e le piattaforme utilizzate nelle missioni di colonizzazione, il personaggio ottiene un bonus di +3 a ingegneria aerospaziale.</p><p class=\"MsoNormal\"><b>Hot road:&#160;</b>&#160;Il personaggio &#232; abile nella guida di veicoli e dei rover su ogni superficie, anche quella pi&#249; accidentata, capace di lanciarsi in manovre degne dei peggiori film automobilistici, il personaggio ottiene un bonus di +3 a guidare veicoli</p><p class=\"MsoNormal\"><b>Electro-man:&#160;</b>Il personaggio &#232; esperto nell&#8217;ingegneria meccatronica e nello sviluppo di componenti cibernetiche sempre pi&#249; performanti, il pg ottiene un bonus di +3 ad ingegneria meccatronica</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>The Geek :&#160;</b>&#160;per il personaggio la programmazione e la manutenzione o salvaguardia di qualunque sistema digitale non conosce segreti, il pg ottiene un bonus di +3 a programmazione avanzata</p><p class=\"MsoNormal\"><b>Xeno Doc:&#160;</b>il personaggio &#232; un esperto nello studio sull&#8217; anatomia aliena, il pg ottiene un bonus di +3 a Xeno Medi-Chirurgia</p><p class=\"MsoNormal\"><b>Xeno Mentalist:</b>&#160;il personaggio &#232; un esperto nello studio della psicologia aliena, il pg ottiene un bonus di +3 a Xeno Psicologia</p><p class=\"MsoNormal\"><b>Xeno Biologist:</b>&#160;il personaggio &#232; un esperto nello studio della biologia aliena, il pg ottiene un bonus di +3 a Xeno Biologia</p><p class=\"MsoNormal\"><b>Xeno Plant:&#160;</b>il personaggio &#232; un esperto nella botanica degli eso-pianeti, il pg ottiene un bonus di +3 a Xeno Botanica</p><p class=\"MsoNormal\"><b>Xeno Geek:&#160;</b>il personaggio &#232; un esperto nella retro-ingegneria e nell&#8217;utilizzo di codici di programmazione alieni, il pg ottiene un bonus di +3 a Xeno programmazione<b></b></p><p class=\"MsoNormal\"><b>Xeno Tronic:&#160;</b>il personaggio &#232; un esperto nello studio e nelle retro-ingegneria dei sistemi alieni, il pg ottiene un bonus di +3 a Xeno ingegneria<b></b></p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\"><b>Xeno Hacking:&#160;</b>il personaggio &#232; un esperto nel forare i database ed i codici alieni, il pg ottiene un bonus di +3 a Xeno Hacking<b></b></p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\"><b>2)Background:</b></p><p class=\"MsoNormal\">Una volta completati i passaggi precedenti &#232; venuto il momento di dare un passato al vostro personaggio.</p><p class=\"MsoNormal\">Il background, una volta scritto conformemente all&#8217;ambientazione, va inviato ad un membro dello staff per la vidimazione e l&#8217;eventuale correzione di alcuni punti, in modo da far calare completamente il personaggio nell&#8217;ambientazione di gioco.</p><p class=\"MsoNormal\"><u>NOTE BENE:</u></p><p class=\"MsoNormal\">Di base ogni personaggio &#232; stato formato ed addestrato per affrontare la missione, sia esso un civile o un membro delle forze armate, dell&#8217;ordine o un dipendente federale.</p><p class=\"MsoNormal\">Il periodo di addestramento per un civile dopo essere stato selezionato per il progetto Peregrine &#232; di un anno (creando cos&#236; legami di background tra personaggi), in cui il personaggio impara a difendersi ed a conoscere i rischi della missione e migliorare la propria esperienza nel campo di interesse scelto (et&#224; minima di accesso al programma : 18 anni)</p><p class=\"MsoNormal\">Il tempo di addestramento per un militare della flotta &#232; di tre anni presso l&#8217;accademia del conglomerato urbano della costa Ovest(creando cos&#236; legami di background tra personaggi). In questo periodo la recluta viene addestrata e specializzata per poter essere preparata ad affrontare le missioni della flotta nello spazio federale(et&#224; minima di arruolamento: 18 anni)</p><p class=\"MsoNormal\">Il Background deve essere congruo alla linea temporale ed all&#8217;ambientazione della Land.</p><p class=\"MsoNormal\">Non sono coerenti con l&#8217;ambientazione personaggi troppo giovani, psicologicamente instabili o con famiglia al seguito.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>3)Risveglio:</b></p><p class=\"MsoNormal\">una volta completati tutti i passi precedenti &#232; venuto il momento di far entrare in gioco il vostro personaggio, la prima giocata va concordata con lo staff in quanto il personaggio verr&#224; svegliato dal sonno somatico indotto per fargli affrontare i 12 mesi di viaggio in salto FTL sino al quadrante omega.</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">Effettuata tale giocata il personaggio &#232; libero di interagire con l&#8217;ambientazione e gli altri giocatori.</p>', '', 0, 13, 0, 25, '2022-03-16 12:32:55', 0, '2022-03-16 12:32:55', 0),
('Info luoghi', 'main', 0, 1, '', '', 0, -1, 322, 15, '2022-03-16 11:33:41', 1, '2022-03-16 12:34:11', 1),
('', 'title', 0, 0, 'Ambientazione', '', 0, 21, 0, 22, '2022-03-16 12:32:01', 0, '2022-03-16 12:32:01', 0);
INSERT INTO `component` (`IDElement`, `Type`, `Columns`, `VerticalOrientation`, `Content`, `ImageName`, `IsClass`, `IDParent`, `IDRoute`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('', 'text', 0, 0, '<h4><p class=\"MsoNormal\">Data Attuale:&#160;2522.</p><p class=\"MsoNormal\"><b>U.E.F.</b>&#160;(United Earth Federation)</p><p class=\"MsoNormal\"><u>Data di Fondazione U.E.F</u>. :&#160;2100.</p><p class=\"MsoNormal\"><u>Capitale</u>:&#160;Conglomerato urbano della costa East degli Stati Uniti(Terra).</p><p class=\"MsoNormal\"><u>Lingua</u>:&#160;ConLang (base anglofona con introduzioni slang di tutte le lingue).</p><p class=\"MsoNormal\"><u>Vita media</u>&#160;cittadini federali:&#160;anni 100</p><p class=\"MsoNormal\"><u>Maggiore et&#224;</u>:&#160;18</p><p class=\"MsoNormal\"><u>Voto</u>:&#160;Suffragio Universale</p><p class=\"MsoNormal\"><u>Moneta</u>:&#160;Credito Federale Terrestre (detto &#8220;credito&#8221;)moneta solo digitale.</p><p class=\"MsoNormal\"><u>Religione</u>:&#160;Stato Laico (libert&#224; di culto).</p><p class=\"MsoNormal\"><u>Forma di Governo</u>:&#160;Repubblica Federale.</p><p class=\"MsoNormal\"><u>Presidente</u>:&#160;Segretario Generale.</p><p class=\"MsoNormal\"><u>Aderenti</u>:&#160;Terra, Luna, Marte, Cintura asteroidale(Planetoide Cerere), 9 stazioni orbitali civili (Talia, Calliope, Tersicore, Urania, Melpomene, Erato, Clio, Euterpe, Polimnia), Colonie extra cintura e 7 stazioni Extra Cintura (Nete, Mese, Ipate, Telsione, Melete, Aede ed Arche).</p><p class=\"MsoNormal\"><u>Organo Esecutivo</u>:&#160;Consiglio di sicurezza (ogni pianeta o stazione invia una percentuale di rappresentanti a seconda della popolazione residente, attualmente la maggioranza dei seggi &#232; ricoperta dal pianeta terra, seguito da Marte, e dalle stazioni orbitali unite, fanalino di coda la Luna e la Cintura asteroidale). I rappresentanti vengono eletti in forma diretta dai cittadini delle nazioni del pianeta Terra, dai cittadini delle stazioni orbitali e delle colonie.</p><p class=\"MsoNormal\"><u>Forze dell&#8217;ordine</u>:&#160;le forze dell&#8217;ordine federali sono un organo di controllo che fa capo al pianeta Terra ed ha giurisdizione su ogni pianeta o stazione della federazione ed ha potere sulle forze di polizia locali, planetarie o di settore e si occupa dei crimini maggiori, viene chiamato E.B.I.(Earth Bureau of Investigation).Lo E.B.I fa capo al Procuratore Generale di Pianeta.</p><p class=\"MsoNormal\">Sotto lo E.B.I. si trovano i dipartimenti di polizia di pianeta e stazione che si occupano della normale gestione dell&#8217;ordine pubblico e sono divise in quattro squadre: Intelligence (investigativa), Forensic (scientifica), Patrol (pattuglia) e S.w.a.t.(squadra intervento speciale).</p><p class=\"MsoNormal\">Quando le colonie sono piccole o di neo formazione, e quindi un dipartimento intero di forze di polizia sarebbe sovrastimato, dopo un primo periodo di giurisdizione sotto l&#8217;egida della flotta, vengono instituite squadre di sceriffi federali chiamati Marshall addetti al mantenimento dell&#8217;ordine pubblico.</p><p class=\"MsoNormal\"><u>Sistema Giudiziario</u>:&#160;esistono due Corti, La Corte Suprema (9 giudici eletti a vita dal consiglio di sicurezza) che giudica su casi inerenti alla costituzione della Federazione, si trova sulla Terra nel Conglomerato Urbano della Costa Est, e le Corti Federali che si occupano delle cause civili e penali e sono diramate in tutta la federazione. Come sistema svuota carceri vengono applicate conversioni di pena con il servizio coatto presso la Flotta. per il periodo commutato all\'imputato dai Giudici federali.</p><p class=\"MsoNormal\"><u>Sistema Sanitario</u>:&#160;Il sistema sanitario Federale &#232; misto, Pubblico e gratuito per tutti gli impiegati federali e i coloni che decidono di trasferirsi nei pianeti di nuova colonizzazione oltre la cintura ed invece privato per i civili che devono fare affidamento e potersi permettere un&#8217;assicurazione sanitaria. Questo sistema sprona l&#8217;arruolamento o l&#8217;impegno nella Pubblica Amministrazione della Federazione e l&#8217;esodo dalla terra e dalle stazioni ormai sovraffollate ed al collasso per cercare la fortuna nella cintura o oltre ad essa.</p><p class=\"MsoNormal\"><u>Forze Armate</u>:&#160;Per sfruttare al meglio le forze in campo e i fondi a disposizione la U.E.F. fond&#242; la flotta federale. Scopi della Flotta sono la protezione dello spazio federale e la proiezione di forze nei sistemi che compongono la federazione, oltre alla protezioni delle spedizioni atte a colonizzare i nuovi eso-pianeti considerati abitabili dall&#8217;ente spaziale federale. All&#8217;interno di essa si trovano le varie specialit&#224; che la compongono come il personale di plancia, i piloti dei gruppi volo imbarcati, i genieri, i combat medic, le truppe da sbarco orbitali ed il famigerato &#8220;Grey Squadron&#8221;, le forze speciali della federazione, che raccolgono i migliori elementi di tutte le specialit&#224;.</p><p class=\"MsoNormal\">L&#8217;accademia della Flotta, i cui corsi di formazione ed addestramento durano 3 anni, si trova nel conglomerato urbano della Costa Ovest degli Stati Uniti, che unisce gli antichi centri urbani di Los Angeles, San Francisco e San Diego ed &#232; collegata direttamente con un ascensore orbitale all&#8217;anello difensivo e comando orbitale della flotta, la stazione da battaglia ARES, centro nevralgico e logistico della U.E.F.F.</p><p class=\"MsoNormal\"><u>Space Cowboy e Mercs:&#160;</u>Dato che lo spazio &#232; enorme e la federazione non pu&#242; essere sempre presente ovunque, il consiglio di sicurezza cre&#242; un centro di addestramento sulla stazione permanente Lunare, dove formare operatori privati con lo scopo di creare un circuito di personale civile brevettato dal governo che svolgesse in autonomia, o riunendosi in piccoli gruppi, i lavori che andavano ad appesantire il sistema di pubblica sicurezza, come la caccia ai latitanti e la protezione puntuale di strutture private coloniali.</p><p class=\"MsoNormal\"><u>Correnti politiche ed ideologiche:</u></p><p class=\"MsoNormal\">Il sindacato: &#8220;Synd&#8221;&#160;gruppo malavitoso che si muove nel sottobosco dei lavoratori delle stazioni avanzate e della cintura asteroidale, tra le loro mani passa tutto ci&#242; che &#232; legalmente vietato dalla legge, gioco d&#8217;azzardo, droghe, scommesse su combattimenti e gare clandestine e taglieggiamento dei coloni.</p><p class=\"MsoNormal\">Fronte coloniale indipendentista:&#160;&#8220;F.C.I.&#8221;: Gruppo terroristico che reclama l&#8217;indipendenza delle colonie rispetto all&#8217;egemonia terrestre con atti terroristici e proteste violente, molti si domandano se sia effettivamente tutta farina del loro sacco o la U.E.F. ci metta il carico giocando alla &#8220;strategia del terrore&#8221;.</p><p class=\"MsoNormal\">&#160;<u>Il programma Peregrine:</u></p><p class=\"MsoNormal\">Nel primo ventennio del ventunesimo secolo la terra ormai &#232; al collasso, con nove miliardi di abitanti e un consumo di materie prime che svuota in sei mesi le riserve di un anno prodotte dal pianeta.</p><p class=\"MsoNormal\">la soluzione creare un organo superiore che controllasse lo sviluppo umano, da qui venne l\'idea embrionale della federazione terrestre, in modo da concentrare il potere esecutivo ad un unico organo che potesse disporre al meglio delle poche risorse della terra.</p><p class=\"MsoNormal\">&#160;Purtroppo non ostante il razionamento delle materie prime, cibo e acqua su scala mondiale, unito ad un ferreo controllo sulle nascite, ormai il pianeta ha superato il punto di non ritorno e la popolazione non si adatta alle nuove ristrettezze dopo secoli di utilizzo sfrenato delle risorse e di consumismo senza regole.</p><p class=\"MsoNormal\">scoppiano le prime rivolte che investono i grandi conglomerati urbani, questo fa decidere per l\'unica via possibile, l\'esodo.</p><p class=\"MsoNormal\">Viene programmata la costruzione di 9 stazioni orbitali intorno alla terra, abbastanza grandi da contenere mezzo miliardo di persone l\'una, ma la costruzione non procede con velocit&#224; e nel mentre la crescita della popolazione va ancora aumentando.</p><p class=\"MsoNormal\">Viene quindi lanciata la&#160; colonizzazione di Marte, il lontano pianeta rosso, ma il rpimo insediamento sotterraneo di Valles Marineris ancora non basta, verr&#224; cominciata al creazione della magnetosfera del pianeta e della sua terraformazione, mentre i due principali crateri del pianeta vengono coperti da cupole e si comincia la costruzione delle due grandi citt&#224; Dawn e Dusk City.</p><p class=\"MsoNormal\">Ci vorranno 300 anni perch&#232; la superficie del pianeta rosso possa ospitare la vita, troppo tempo, per la stessa colonia che continua a crescere.</p><p class=\"MsoNormal\">Neppure lo sfruttamento della fascia con le sue risorse &#232; sufficiente per la domanda ormai esponenziale di esse.</p><p class=\"MsoNormal\">in questa situazione l&#8217;intento del programma &#8220;Peregrine&#8221; &#232; alleggerire il sovraccarico umano che investe la terra, i pianeti del sistema e le stazioni orbitali, ormai prossime al collasso per una sempre maggiore richiesta di risorse dalla popolazione ormai in esponenziale aumento.</p><p class=\"MsoNormal\">Lo studio dei pianeti oltre la fascia ha permesso l&#8217;identificazione di alcuni di loro come abitabili o con atmosfera considerata adatta alla terra-formazione e quindi capaci di ospitare la vita sulla superficie di essi.</p><p class=\"MsoNormal\">I futuri Coloni volontari vengono sottoposti ad una selezione psico-attitudinale sui loro pianeti o strutture di origine, per poi una volta scelti, essere spediti al centro di addestramento di Marte, dove stazioneranno un anno per specializzarsi prima di essere messi in soma-sonno e spediti oltre la fascia ai loro pianeti di destinazione.</p><p class=\"MsoNormal\">I pianeti considerati abitabili oltre la fascia sono in media distanti 12 anni luce dal sistema solare ed Il viaggio ha durata di 12 mesi e viene percorso a velocit&#224; luce.</p><p class=\"MsoNormal\">Al loro arrivo i futuri coloni verranno svegliati dal loro sonno di stasi ed una volta che il fisico si &#232; ripreso dal lungo periodo in soma sonno sono pronti a cominciare la loro nuova vita oltre la fascia.</p><p class=\"MsoNormal\">Non &#232; previsto ritorno dal programma Peregrine.</p><p class=\"MsoNormal\"><u>Cenni Storici:</u></p><p class=\"MsoNormal\"><b><u>2050</u></b>:&#160;primo insediamento umano stabile sulla Luna e messa appunto dei motori a propulsione nucleare per astronavi. Inizio della stesura della costituzione della Federazione e promulgazione di tutti i dispositivi di legge per la sua creazione, questo per fare fronte unito contro il collasso sociale e naturale che la terra st&#224; per affrontare.</p><p class=\"MsoNormal\"><b><u>2100</u></b>:&#160;sbarco su Marte, inizio costruzione delle prime 3 stazioni orbitali programmate e fondazione Ufficiale della Federazione e creazione della U.E.F.F.</p><p class=\"MsoNormal\"><b><u>2150</u></b>:&#160;prima colonia stabile su Marte (valle Marineris)ed inizio della sua colonizzazione, completamento delle prime 3 stazioni (Talia, Calliope, Tersicore) ed inizio cantieri orbitali delle successive 3 in programma; Messa a punto dei motori Ionici ad impulsi per astronavi.</p><p class=\"MsoNormal\"><b><u>2200</u></b>:&#160;Marte continua nella sua colonizzazione, le due grandi citt&#224; cominciano ad essere piene di vita (Dawn City, Dusk City) protette dalle cupole innalzate ai bordi dei crateri che le ospitano, inizio terra-formazione del pianeta; fine dei lavori per le 3 nuove stazioni orbitali (Urania, Melpomene, Erato), inizio dei cantieri orbitali per le ultime tre stazioni orbitali programmate. Inizio programma di ricerca guida F.T.L. (Faster Than Light)</p><p class=\"MsoNormal\"><b><u>2250</u></b>:&#160;Stazione Stabile sul pianeta nano Cerere e inizio sfruttamento minerario della cintura asteroidale, prosegue la terra-formazione di Marte, Costruzione su Ganimede, IO ed Europa di grandi installazioni abitative, produttive e di villeggiatura, fine delle ultime 3 stazioni orbitali programmate (Clio, Euterpe, Polimnia). Primi prototipi motori a guida F.T.L.</p><p class=\"MsoNormal\"><b><u>2300:</u></b>&#160;fine della terra-formazione di Marte, smontaggio cupole cittadine e inizio colonizzazione della superficie. Ampliamento delle stazioni minerarie della cintura su Veste, Pallade e Igea. Prima ricognizione della fascia esterna grazie alla messa a punto del sistema di guida F.T.L. rimuovendo di fatto l&#8217;ultimo ostacolo per la totale colonizzazione spaziale da parte dell&#8217;uomo, nascita del progetto &#8220;Peregrine&#8221;.</p><p class=\"MsoNormal\"><b><u>2350:</u></b>&#160;catalogazione della fascia esterna in quadranti e settori; inizio della colonizzazione con la creazione delle stazioni di settore in prossimit&#224; degli eso-pianeti capaci di ospitare la vita, costruzione delle prime strutture stabili sulle superfici, inizio di trasferimento primi coloni sugli eso-pianeti. Scoperta di antichi manufatti di origine aliena, la certezza dell&#8217;umanit&#224; di essere sola nell&#8217;universo viene meno.</p><p class=\"MsoNormal\"><b><u>2400:</u></b>&#160;scoperta della &#8220;breccia dell&#8217;aquila&#8221; nel quadrante Omega, sembra dai primi studi che si tratti di un worm hole stabile, costruzione della stazione di ricerca e controllo atmosferica Argo su Eracle 101, spedizione della prima nave coloniale Comet nel quadrante, ed invio delle prime sonde oltre la breccia. Uscita dalla breccia dell&#8217;acquila della flotta Bioroide, abbandono della stazione Argo, distruzione delle navi di settore compresa la grande nave Coloniale Comet che viene abbandonata dal personale e lasciata al suo destino; la fascia esterna cade in mano al misterioso nemico alieno senza troppa difficolta, la cintura viene evacuata, cadono nell&#8217;ordine: Cerere, Pallade e Igea, taglio di tutte le forniture minerarie dalla cintura, mobilitazione di tutta la U.E.F.F., coscrizione obbligatoria di tutti gli uomini e donne abili, Scoppio ufficiale della guerra Bioroide.</p><p class=\"MsoNormal\"><b><u>2450</u></b>:&#160;la Federazione si trova schiacciata da un nemico inarrestabile che porta la caduta del settore di Giove e l&#8217;abbandono delle colonie di Ganimede, Io ed Europa, assedio e caduta di Marte, nascita della resistenza marziana e di &#8220;Radio free Mars&#8221;, l&#8217;emittente con cui la Federazione riesce ad organizzare i superstiti&#160; delle forze armate federali, di polizia e civili, per la guerriglia sulla superficie arroccandosi nella vecchia colonia sotterranea di Valles Marineris. Ormai la Fedrazione &#232; composta solo dalla Terra, dalle 9 stazioni orbitali intorno ad essa e dalla colonia lunare, su cui si ammassano le truppe federali per riorganizzarsi dopo la caduta di Marte e la perdita dei suoi cantieri astronautici.</p><p class=\"MsoNormal\">Battaglia di Marte, ovvero l\'offensiva Umana contro la flotta Bioroide . La flotta bioroide viene affrontata sia nello spazio che sulla superficie con il dispiegamento di tutte le forze rimanenti a disposizione della Federazione, la flotta umana affronta un nemico con un rapporto di 10 a 1, ma grazie al sacrificio di molti equipaggi e soldati la flotta riesce a spezzare la linea nemica e riconquistare il pianeta liberandolo.</p><p class=\"MsoNormal\">La flotta Bioroide si ritira per arroccarsi lungo la fascia, ma il comando terrestre, nella figura dell\'Ammiragglio Nicole Breckinridge, avendolo previsto, fa trovare al nemico un ulteriore sezione della flotta ad attenderlo, scoppia la battaglia di Cerere; 500 navi, recuperate dalla flotta in disarmo e cariche di personale proveniente dalle prigioni federali, al comando del giovane capitano Nathaniel Brookes&#160; e del capitano Jhonahtan Wade riesce a rallentare il nemico sino all\'arrivo del resto della flotta da Marte.</p><p class=\"MsoNormal\"><u>2492:&#160;</u>La flotta Bioroide &#232; distrutta, la grande astronave Madre galleggia in frantumi nella fascia, le ultime unit&#224; nemiche rimaste si ritirano verso la breccia,&#160; inseguite dalla flotta. Marte, le sue lune e la Fascia ne escono a pezzi, l\'intera terra formazione&#160; del pianeta rosso &#232; stata compromessa e si tenta di ripristinarla, le stazioni estrattive su Cerere, Pallade e sugli altri planetoidi sono da ricostruire. Le perdite umane ammontano a un miliardo di vite spezzate, e quattro milioni di dispersi. Dalla guerra emerge la figura dell\'ammiraglio Breckinridge che sale al seggio del segretariato generale.</p><p class=\"MsoNormal\"><b><u>2522</u></b>: La guerra ormai &#232; finita da un trentennio, la federazione &#232; ridotta al fantasma di se stessa e trovandosi con la maggior parte dello spazio vitale federale da ricostruire e con le risorse quasi azzerate il consiglio di sicurezza vota all\'unanimit&#224; il programma peregrine e l\'esodo forzato verso i quadranti esterni fascia con la speranza di trovare nuove risorse e nuovo spazio vitale dove spostare l\'ondata di profughi e disperati creati da 100 anni di guerra.<br></p><p class=\"MsoNormal\">Vengono spedite le nuove stazioni Arca ( Nete,&#160;Mese, Ipate, Telsione, Melete, Aede, Arche) con la capienza di 300.000 esseri umani l\'una nei settori di confine dello spazio federale&#160;scortate dalle battlestar della flotta con la speranza di trovare nuove case per tutti.</p><p class=\"MsoNormal\"><b>Vita nella frontiera:</b></p><p class=\"MsoNormal\">la vita nella frontiera non &#232; di certo fatta di comodit&#224; e molti fronzoli, quelle sono per la Terra e le nove stazioni orbitanti intorno ad essa , gi&#224; dalla stazione permanete sulla Luna le cose cambiano, la vita diventa sempre pi&#249; spartana ed essenziale via via che ci si allontana dalla terra andando verso la fascia asteroidale di confine.</p><p class=\"MsoNormal\">L&#8217;indumento pi&#249; usato nella frontiera sono le jump-suit, resistenti capi da lavoro protettivi, in abbinata a stivaletti tecnici e guanti rinforzati, anche nel tempo libero gli indumenti pi&#249; usati sono capi semplici e resistenti, pantaloni cargo, magliette, giacche di sinto-pelle o tecniche e scarpe robuste vanno per la maggiore, per le serate mondane per quando si cerchi una minima eleganza gli indumenti rimangono semplici, lineari e minimalisti.</p><p class=\"MsoNormal\">Il cibo della frontiera risente delle contaminazioni culturali di tutto il genere umano, creando una cucina fusion universale, mescolando e integrando sapori di tutti i tipi; non &#232; difficile che lo stesso locale possa offrire nello stesso men&#249; pi&#249; piatti provenienti da diversi cluster culturali.</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">I moduli abitativi delle stazioni di frontiera come la Nete o delle stazioni terra-formanti come la Argo sono dei minuscoli bilocali con una camera da letto, un bagno con acqua razionata giornaliera e una minuscola zona giorno con angolo cottura ad induzione e forno a microonde; nelle navette&#160; e nelle astronavi gli spazi delle cabine sono ancora pi&#249; claustrofobici e minimali.</p></h4>', '', 0, 9, 0, 20, '2022-03-16 12:29:15', 0, '2022-03-16 12:29:15', 0),
('Regolamento', 'main', 0, 1, '', '', 0, -1, 320, 11, '2022-03-16 11:32:37', 1, '2022-03-16 12:33:43', 1),
('', 'title', 0, 0, 'Regolamento', '', 0, 11, 0, 26, '2022-03-16 12:33:43', 0, '2022-03-16 12:33:43', 0),
('', 'text', 0, 0, '<p class=\"MsoNormal\"><b>Che cos&#8217;&#232; un GDR</b></p><p class=\"MsoNormal\">Acronimo della parola Gioco di Ruolo, Lost Space &#232; una piattaforma di gioco dove i giocatori interpretano dei personaggi giocanti (PG) che si muovono ed interagiscono con i personaggi creati da altri giocatori e creano trame narrative all&#8217;interno di un ambientazione distopica.</p><p class=\"MsoNormal\"><u>ON:&#160;</u>&#232; tutto ci&#242; che avviene in gioco e coinvolge i personaggi giocanti.</p><p class=\"MsoNormal\"><u>OFF:</u>&#160;&#232; tutto ci&#242; che riguarda la vita reale al di fuori del gioco.</p><p class=\"MsoNormal\">&#200; di fondamentale importanza che ON e OFF non si confondano mai.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Personaggi Non Giocanti (PNG)</b></p><p class=\"MsoNormal\">Sono le comparse del nostro film, i personaggi non mossi da nessun giocatore, che creano la moltitudine di volti che si incontrano per la strada o sui ponti della navi, ma che non sono influenti all&#8217;interno del gioco ed al massimo possono essere mossi dai giocatori in maniera meramente descrittiva.</p><p class=\"MsoNormal\">Questi personaggi possono essere mossi in maniera attiva e causando influenze durante il gioco solo dai Master.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Tempi di azione e massimale dei caratteri:</b></p><p class=\"MsoNormal\">Per mantenere il gioco fluido &#232; consigliato nelle giocate libere di mantenere tra due giocatori una media di invio delle azioni sui 10 minuti tra l&#8217;uno e l&#8217;altro, in caso di giocate tra pi&#249; personaggi e consigliabile scendere sui 6-7 minuti, mentre in Quest, in cui il numero di personaggi sale, &#232; consigliabile raggiungere i 5 minuti tra un invio di un giocatore e l&#8217;altro.</p><p class=\"MsoNormal\">la chat di Lost Space permette l&#8217;utilizzo di massimo 2000 caratteri ad azione.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>PVE:</b></p><p class=\"MsoNormal\">Il PVE (Player Versus Enviroment) ovvero giocatore contro il mondo di gioco &#232; l&#8217;approccio principale di Lost Space, in cui i master muovono l&#8217;ambient di gioco proponendo sfide ai personaggi giocanti.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>PVP:</b></p><p class=\"MsoNormal\">Il PVP (player Versus Player) &#232; consentito, deve essere regolamentato da un master e non pu&#242;&#160;<u>mai</u>&#160;portare alla morte di un Pg (personaggio) in quando la morte in questo gdr &#232; permanente, quindi acconsentita e messa in atto dalla gestione contattato anche il giocatore.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Meta-play:</b></p><p class=\"MsoNormal\">Il meta-play, ovvero l&#8217;utilizzo di informazioni in game ottenute off game, &#232; vietato e punito con il ban del personaggio o la cancellazione di uno o di entrambi i personaggi del giocatore interessato.</p><p class=\"MsoNormal\">Per evitare il meta-play involontario &#232; vietata la&#160;<u>back chat</u>&#160;(ovvero l&#8217;osservare senza interagire nel gioco)nelle stanze di gioco in cui &#232; in corso una giocata tra altri giocatori.</p><p class=\"MsoNormal\"><u>N.B.</u>&#160;il divieto di Back Chat &#232; sospeso per i primi 15 giorni di iscrizione di un nuovo giocatore in modo che possa sbirciare e vedere lo stile di gioco di Lost Space</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>doppio PG:</b></p><p class=\"MsoNormal\">E\' consentito avere un doppio pg , previo richiesta alla Gestione, SOLO una volta trascorsi i 4 mesi di permanenza in land ed aver dimostrato presenza di gioco attivo e costante. NOTA: Per nessun motivo ed in alcun modo i due pg devono interagire tra loro in modo diretto o indiretto, eventuali irregolarit&#224; verranno punite con la cancellazione di uno o ambedue i pg a seconda delle circostanze.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Gioco in solitario:</b></p><p class=\"MsoNormal\">essendo un gioco di ruolo sostanzialmente un gioco di interazione tra personaggi, le giocate in solitaria sono vietate.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Punti esperienza:</b></p><p class=\"MsoNormal\">ci sono tre modi per ottenere punti esperienza:</p><p class=\"MsoNormal\"><u>-quest /ambient</u>, dove i personaggi saranno premiati con punti esperienza dai Master, ed il terzo ;</p><p class=\"MsoNormal\"><u>-vidime</u>, che siano esse per seguire una trama, di corporazione o addestramento dei personaggi , esse vengono premiate dai Master con punti esperienza spendibili per i personaggi.</p><p class=\"MsoNormal\"><b><br></b></p><p class=\"MsoNormal\"><b>Vidime:</b></p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">Per dipanare le trame di gioco, o migliorare i propri personaggi, oltre alla quest ed agli ambient in presenza di un game master, si abbisogno di ulteriori giocate, siano, ad esempio esse di investigazione, studio del territorio , raccolta di dati, allenamenti o esercitazioni. Vanno eseguite in presenza di minimo due personaggi e per essere validate devono avere al loro interno non meno di 5 azioni (esclusi gli ingressi e presentazioni dei personaggi). Una volta completata la giocata di vidima, essa va inviata ad un master attraverso il tasto &#8220;invia chat al master per validazione&#8221;.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Incrementi delle caratteristiche:</b></p><p class=\"MsoNormal\">il sistema di spesa punti ed incremento di statistiche ed abilit&#224; in Lost Space &#232; molto semplice, ed &#232; il seguente:</p><p class=\"MsoNormal\">-Costo Statistiche (o Stats) valore attuale x20;</p><p class=\"MsoNormal\">-costo abilit&#224; (o Skill) valore attuale x10;</p><p class=\"MsoNormal\">-costo Bundle di classe, 150 punti esperienza</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Turni di Gioco:</b></p><p class=\"MsoNormal\"><u>Giocate Libere e Vidime:</u></p><p class=\"MsoNormal\">La Turnazione durante le giocate libere viene stabilita dai giocatori e dal loro ingresso nella chat di gioco</p><p class=\"MsoNormal\"><u>Quest-Ambient:</u></p><p class=\"MsoNormal\">Nelle giocate amministrate da un Master la turnazione di gioco viene stabilita dal Master stesso durante ogni stringa di narrazione.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Numero di azioni per turno di combattimento:</b></p><p class=\"MsoNormal\">Ogni personaggio appiedato nel proprio turno pu&#242; fare due azioni, una di movimento ed una di attacco o difesa, se il personaggio rimane immobile pu&#242; usare una sua azione per attaccare ed una per difendersi; dal livello 15 un pu&#242; utilizzare un&#8217;azione extra (se sta utilizzando un arma bianca pu&#242; compiere un secondo attacco, se sta utilizzando un&#8217;arma da fuoco pu&#242; fare un secondo movimento).</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\">Ogni personaggio su un veicolo, goliath o velivolo pu&#242; effettuare due azioni, una di pilotaggio ed una di attacco o difesa, questo sino al livello 10 della skill di pilotaggio o guida, dal livello 15 al livello 20 le azioni diventano 3 e possono essere un mix di manovre di attacco difesa e movimento.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Azioni di combattimento:</b></p><p class=\"MsoNormal\">Durante il proprio turno un personaggio che utilizza un&#8217;arma da fuoco pu&#242; estrarla ed andare in puntamento ma non sparare, ogni azione di puntamento extra alla prima dona un bonus di +1 al tiro per colpire.</p><p class=\"MsoNormal\">Se il personaggio utilizza un arma bianca, durante il proprio turno pu&#242; estrarla e attaccare se a distanza ravvicinata, altrimenti dovr&#224; estrarre ed avvicinarsi e nel turno successivo attaccare.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>Tiri:</b></p><p class=\"MsoNormal\">i tiri vengono richiesti nelle Quest o negli Ambient ogni qual volta il risultato dell&#8217;azione non sia scontato, un combattimento, uno sofrzo fisico importante, il forzare una porta bloccata etc etc. il risultato del tiro di dado sar&#224; dato dalla sommatoria di :</p><p class=\"MsoNormal\">Tiro di dado (D10)+Stats+Skill+ Bundle</p><p class=\"MsoNormal\">La sommatoria verr&#224; eseguita direttamente dal sistema alla scelta della skill da utilizzare ed al lancio del dado (tramite apposito men&#249; a tendina)</p><p class=\"MsoNormal\">Se il risultato sar&#224; pari o maggiore dalla Classe di Difficolt&#224; (o CD) pari a:10 (semplice), 15 (medio), 20 (difficile) per un azione allora l&#8217;azione sar&#224; un successo.</p><p class=\"MsoNormal\"><b>Ferite:</b></p><p class=\"MsoNormal\">La seguente lista &#232; un esempio della tipologia di trauma subita e relativa perdita di Punti Ferita.</p><p class=\"MsoNormal\">I giorni di guarigione sono da considerarsi tali solo se sottoposti ad appropriate cure mediche, in caso contrario i tempi di guarigione naturale raddoppiano e portano a malus stabili al personaggio.</p><p class=\"MsoNormal\">-Graffi/ematomi superficiali: 90/100 PF&#160; pari a 1 giorno&#160;<br></p><p class=\"MsoNormal\">-Articolazioni lussate/microfratture/ustioni di I grado : 80/100 PF&#160; pari a 2 giorni&#160;<br></p><p class=\"MsoNormal\">-Tagli profondi/ferite muscolari/ustioni di II grado: 70/100 PF&#160; pari a 4 giorni<br></p><p class=\"MsoNormal\">-Fratture composte/armi da fuoco leggere/ustioni di III grado: 60/100 PF&#160; pari a 6 giorni<br></p><p class=\"MsoNormal\">-Fratture scomposte/armi da fuoco pesanti : 50/100 PF&#160; pari a 8 giorni<br></p><p class=\"MsoNormal\">-Fratture esposte o craniche /sfondamento gabbia toracica/perdita arti: 40/100 PF&#160; pari a 10 giorni<br></p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\">Sono Obbligatorie almeno 3 role di cura ( a seconda del livello della ferite):<br></p><p class=\"MsoNormal\">-Stabilizzazione: pu&#242; avvenire in quest/ambient (pu&#242; essere data anche dal Game Master)</p><p class=\"MsoNormal\">-Degenza: semplice controllo medico del paziente</p><p class=\"MsoNormal\">-Dimissione: il medico accerta la guarigione del paziente e lo dimette.</p><p class=\"MsoNormal\">N.B.</p><p class=\"MsoNormal\">Giocate necessarie&#160;</p><p class=\"MsoNormal\">- Ferite range 90/100 solo stabilizzazione&#160;</p><p class=\"MsoNormal\">-Ferite range 80-70/100 solo stabilizzazione e dimissione</p><p class=\"MsoNormal\">-Ferite range 60-40/100 stabilizzazione, degenza e dimissione.</p><p class=\"MsoNormal\"><b>Armi da fuoco:</b></p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">I moderni sistemi d&#8217;arma a rotaia elettro-magnetica hanno soppiantato le obsolete armi da fuoco a polvere da sparo che avevano bisogno di una componete fondamentale e non sempre presente nella frontiera, l&#8217;ossigeno. Fondamentalmente una rail gun &#232; un motore elettrico lineare progettato per sparare un proietto solido ad alta velocit&#224; affidandosi alla massa ed all&#8217;energia cinetica del proiettile stesso per causare danno; il proiettile scorre lungo due conduttori paralleli (binari) caricati elettricamente da una batteria dedicata. La teoria di base non cambia che la rail gun sia una pistola, un fucile d&#8217;assalto o un fucile anti-materiale o un cannone navale. I proiettili utilizzati, a differenza dei loro predecessori a polvere da sparo non necessitano di bossolo( gli unici che lo mantengono sono gli shotgun e gli shoting rifle per il contenimento dei pallettoni), permettendo cos&#236; una maggiore leggerezza dei caricatori. Al momento dello &#8220;sparo&#8221;, in presenza di atmosfera, Il suono che emette una rail gun &#232; paragonabile ad un tonfo sordo(lo stesso che emetterebbe un vocabolario lasciato cadere a terra).</p><p class=\"MsoNormal\"><b>Golitah:</b><br></p><p class=\"MsoNormal\">l&#8217;abitacolo dei Golitah &#232; posizionato al&#8217;interno del porzione alta del &#8220;torso&#8221; dell&#8217;unit&#224; meccanizzata. La visione esterna &#232; garantita della calotta corazzata che rimanda sulla sua superficie interna &#160;ci&#242; che si trova nel campo di vista di 180 gradi frontali dell&#8217;unit&#224; attraverso un sistema di visione alla around olografico. Il sistema di guida &#232; un mix di comandi manuali, due cloche laterali che consentono la movimentazione delle braccia assieme alla gestione degli armamenti &#160;ed una pedaliera che consente l&#8217;avanzamento dell&#8217;unit&#224;, la sua fermata o il suo arretramento; e comandi vocali grazie al\'assistente virtuale ai sistemi che ne gestisce l&#8217;elettronica ed i sensori. In caso di emergenza, la maniglia di espulsione, posizionata tra le gambe del pilota, alla base del seggiolino eiettabile, permette una veloce evacuazione dell&#8217;unit&#224;,&#160; la discesa &#232; resa sicura dalla presenza di una paracadute in fibrato di carbonio e polimero plastico, resistente alle atmosfere aggressive.</p><p class=\"MsoNormal\"><b>Rover:</b></p><p class=\"MsoNormal\">Il sistema di guida dei Rover, va dai sistemi pi&#249; semplici con sistemi di guida esclusivamente manuale a sistemi pi&#249; sofisticati con assistente virtuale alla guida e che gestisce i sistemi elettronici&#160; e sensori. Ad esclusione delle moto, fondamentalmente, si basa su una cloche per la guida e la direzione del veicolo, una cloche per la gestione dei sistema d&#8217;arma ed una pedaliera per la gestione di velocit&#224; e frenata.</p><p class=\"MsoNormal\"><b>Caccia e Navette:</b></p><p class=\"MsoNormal\">Il sistema di guida dei caccia &#232; un mix di comandi manuali, due cloche laterali, di cui una dedicata al pilotaggio/armamento,&#160;collegata ai sistemi di volo fly by wire assistiti dall&#8217;avionica di bordo che gestisce i getti di aria compressa direzionali, e l&#8217;altra dedicata alla gestione della potenza dei motori. La pedaliera&#160; invece gestisce il repulsore di spinta che permette un repentino arresto del veicolo. I comandi vocali sono inerenti alla gestione di avionica, elettronica e sensori di bordo, gestiti dall&#8217;assistente virtuale di volo. In caso di emergenza, la maniglia di espulsione, posizionata tra le gambe del pilota, alla base del seggiolino eiettabile, permette una veloce evacuazione dell&#8217;unit&#224;,&#160; la discesa &#232; resa sicura dalla presenza di una paracadute in fibrato di carbonio e polimero plastico, resistente alle atmosfere aggressive. In caso di passaggio a sistema di volo atmosferico, sia la cloche che la pedaliera comandano le superfici aerodinamiche del velivolo.</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">Nel caso di navette di dimensioni maggiori, il pilota pu&#242; essere supportato da un operatori dei sistemi che pu&#242; gestire le contromisure elettroniche della navetta o aiutare nella navigazione, e da cannonieri che possono utilizzare le torrette di difesa della navetta.</p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\">&#160;<b>Regole di quieta convivenza:</b><br></p><p class=\"MsoNormal\">Lost Space &#232; una land vietata ai minori di 18 anni il cui disclamer avverte l&#8217;utenza della presenza di linguaggio e tematiche violente.</p><p class=\"MsoNormal\">Sono comunque&#160;<u>vietate</u>&#160;: Bestemmie, Insulti OFF.</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">Per quanto riguarda il sesso, sono vietate le descrizioni di sesso esplicito nelle chat di gioco, quando la situazione si fa calda tra due PG, come in tutti i film e videogiochi si andr&#224; sfumando in chiusura di giocata.</p>', '', 0, 11, 0, 27, '2022-03-16 12:33:43', 0, '2022-03-16 12:33:43', 0),
('Guida', 'main', 0, 1, '', '', 0, -1, 321, 13, '2022-03-16 11:33:08', 1, '2022-03-16 12:32:42', 1),
('Home', 'main', 0, 1, '', '', 0, -1, 288, 7, '2022-03-15 19:48:33', 1, '2022-03-16 12:25:38', 1),
('', 'title', 0, 0, 'Homepage', '', 0, 7, 0, 17, '2022-03-16 12:25:50', 0, '2022-03-16 12:25:50', 0),
('', 'text', 0, 0, '<div>Running program_</div><div>Vital sign positive check_</div><div>Body temperature rise_</div><div>Capsule Opening_</div><div>Life support disconnection_</div><div>Holographic Assistant initialization_</div><div>Messagge playack_</div><h2></h2><div><b><b><i>Ben&#160;svegliato e&#160;benvenuto&#160;nel&#160;quadrante&#160;Omega_</i></b></b></div><b><b><b><i>Io&#160;sono&#160;Persefone la tua assistente olografica di risveglio_</i></b></b></b><b><b><b><i>Sei&#160;pregato&#160;di&#160;attendere&#160;il&#160;personale&#160;medico&#160;di&#160;bordo_</i></b></b></b><b><b><b><i>Sei pregato di attenerti alle leggi ed ai regolamenti federali per il benessere della Colonia_</i></b></b></b><div><b><b><i>La&#160;Federazione&#160;ti&#160;ringrazia&#160;per&#160;l\'adesione&#160;al&#160;programma&#160;Peregrine_</i></b></b></div><div><b><b><i>la&#160;federazione&#160;conta sul&#160;tuo&#160;operato_</i></b></b><br></div><div><b><b><i>Benvenuto nella tua nuova casa_</i></b></b><b><b><i><br></i></b></b></div><div><b><b><i><br></i></b></b></div><div>End of message_</div><div>Disable Holographic Assistant_</div><div>Lighting activation_</div><div>Capsule disconnection_</div><div>Door opnening_</div><div>Medical personnel approaching_</div><div>Please Stand By_</div>', '', 0, 7, 0, 18, '2022-03-16 12:25:51', 0, '2022-03-16 12:25:51', 0),
('Ambientazione', 'main', 0, 1, '', '', 0, -1, 314, 21, '2022-03-16 12:32:01', 1, '2022-03-16 12:32:01', 1),
('', 'title', 0, 0, 'Info Luoghi', '', 0, 15, 0, 28, '2022-03-16 12:34:11', 0, '2022-03-16 12:34:11', 0);
INSERT INTO `component` (`IDElement`, `Type`, `Columns`, `VerticalOrientation`, `Content`, `ImageName`, `IsClass`, `IDParent`, `IDRoute`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('', 'text', 0, 0, '<p class=\"MsoNormal\"><b>Stazione NETE</b></p><p class=\"MsoNormal\"><b><u>Cenni Generali:</u></b></p><p class=\"MsoNormal\">Capostipite della nuova generazione di stazioni orbitali, Nete, &#232; di dimensioni ridotte rispetto le prime nove grandi stazioni della classe Talia, ma il suo concept &#232; molto diverso. Dati i pericoli della fascia esterna ancora da mappare completamente, e la scoperta di non essere soli nell&#8217;universo, Nete &#232; stata costruita al sicuro dello spazio interno federale, nei cantieri astronautici di Marte e fornita di propulsori per raggiungere il quadrante di spazio ad essa assegnata prima di posizionarsi in orbita geostazionaria.</p><p class=\"MsoNormal\">Per una lunghezza di circa 15.000 metri ed un dislocamento di 4 milioni di tonnellate la Nete pu&#242; ospitare tra abitanti e personale di manovra circa 300.000 mila persone suddivise in due ampi scafi paralleli agganciati tramite il corpo centrale chiamato &#8220;la Torre&#8221;. In cui sono alloggiati tutti i locali di servizio e docks di attracco.</p><p class=\"MsoNormal\"><b><u>Propulsione e scudo di difesa passiva:</u></b></p><p class=\"MsoNormal\">La Nete come le sue gemelle, &#232; fornita di un reattore a fusione ad Elio3 che alimenta i propulsori ad impulsi ionici che gli FTL Drive, come per le navi della flotta esso fornisce uno scudo energetico che riveste le strutture della stazione in navigazione o in caso di emergenza.</p><p class=\"MsoNormal\">Propulsione secondaria ed energia secondaria &#232; fornita dalla quattro enormi vele solari dispiegabili dalla stazione.</p><p class=\"MsoNormal\"><b><u>Gravit&#224; a bordo:</u></b></p><p class=\"MsoNormal\">La gravit&#224; a bordo viene fornita in fase di manovra da un generatore di gravitoni collegato al reattore a fusione principale. In fase geostazionari la gravit&#224; viene ottenuta grazie alla rotazione sull&#8217;asse della stazione mentre la struttura compie la sua orbita attorno all&#8217;eso-pianeta designato per la colonizzazione.</p><p class=\"MsoNormal\"><b><u>Vita a Bordo:</u></b></p><p class=\"MsoNormal\">L&#8217;alternanza giorno/notte, a differenza che sulle navi della flotta, viene data tramite il cambio di potenza luminosa agli ambienti interni della stazione, l&#8217;orario utilizzato &#232; quello standard terrestre, la temperatura viene mantenuta a 22 gradi centigradi ed al 50% di umidit&#224; in modo da donare massimo confort agli occupanti. Per tutti gli ambienti interni dei due scafi, sono stati utilizzati colori chiari per dare cos&#236;, una parvenza di spaziosit&#224;. Anche la loro disposizione intorno ad un ampia area sgombra centrale e su pi&#249; livelli costituiti da dei grandi gradoni &#232; pensata per dare il massimo effetto di benessere visivo e, cercare, di fare dimenticare agli occupanti che si trovano in una enorme lattina sparata nello spazio.</p><p class=\"MsoNormal\">I turni del personale di Bordo ( Personale tecnico, personale medico, personale di sicurezza) sono scanditi da turni giornalieri di 6 ore :</p><p class=\"MsoNormal\">07.00-13.00</p><p class=\"MsoNormal\">13.00-19.00</p><p class=\"MsoNormal\">19.00-01.00</p><p class=\"MsoNormal\">01.00-07.00</p><p class=\"MsoNormal\">Il personale ha l&#8217;obbligo di un solo turno giornaliero di servizio ed a rotazione pu&#242; concedersi due giorni completi di riposo a settimana.</p><p class=\"MsoNormal\"><b><u>Vitto ed Alloggio:</u></b></p><p class=\"MsoNormal\">la aree destinate ad alloggi e servizi sono raggruppate e distinte in modo da ottimizzare gli spazi ed facilitare la manutenzione. Ogni membro del personale di servizio ed abitante ha assegnato un bilocale posizionato in uno dei due scafi della stazione.</p><p class=\"MsoNormal\">In ognuno dei due scafi sono ubicate grandi locali adibiti a mensa, dove il personale di servizio pu&#242; mangiare gratuitamente mentre gli abitanti possono acquistare un pranzo a prezzo agevolato.</p><p class=\"MsoNormal\">Lungo le due grandi passeggiate, che attraversano i due scafi da poppa a prua, si aprono tutti i locali e le attivit&#224; private, commerciali e di intrattenimento, che rendono Nete una vera e propria citt&#224; orbitale.</p><p class=\"MsoNormal\">L&#8217;acqua, per qualunque utilizzo, viene sintetizzata, come l&#8217;aria che si respira a bordo, che, grazie ai filtri di ricircolo viene depurata dall&#8217;anidride carbonica e di nuovo arricchita per essere rimessa in circolo all&#8217;interno della stazione.</p><p class=\"MsoNormal\">Il cibo a bordo viene garantito grazie ai ponti dedicati alle coltivazioni idroponiche ed alla sintetizzazione in laboratorio di carne e pesce, identici, a livello nutrizionale e sensoriale, a quelli di allevamento.</p><p class=\"MsoNormal\"><b><u>Legge:</u></b></p><p class=\"MsoNormal\">A bordo vige la legge federale che viene fatta rispettare dal dipartimento di polizia di stazione che fa capo al procuratore di stazione ed agli agenti dell&#8217; E.B.I. di stanza sulla struttura.</p><p class=\"MsoNormal\">&#160;</p><p class=\"MsoNormal\"><b>U.E.F.S. BRECKINRIDGE</b></p><p class=\"MsoNormal\"><b><u>Cenni Generali:</u></b></p><p class=\"MsoNormal\">Ultima varata della classe Leonida (9 unit&#224; prodotte), la Brekinridge, nuova ammiraglia della flotta, lascia i cantieri astronautici di Marte 5 anni dopo la fine della guerra Bioroide e rientra nella prima generazione di navi costruite tramite retro-ingegneria sugli studi prodotti sulle navi madre nemiche catturate durante la battaglia per la riconquista di Marte. Il concetto base del progetto era la realizzazione di una vera e propria stazione da battaglia mobile capace di mantenere in sicurezza un intero settore sino all\'arrivo in caso di bisogno dei rinforzi da parte della flotta.</p><p class=\"MsoNormal\">Lunga 1500 metri per una larghezza di 300 metri nel punto pi&#249; largo dei ponti centrali, con un dislocamento di oltre 200.000 tonnellate, 12.000 uomini di equipaggio e un gruppo aereo di 200 velivoli, la fanno rientrare appieno nella categoria della Battlestar che entrano in forze nella flotta in sostituzione delle capitol ship pre guerra.</p><p class=\"MsoNormal\">&#160;<b><u>Propulsione, scudo di difesa passiva e armamento principale:</u></b></p><p class=\"MsoNormal\">La propulsione della Brekinridge &#232; affidata ad un sistema ibrido di otto motori ad impulsi ionici/FTL drive alimentati dal grande reattore a fusione alimentato con Elio3. Il sistema permette di convogliare parte della sua energia per le difese passive, ovvero la generazione di uno scudo energetico che blocca i detriti solidi che potrebbero danneggiare lo scafo nella navigazione. &#200; possibile convogliare tutta l&#8217;energia del reattore e dello scudo al sistema d&#8217;arma principale trasformando cos&#236; la Brekinridge in quello che realmente &#232;: un enorme cannone al plasma ambulante</p><p class=\"MsoNormal\">Quest&#8217; opzione permette di generare un fascio di plasma della gittata, di 50.000 metri, prima che si dissipi e di diametro pari a 100 metri capace di perforare da parte a parte un intera stazione orbitale o una piccola luna; questo per&#242; toglie tutta la potenza di propulsione della nave, e azzera lo scudo di difesa per circa 30 minuti, mantenendo solo l&#8217;energia necessaria per il sostentamento del supporto vitale.</p><p class=\"MsoNormal\">Il gruppo motori viene realizzato in quattro gondole separate, sganciabili singolarmente e discoste dallo scafo principale in modo da ottenere due risultati, spostare le possibili esplosioni lontano dall&#8217;area abitata dello scafo e in caso di collasso del reattore principale lo sgancio di tutta la sezione e l&#8217;allontanamento tramite i propulsori di manovra ad alimentazione convenzionale.</p><p class=\"MsoNormal\"><b><u>Armamento secondario:</u></b></p><p class=\"MsoNormal\">I sistemi d&#8217;arma<u>&#160;</u>offensivi della Brekinridge contano in un lanciatore multiplo per 24 missili balisitci con testata convenzionale ad alto potenziale esplosivo o nucleare per bombardamento orbitale,12 cannoni navali trinati ad impulso da 460 mm e 16 lanciatori di siluri pesanti antinave mentre la difesa &#232; affidata ad un sistema di tipo &#8220;Phalanx&#8221; a tiro rapido con ricerca radar I.F.F (identification friend or foe). automatica composto da 50 torrette, armate di cannoni ciclonici ad impulso cal.30mm e 25 razziere multiple, anti aeree da 74 mm con testata ad alto potenziale esplosivo.</p><p class=\"MsoNormal\"><b><u>Gravit&#224; a bordo:</u></b></p><p class=\"MsoNormal\">Gli ambienti della Breckinridge sono tenuti a 1G costante (la normale forza di gravit&#224; terrestre) grazie ad un generatore a gravitoni alimentato dal reattore a fusione principale. Questo significa che quando il reattore &#232; spento o avesse un calo di potenza mandando in crisi il sistema di supporto vitale la prima cosa a venire meno sarebbe la gravit&#224;, infatti, per questo motivo tutti i locali delle nave sono progettati con maniglioni sulle pareti e sui soffitti, in modo da aiutare negli spostamenti durante le fasi di emergenza a zero G.</p><p class=\"MsoNormal\"><b><u>Vita di Bordo:</u></b></p><p class=\"MsoNormal\">La crociera operativa standard di una battlestar dura un anno terrestre, 365 giorni, al termine avviene un completo cambio dell&#8217;equipaggio di bordo con i nuovi rincalzi che prenderanno parte alla crociera operativa successiva. Questo per il sistema solare interno. Per le crociere operative lungo la fascia il periodo si allunga a 730 giorni prima del cambio completo, mentre per la fascia esterna data la distanza dal sistema solare, sale a 1460 giorni prima del completo cambio.</p><p class=\"MsoNormal\">La vita a bordo viene scandita sull&#8217;orario terrestre, con luci bianche ad indicare il giorno e luci rosse soffuse ad segnalare le ore notturne, questo per rispettare i ritmi circadiani del corpo umano. I turni di servizio sono divisi in turni di guardia e di riposo che si diversificano a seconda se l&#8217;unit&#224; sia in attracco o in navigazione.</p><p class=\"MsoNormal\"><u>Turni di guardia in attracco</u>:</p><p class=\"MsoNormal\">-Diana: dalle 07.00 alle 15.00</p><p class=\"MsoNormal\">-Prima comandata: dalle 15.00 alle 23.00</p><p class=\"MsoNormal\">-Seconda comandata: dalle 23.00 alle 03.00</p><p class=\"MsoNormal\">-Diana: dalle 03.00 alle 07.00</p><p class=\"MsoNormal\">La durata dei turni in fase di attracco &#232; dovuta al minor carico di lavoro necessario per governare la nave ed alle minori attivit&#224; di volo o di addestramento, dando la possibilit&#224; all&#8217;equipaggio di avere due giorni completamente liberi alla settimana, il calcolo viene eseguito sulla settimana standard terrestre.</p><p class=\"MsoNormal\"><u>Turni di guardia in navigazione</u></p><p class=\"MsoNormal\">-Mattino: dalle 08.00 alle 13.00</p><p class=\"MsoNormal\">-Pomeriggio: dalle 13.00 alle 16.00</p><p class=\"MsoNormal\">-Primo gaettone: dalle 16.00 alle 18.00</p><p class=\"MsoNormal\">-Secondo gaettone: dalle 18.00 alle 20.00</p><p class=\"MsoNormal\">-Prima comandata: dalle 20.00 alle 00.00</p><p class=\"MsoNormal\">-Seconda comandata: dalle 00.00 alle 04.00</p><p class=\"MsoNormal\">-Diana: dalle 04.00 alle 08.00</p><p class=\"MsoNormal\">La minor durata oraria dei turni in fase di navigazione &#232; dovuta al maggior carico di lavoro necessario per mantenere funzionale ed operativa l&#8217;unit&#224;, ogni membro dell&#8217;equipaggio ha come obbligo giornaliero di svolgere un turno di guardia ed avere il resto della giornata libero per riposarsi ed addestrarsi, per questo motivo durante la fase di navigazione non esistono giornate solo dedicate al riposo.</p><p class=\"MsoNormal\"><b><u>Vitto ed Alloggio:</u></b></p><p class=\"MsoNormal\">L&#8217;aria respirabile viene fornita tramite sintetizzazione dai sistemi di supporto vitale e depurata tramite un sistema che permette la rimessa in circolo nel sistema epurata dall&#8217;anidride carbonica.</p><p class=\"MsoNormal\">La temperatura a bordo &#232; tenuta costantemente alla temperatura di 22 gradi centigradi ed ad un umidit&#224; del 50% creando cos&#236; un ambiente confortevole per tutto l&#8217;equipaggio.</p><p class=\"MsoNormal\">I crew men sono alloggiati in camerate da 20 cuccette con docce e servizi comuni di ponte, i sottoufficiali sono alloggiati in camerate da 10 cuccette con servizi e docce annesse, distribuite tra i vari ponti adibiti all&#8217;equipaggio, con sale riposo, palestre, spogliatoi e mense. Sempre sugli stessi ponti si trovano le cabine degli ufficiali composte da una stanza singola con bagno annesso. Tutti i servizi di bordo sono Unisex.</p><p class=\"MsoNormal\">Le mense preparano 36.000 pasti caldi al giorno per tutto l&#8217;equipaggio, la dieta &#232; composta principalmente di cereali, legumi, riso, scatolame (carne e verdura) , cibi liofilizzati, cibi abbattuti e surgelati ed integratori. L&#8217;acqua viene sintetizzata per tutti gli usi.</p><p class=\"MsoNormal\">Nelle sale relax sono disponibili distributori automatici di caff&#232;, bibite, cibi surgelati(preparati dalle cucine di bordo) e snack, il tutto &#232;, ovviamente, gratuito per l&#8217;equipaggio, basta posare il proprio badge identificativo nell&#8217;apposito lettore per effettuare l&#8217;erogazione registrata del prodotto.</p><p class=\"MsoNormal\"><b><u>Vestiario a Bordo:</u></b></p><p class=\"MsoNormal\">l&#8217;uniforme di servizio a bordo &#232; la Jumpsuit, tuta in tessuto sintetico, ignifugo traspirante, accompagnata dagli stivali da combattimento ed un cappello da baseball riportante nome, numero identificativo e sagoma della nave su cui si &#232; di stanza. Sul petto vi &#232; apposta la fligth Badge riportante grado, nome, cognome e gruppo sanguineo del membro dell&#8217;equipaggio. All&#8217;altezza degli omeri sono apposti il logo della U.E.F.F. e dei reparti di appartenenza.</p><p class=\"MsoNormal\"><b><u>Divieti:</u></b></p><p class=\"MsoNormal\">a bordo &#232; vietato l&#8217;uso di alcolici durante il proprio turno di guardia e l&#8217;abuso di essi nei propri turni di riposo, &#232; categoricamente vietato l&#8217;uso di droghe in qualunque momento, sono vietati atti sessuali in luoghi pubblici o comuni della nave; il fumo &#232; consentito solo nella sale relax, dove sono installati filtri adeguati nell&#8217;impianto di ricircolo dell&#8217;aria.</p><p class=\"MsoNormal\"><b><u>Gerarchia a Bordo:</u></b></p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">La gerarchia in servizio &#232; sempre rispettata, dal saluto verso i superiori al darsi del lei e chiamarsi per cognome, in tutti i locali operativi della nave, mentre nei ponti adibiti al personale fuori servizio la presa viene allentata mantenendo comunque le buone regole di educazione e convivenza e a seconda del livello di intimit&#224; tra i componenti dell&#8217;equipaggio.</p><p class=\"MsoNormal\"><br></p><p class=\"MsoNormal\"><b>Esopianeta ERACLE 101</b><br></p><p class=\"MsoNormal\">Eracle 101 &#232; un esopianeta&#160;&#160;orbitante attorno alla stella FX2358. Si tratta di un pianeta avente una massa simile a quella terrestre&#160;e che orbita attorno alla stella in 400 giorni, ad una distanza di 200 milioni di chilometri&#160;(1,35 UA). &#200; situato all\'interno della zona abitabile, anche se limite, della stella e al momento della scoperta era il pianeta extrasolare potenzialmente abitabile pi&#249; vicino alla Terra, con una distanza di soli 12 anni luce. Questo primato gli fu sottratto da un pianeta di Proxima Centauri B, che orbita attorno alla stella pi&#249; vicina al sole.</p><p>Il pianeta &#232; situato nella parte pi&#249; esterna della zona abitabile; la United Earth Federation Space Agency, di Porto Rico ad Arecibo, stima che Eracle 101 riceva il 27% della luce che la Terra riceve dal Sole, e che se il pianeta avesse la stessa atmosfera della Terra, la temperatura sulla superficie sarebbe attorno ai -40 &#176;C, adatta solo per forme di vita estremofile,.il pianeta possiede per&#242; un\'atmosfera densa facendo innalzare la temperatura sui -20 &#176;C, ed anche se priva di gas tossici &#232; ricca di anidride carbonica ,e per questo viene considerato terra-formabile.</p><p><br></p><p class=\"MsoNormal\"><b>Stazione Atmosferica ARGO</b></p><p class=\"MsoNormal\">Nell\'atmosfera di Eracle 101 galleggia silenziosa e fredda la stazione Argo.</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">Un tempo brulicante di vita ed attivit&#224;, la stazione atmosferica Argo aveva come missione principale lo studio e la terra-formazione di Eracle 101, ora &#232; un enorme struttura galleggiante tra le nuvole cariche di anidride carbonica del pianeta, sferzata dalle tempeste elettriche. I suoi reattori continuano a ronzare al minino nell\'attesa che qualcuno torni a risvegliare il gigante e donarle nuova vita ed farle riprendere la missione interrotta con la guerra Bioroide.</p><p class=\"MsoNormal\"><b><br></b></p><p class=\"MsoNormal\"><b>Relitto Nave Coloniale COMET</b></p><p class=\"MsoNormal\">Silenziosa, fredda e senza vita galleggia alla deriva, da cento anni, il possente relitto della U.E.F.C.S. Comet, Prima nave cargo civile coloniale ad arrivare nel settore Omega.</p><p class=\"MsoNormal\">Abbandonata a se stessa durante la prima ondata di invasione Bio-Roide, il suo reattore pulsa la minimo in configurazione di emergenza, la sua missione era portare tecnici e materiale per completare la colonizzazione di Eracle 101 e fondare una colonia stabile partendo dalla stazione scientifica ARGO posta nell\'atmosfera dell\'eso-pianeta.</p><p class=\"MsoNormal\">Non ostante non possa pi&#249; solcare il vuoto siderale, la sua carcassa rimane ancora solida e ricca di materiale abbandonato nelle sue fredde stive interne.</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">Le sue generosa dimensioni, 5.000 metri di lunghezza per 1.500 metri di larghezza con una stazza totale di 1 milione di tonnellate, la rendono perfetta per un recupero e riutilizzo come piccola stazione civile.</p><p class=\"MsoNormal\"><br></p>', '', 0, 15, 0, 29, '2022-03-16 12:34:11', 0, '2022-03-16 12:34:11', 0),
('', 'text', 0, 0, '<h4><p class=\"MsoNormal\">Data Attuale:&#160;2522.</p><p class=\"MsoNormal\"><b>U.E.F.</b>&#160;(United Earth Federation)</p><p class=\"MsoNormal\"><u>Data di Fondazione U.E.F</u>. :&#160;2100.</p><p class=\"MsoNormal\"><u>Capitale</u>:&#160;Conglomerato urbano della costa East degli Stati Uniti(Terra).</p><p class=\"MsoNormal\"><u>Lingua</u>:&#160;ConLang (base anglofona con introduzioni slang di tutte le lingue).</p><p class=\"MsoNormal\"><u>Vita media</u>&#160;cittadini federali:&#160;anni 100</p><p class=\"MsoNormal\"><u>Maggiore et&#224;</u>:&#160;18</p><p class=\"MsoNormal\"><u>Voto</u>:&#160;Suffragio Universale</p><p class=\"MsoNormal\"><u>Moneta</u>:&#160;Credito Federale Terrestre (detto &#8220;credito&#8221;)moneta solo digitale.</p><p class=\"MsoNormal\"><u>Religione</u>:&#160;Stato Laico (libert&#224; di culto).</p><p class=\"MsoNormal\"><u>Forma di Governo</u>:&#160;Repubblica Federale.</p><p class=\"MsoNormal\"><u>Presidente</u>:&#160;Segretario Generale.</p><p class=\"MsoNormal\"><u>Aderenti</u>:&#160;Terra, Luna, Marte, Cintura asteroidale(Planetoide Cerere), 9 stazioni orbitali civili (Talia, Calliope, Tersicore, Urania, Melpomene, Erato, Clio, Euterpe, Polimnia), Colonie extra cintura e 7 stazioni Extra Cintura (Nete, Mese, Ipate, Telsione, Melete, Aede ed Arche).</p><p class=\"MsoNormal\"><u>Organo Esecutivo</u>:&#160;Consiglio di sicurezza (ogni pianeta o stazione invia una percentuale di rappresentanti a seconda della popolazione residente, attualmente la maggioranza dei seggi &#232; ricoperta dal pianeta terra, seguito da Marte, e dalle stazioni orbitali unite, fanalino di coda la Luna e la Cintura asteroidale). I rappresentanti vengono eletti in forma diretta dai cittadini delle nazioni del pianeta Terra, dai cittadini delle stazioni orbitali e delle colonie.</p><p class=\"MsoNormal\"><u>Forze dell&#8217;ordine</u>:&#160;le forze dell&#8217;ordine federali sono un organo di controllo che fa capo al pianeta Terra ed ha giurisdizione su ogni pianeta o stazione della federazione ed ha potere sulle forze di polizia locali, planetarie o di settore e si occupa dei crimini maggiori, viene chiamato E.B.I.(Earth Bureau of Investigation).Lo E.B.I fa capo al Procuratore Generale di Pianeta.</p><p class=\"MsoNormal\">Sotto lo E.B.I. si trovano i dipartimenti di polizia di pianeta e stazione che si occupano della normale gestione dell&#8217;ordine pubblico e sono divise in quattro squadre: Intelligence (investigativa), Forensic (scientifica), Patrol (pattuglia) e S.w.a.t.(squadra intervento speciale).</p><p class=\"MsoNormal\">Quando le colonie sono piccole o di neo formazione, e quindi un dipartimento intero di forze di polizia sarebbe sovrastimato, dopo un primo periodo di giurisdizione sotto l&#8217;egida della flotta, vengono instituite squadre di sceriffi federali chiamati Marshall addetti al mantenimento dell&#8217;ordine pubblico.</p><p class=\"MsoNormal\"><u>Sistema Giudiziario</u>:&#160;esistono due Corti, La Corte Suprema (9 giudici eletti a vita dal consiglio di sicurezza) che giudica su casi inerenti alla costituzione della Federazione, si trova sulla Terra nel Conglomerato Urbano della Costa Est, e le Corti Federali che si occupano delle cause civili e penali e sono diramate in tutta la federazione. Come sistema svuota carceri vengono applicate conversioni di pena con il servizio coatto presso la Flotta. per il periodo commutato all\'imputato dai Giudici federali.</p><p class=\"MsoNormal\"><u>Sistema Sanitario</u>:&#160;Il sistema sanitario Federale &#232; misto, Pubblico e gratuito per tutti gli impiegati federali e i coloni che decidono di trasferirsi nei pianeti di nuova colonizzazione oltre la cintura ed invece privato per i civili che devono fare affidamento e potersi permettere un&#8217;assicurazione sanitaria. Questo sistema sprona l&#8217;arruolamento o l&#8217;impegno nella Pubblica Amministrazione della Federazione e l&#8217;esodo dalla terra e dalle stazioni ormai sovraffollate ed al collasso per cercare la fortuna nella cintura o oltre ad essa.</p><p class=\"MsoNormal\"><u>Forze Armate</u>:&#160;Per sfruttare al meglio le forze in campo e i fondi a disposizione la U.E.F. fond&#242; la flotta federale. Scopi della Flotta sono la protezione dello spazio federale e la proiezione di forze nei sistemi che compongono la federazione, oltre alla protezioni delle spedizioni atte a colonizzare i nuovi eso-pianeti considerati abitabili dall&#8217;ente spaziale federale. All&#8217;interno di essa si trovano le varie specialit&#224; che la compongono come il personale di plancia, i piloti dei gruppi volo imbarcati, i genieri, i combat medic, le truppe da sbarco orbitali ed il famigerato &#8220;Grey Squadron&#8221;, le forze speciali della federazione, che raccolgono i migliori elementi di tutte le specialit&#224;.</p><p class=\"MsoNormal\">L&#8217;accademia della Flotta, i cui corsi di formazione ed addestramento durano 3 anni, si trova nel conglomerato urbano della Costa Ovest degli Stati Uniti, che unisce gli antichi centri urbani di Los Angeles, San Francisco e San Diego ed &#232; collegata direttamente con un ascensore orbitale all&#8217;anello difensivo e comando orbitale della flotta, la stazione da battaglia ARES, centro nevralgico e logistico della U.E.F.F.</p><p class=\"MsoNormal\"><u>Space Cowboy e Mercs:&#160;</u>Dato che lo spazio &#232; enorme e la federazione non pu&#242; essere sempre presente ovunque, il consiglio di sicurezza cre&#242; un centro di addestramento sulla stazione permanente Lunare, dove formare operatori privati con lo scopo di creare un circuito di personale civile brevettato dal governo che svolgesse in autonomia, o riunendosi in piccoli gruppi, i lavori che andavano ad appesantire il sistema di pubblica sicurezza, come la caccia ai latitanti e la protezione puntuale di strutture private coloniali.</p><p class=\"MsoNormal\"><u>Correnti politiche ed ideologiche:</u></p><p class=\"MsoNormal\">Il sindacato: &#8220;Synd&#8221;&#160;gruppo malavitoso che si muove nel sottobosco dei lavoratori delle stazioni avanzate e della cintura asteroidale, tra le loro mani passa tutto ci&#242; che &#232; legalmente vietato dalla legge, gioco d&#8217;azzardo, droghe, scommesse su combattimenti e gare clandestine e taglieggiamento dei coloni.</p><p class=\"MsoNormal\">Fronte coloniale indipendentista:&#160;&#8220;F.C.I.&#8221;: Gruppo terroristico che reclama l&#8217;indipendenza delle colonie rispetto all&#8217;egemonia terrestre con atti terroristici e proteste violente, molti si domandano se sia effettivamente tutta farina del loro sacco o la U.E.F. ci metta il carico giocando alla &#8220;strategia del terrore&#8221;.</p><p class=\"MsoNormal\">&#160;<u>Il programma Peregrine:</u></p><p class=\"MsoNormal\">Nel primo ventennio del ventunesimo secolo la terra ormai &#232; al collasso, con nove miliardi di abitanti e un consumo di materie prime che svuota in sei mesi le riserve di un anno prodotte dal pianeta.</p><p class=\"MsoNormal\">la soluzione creare un organo superiore che controllasse lo sviluppo umano, da qui venne l\'idea embrionale della federazione terrestre, in modo da concentrare il potere esecutivo ad un unico organo che potesse disporre al meglio delle poche risorse della terra.</p><p class=\"MsoNormal\">&#160;Purtroppo non ostante il razionamento delle materie prime, cibo e acqua su scala mondiale, unito ad un ferreo controllo sulle nascite, ormai il pianeta ha superato il punto di non ritorno e la popolazione non si adatta alle nuove ristrettezze dopo secoli di utilizzo sfrenato delle risorse e di consumismo senza regole.</p><p class=\"MsoNormal\">scoppiano le prime rivolte che investono i grandi conglomerati urbani, questo fa decidere per l\'unica via possibile, l\'esodo.</p><p class=\"MsoNormal\">Viene programmata la costruzione di 9 stazioni orbitali intorno alla terra, abbastanza grandi da contenere mezzo miliardo di persone l\'una, ma la costruzione non procede con velocit&#224; e nel mentre la crescita della popolazione va ancora aumentando.</p><p class=\"MsoNormal\">Viene quindi lanciata la&#160; colonizzazione di Marte, il lontano pianeta rosso, ma il rpimo insediamento sotterraneo di Valles Marineris ancora non basta, verr&#224; cominciata al creazione della magnetosfera del pianeta e della sua terraformazione, mentre i due principali crateri del pianeta vengono coperti da cupole e si comincia la costruzione delle due grandi citt&#224; Dawn e Dusk City.</p><p class=\"MsoNormal\">Ci vorranno 300 anni perch&#232; la superficie del pianeta rosso possa ospitare la vita, troppo tempo, per la stessa colonia che continua a crescere.</p><p class=\"MsoNormal\">Neppure lo sfruttamento della fascia con le sue risorse &#232; sufficiente per la domanda ormai esponenziale di esse.</p><p class=\"MsoNormal\">in questa situazione l&#8217;intento del programma &#8220;Peregrine&#8221; &#232; alleggerire il sovraccarico umano che investe la terra, i pianeti del sistema e le stazioni orbitali, ormai prossime al collasso per una sempre maggiore richiesta di risorse dalla popolazione ormai in esponenziale aumento.</p><p class=\"MsoNormal\">Lo studio dei pianeti oltre la fascia ha permesso l&#8217;identificazione di alcuni di loro come abitabili o con atmosfera considerata adatta alla terra-formazione e quindi capaci di ospitare la vita sulla superficie di essi.</p><p class=\"MsoNormal\">I futuri Coloni volontari vengono sottoposti ad una selezione psico-attitudinale sui loro pianeti o strutture di origine, per poi una volta scelti, essere spediti al centro di addestramento di Marte, dove stazioneranno un anno per specializzarsi prima di essere messi in soma-sonno e spediti oltre la fascia ai loro pianeti di destinazione.</p><p class=\"MsoNormal\">I pianeti considerati abitabili oltre la fascia sono in media distanti 12 anni luce dal sistema solare ed Il viaggio ha durata di 12 mesi e viene percorso a velocit&#224; luce.</p><p class=\"MsoNormal\">Al loro arrivo i futuri coloni verranno svegliati dal loro sonno di stasi ed una volta che il fisico si &#232; ripreso dal lungo periodo in soma sonno sono pronti a cominciare la loro nuova vita oltre la fascia.</p><p class=\"MsoNormal\">Non &#232; previsto ritorno dal programma Peregrine.</p><p class=\"MsoNormal\"><u>Cenni Storici:</u></p><p class=\"MsoNormal\"><b><u>2050</u></b>:&#160;primo insediamento umano stabile sulla Luna e messa appunto dei motori a propulsione nucleare per astronavi. Inizio della stesura della costituzione della Federazione e promulgazione di tutti i dispositivi di legge per la sua creazione, questo per fare fronte unito contro il collasso sociale e naturale che la terra st&#224; per affrontare.</p><p class=\"MsoNormal\"><b><u>2100</u></b>:&#160;sbarco su Marte, inizio costruzione delle prime 3 stazioni orbitali programmate e fondazione Ufficiale della Federazione e creazione della U.E.F.F.</p><p class=\"MsoNormal\"><b><u>2150</u></b>:&#160;prima colonia stabile su Marte (valle Marineris)ed inizio della sua colonizzazione, completamento delle prime 3 stazioni (Talia, Calliope, Tersicore) ed inizio cantieri orbitali delle successive 3 in programma; Messa a punto dei motori Ionici ad impulsi per astronavi.</p><p class=\"MsoNormal\"><b><u>2200</u></b>:&#160;Marte continua nella sua colonizzazione, le due grandi citt&#224; cominciano ad essere piene di vita (Dawn City, Dusk City) protette dalle cupole innalzate ai bordi dei crateri che le ospitano, inizio terra-formazione del pianeta; fine dei lavori per le 3 nuove stazioni orbitali (Urania, Melpomene, Erato), inizio dei cantieri orbitali per le ultime tre stazioni orbitali programmate. Inizio programma di ricerca guida F.T.L. (Faster Than Light)</p><p class=\"MsoNormal\"><b><u>2250</u></b>:&#160;Stazione Stabile sul pianeta nano Cerere e inizio sfruttamento minerario della cintura asteroidale, prosegue la terra-formazione di Marte, Costruzione su Ganimede, IO ed Europa di grandi installazioni abitative, produttive e di villeggiatura, fine delle ultime 3 stazioni orbitali programmate (Clio, Euterpe, Polimnia). Primi prototipi motori a guida F.T.L.</p><p class=\"MsoNormal\"><b><u>2300:</u></b>&#160;fine della terra-formazione di Marte, smontaggio cupole cittadine e inizio colonizzazione della superficie. Ampliamento delle stazioni minerarie della cintura su Veste, Pallade e Igea. Prima ricognizione della fascia esterna grazie alla messa a punto del sistema di guida F.T.L. rimuovendo di fatto l&#8217;ultimo ostacolo per la totale colonizzazione spaziale da parte dell&#8217;uomo, nascita del progetto &#8220;Peregrine&#8221;.</p><p class=\"MsoNormal\"><b><u>2350:</u></b>&#160;catalogazione della fascia esterna in quadranti e settori; inizio della colonizzazione con la creazione delle stazioni di settore in prossimit&#224; degli eso-pianeti capaci di ospitare la vita, costruzione delle prime strutture stabili sulle superfici, inizio di trasferimento primi coloni sugli eso-pianeti. Scoperta di antichi manufatti di origine aliena, la certezza dell&#8217;umanit&#224; di essere sola nell&#8217;universo viene meno.</p><p class=\"MsoNormal\"><b><u>2400:</u></b>&#160;scoperta della &#8220;breccia dell&#8217;aquila&#8221; nel quadrante Omega, sembra dai primi studi che si tratti di un worm hole stabile, costruzione della stazione di ricerca e controllo atmosferica Argo su Eracle 101, spedizione della prima nave coloniale Comet nel quadrante, ed invio delle prime sonde oltre la breccia. Uscita dalla breccia dell&#8217;acquila della flotta Bioroide, abbandono della stazione Argo, distruzione delle navi di settore compresa la grande nave Coloniale Comet che viene abbandonata dal personale e lasciata al suo destino; la fascia esterna cade in mano al misterioso nemico alieno senza troppa difficolta, la cintura viene evacuata, cadono nell&#8217;ordine: Cerere, Pallade e Igea, taglio di tutte le forniture minerarie dalla cintura, mobilitazione di tutta la U.E.F.F., coscrizione obbligatoria di tutti gli uomini e donne abili, Scoppio ufficiale della guerra Bioroide.</p><p class=\"MsoNormal\"><b><u>2450</u></b>:&#160;la Federazione si trova schiacciata da un nemico inarrestabile che porta la caduta del settore di Giove e l&#8217;abbandono delle colonie di Ganimede, Io ed Europa, assedio e caduta di Marte, nascita della resistenza marziana e di &#8220;Radio free Mars&#8221;, l&#8217;emittente con cui la Federazione riesce ad organizzare i superstiti&#160; delle forze armate federali, di polizia e civili, per la guerriglia sulla superficie arroccandosi nella vecchia colonia sotterranea di Valles Marineris. Ormai la Fedrazione &#232; composta solo dalla Terra, dalle 9 stazioni orbitali intorno ad essa e dalla colonia lunare, su cui si ammassano le truppe federali per riorganizzarsi dopo la caduta di Marte e la perdita dei suoi cantieri astronautici.</p><p class=\"MsoNormal\">Battaglia di Marte, ovvero l\'offensiva Umana contro la flotta Bioroide . La flotta bioroide viene affrontata sia nello spazio che sulla superficie con il dispiegamento di tutte le forze rimanenti a disposizione della Federazione, la flotta umana affronta un nemico con un rapporto di 10 a 1, ma grazie al sacrificio di molti equipaggi e soldati la flotta riesce a spezzare la linea nemica e riconquistare il pianeta liberandolo.</p><p class=\"MsoNormal\">La flotta Bioroide si ritira per arroccarsi lungo la fascia, ma il comando terrestre, nella figura dell\'Ammiragglio Nicole Breckinridge, avendolo previsto, fa trovare al nemico un ulteriore sezione della flotta ad attenderlo, scoppia la battaglia di Cerere; 500 navi, recuperate dalla flotta in disarmo e cariche di personale proveniente dalle prigioni federali, al comando del giovane capitano Nathaniel Brookes&#160; e del capitano Jhonahtan Wade riesce a rallentare il nemico sino all\'arrivo del resto della flotta da Marte.</p><p class=\"MsoNormal\"><u>2492:&#160;</u>La flotta Bioroide &#232; distrutta, la grande astronave Madre galleggia in frantumi nella fascia, le ultime unit&#224; nemiche rimaste si ritirano verso la breccia,&#160; inseguite dalla flotta. Marte, le sue lune e la Fascia ne escono a pezzi, l\'intera terra formazione&#160; del pianeta rosso &#232; stata compromessa e si tenta di ripristinarla, le stazioni estrattive su Cerere, Pallade e sugli altri planetoidi sono da ricostruire. Le perdite umane ammontano a un miliardo di vite spezzate, e quattro milioni di dispersi. Dalla guerra emerge la figura dell\'ammiraglio Breckinridge che sale al seggio del segretariato generale.</p><p class=\"MsoNormal\"><b><u>2522</u></b>: La guerra ormai &#232; finita da un trentennio, la federazione &#232; ridotta al fantasma di se stessa e trovandosi con la maggior parte dello spazio vitale federale da ricostruire e con le risorse quasi azzerate il consiglio di sicurezza vota all\'unanimit&#224; il programma peregrine e l\'esodo forzato verso i quadranti esterni fascia con la speranza di trovare nuove risorse e nuovo spazio vitale dove spostare l\'ondata di profughi e disperati creati da 100 anni di guerra.<br></p><p class=\"MsoNormal\">Vengono spedite le nuove stazioni Arca ( Nete,&#160;Mese, Ipate, Telsione, Melete, Aede, Arche) con la capienza di 300.000 esseri umani l\'una nei settori di confine dello spazio federale&#160;scortate dalle battlestar della flotta con la speranza di trovare nuove case per tutti.</p><p class=\"MsoNormal\"><b>Vita nella frontiera:</b></p><p class=\"MsoNormal\">la vita nella frontiera non &#232; di certo fatta di comodit&#224; e molti fronzoli, quelle sono per la Terra e le nove stazioni orbitanti intorno ad essa , gi&#224; dalla stazione permanete sulla Luna le cose cambiano, la vita diventa sempre pi&#249; spartana ed essenziale via via che ci si allontana dalla terra andando verso la fascia asteroidale di confine.</p><p class=\"MsoNormal\">L&#8217;indumento pi&#249; usato nella frontiera sono le jump-suit, resistenti capi da lavoro protettivi, in abbinata a stivaletti tecnici e guanti rinforzati, anche nel tempo libero gli indumenti pi&#249; usati sono capi semplici e resistenti, pantaloni cargo, magliette, giacche di sinto-pelle o tecniche e scarpe robuste vanno per la maggiore, per le serate mondane per quando si cerchi una minima eleganza gli indumenti rimangono semplici, lineari e minimalisti.</p><p class=\"MsoNormal\">Il cibo della frontiera risente delle contaminazioni culturali di tutto il genere umano, creando una cucina fusion universale, mescolando e integrando sapori di tutti i tipi; non &#232; difficile che lo stesso locale possa offrire nello stesso men&#249; pi&#249; piatti provenienti da diversi cluster culturali.</p><p class=\"MsoNormal\"></p><p class=\"MsoNormal\">I moduli abitativi delle stazioni di frontiera come la Nete o delle stazioni terra-formanti come la Argo sono dei minuscoli bilocali con una camera da letto, un bagno con acqua razionata giornaliera e una minuscola zona giorno con angolo cottura ad induzione e forno a microonde; nelle navette&#160; e nelle astronavi gli spazi delle cabine sono ancora pi&#249; claustrofobici e minimali.</p></h4>', '', 0, 21, 0, 23, '2022-03-16 12:32:01', 0, '2022-03-16 12:32:01', 0),
('BackendHompage', 'main', 0, 1, '', '', 0, -1, 287, 30, '2022-03-16 12:35:12', 1, '2022-03-16 20:40:42', 1),
('', 'text', 0, 0, 'This is the backend homepage', '', 0, 30, 0, 47, '2022-03-16 20:40:42', 0, '2022-03-16 20:40:42', 0),
('', 'image', 0, 0, './img/pages/sfondo.png', 'sfondo.png', 0, 30, 0, 48, '2022-03-16 20:41:11', 0, '2022-03-16 20:41:11', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `equip`
--

DROP TABLE IF EXISTS `equip`;
CREATE TABLE IF NOT EXISTS `equip` (
  `Name` varchar(255) NOT NULL,
  `Icon` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Price` float NOT NULL,
  `Size` int(11) NOT NULL,
  `IDType` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=90 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `equip`
--

INSERT INTO `equip` (`Name`, `Icon`, `Description`, `Price`, `Size`, `IDType`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Exo Rover 2x2', './img/equipment/All Terrain Rover 2x2.jpg', 'Moto da esplorazione, equipaggio 1, velocit&#224; massima 80km/h, non fornisce alcuna protezione al pilota .', 2500, 0, 4, 1, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Velivolo di prova', './img/equipment/equip-70[1].png', 'null', 100, 0, 0, 2, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Bulletproof Vest', './img/equipment/Bullettproof vest.jpg', 'Corpetto balistico in fibra di Kevlar e piastre di Ceramite.<div>Protegge solamente la zona del torso dell\'operatore</div><div>Assorbimento danno: 15</div>', 300, 0, 3, 3, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Arma di prova', './img/equipment/equip-12[1].png', 'null', 100, 0, 0, 4, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Credit Chip', './img/equipment/Credit Chip.jpg', 'Chip di credito attivabile solo con i dati biometrici del possessore<div><br></div>', 0, 0, 1, 5, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Exo Rover 4x4', './img/equipment/All Terrain Rover 4x4.jpg', 'Rover da esplorazione, equipaggio 3, velocit&#224; massima 90 km/h, non fornisce protezione a pilota e passeggeri', 5000, 0, 4, 6, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('ID Badge', './img/equipment/ID Badge.jpg', 'carda identificativa personale, contiene i dati anagrafici del possessore e sua storia clinica, presenta sul fronte una fotografia del possessore.', 0, 0, 1, 7, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Assault Rifle ', './img/equipment/Assault Rifle.jpg', '<p class=MsoNormal>Tipologia: Fucile d\'assalto a rotaia elettromagnetica</p>&#10;&#10;<p class=MsoNormal>Gittata: 60/120/240</p>&#10;&#10;<p class=MsoNormal>Cadenza di fuoco:1/3</p>&#10;&#10;<p class=MsoNormal>Caricatore: 30</p>&#10;&#10;<p class=MsoNormal>Danno: 15</p>&#10;&#10;<p class=MsoNormal>Note: Sistema Integrato di puntamento olografico&#160;</p>', 500, 0, 2, 8, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Designed Marksman Rifle', './img/equipment/DMR.jpg', '<p class=MsoNormal>Tipologia: fucile di precisione a rotaia elettromagnetica</p>&#10;&#10;<p class=MsoNormal>Gittata: 125/250/500</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: 1</p>&#10;&#10;<p class=MsoNormal>Caricatore: 15</p>&#10;&#10;<p class=MsoNormal>Danno: 20</p>&#10;&#10;<p class=MsoNormal>Note: sistema di ingrandimento e puntamento integrato&#160;</p>', 700, 0, 2, 9, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Anti Material Rifle', './img/equipment/Anti Material Rifle.jpg', '<p class=MsoNormal>Tipologia:&#160; Fucile anti materiale a rotaia elettromagentica</p>&#10;&#10;<p class=MsoNormal>Gittata: 250/500/1000</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: 1</p>&#10;&#10;<p class=MsoNormal>Caricatore: 3</p>&#10;&#10;<p class=MsoNormal>Danno: 30</p>&#10;&#10;<p class=MsoNormal>Note: sistema di puntamento e ingrandimento integrato&#160;</p>', 900, 0, 2, 10, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Shotgun', './img/equipment/Shotgun.jpg', '<p class=MsoNormal>Tipologia: fucile a pompa a rotaia elettromagnetica</p>&#10;&#10;<p class=MsoNormal>Gittata: 30/60/120</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: 1</p>&#10;&#10;<p class=MsoNormal>Caricatore: 8</p>&#10;&#10;<p class=MsoNormal>Danno: 20/15/10</p>&#10;&#10;<p class=MsoNormal>Note: sistema olografico di puntamento integrato&#160;</p>', 400, 0, 2, 11, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Shoting rifle', './img/equipment/Crusher.jpg', '<p class=MsoNormal>Tipologia: fucile sovrapposto a rotaia elettromagnetica</p>&#10;&#10;<p class=MsoNormal>Gittata: 30/60</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco:1/2</p>&#10;&#10;<p class=MsoNormal>Caricatore: 2</p>&#10;&#10;<p class=MsoNormal>Danno: 40/20</p>&#10;&#10;<p class=MsoNormal>Note: sistema di puntamento olografico integrato</p>', 400, 0, 2, 12, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Sub machine gun', './img/equipment/SMG.jpg', '<p class=MsoNormal>Tipologia: Mitraglietta a rotaia elettromagnetica</p>&#10;&#10;<p class=MsoNormal>Gittata: 30/60/120</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: 1/3</p>&#10;&#10;<p class=MsoNormal>Caricatore: 30</p>&#10;&#10;<p class=MsoNormal>Danno: 12</p>&#10;&#10;<p class=MsoNormal>Note: sistema di puntamento olografico integrato&#160;</p>', 450, 0, 2, 13, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Side Arm', './img/equipment/Hand Gun.jpg', '<p class=MsoNormal>Tipologia: Pistola automatica a rotaia elettromagnetica&#160;</p>&#10;&#10;<p class=MsoNormal>Gittata: 30/60/120</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: 1/2</p>&#10;&#10;<p class=MsoNormal>Caricatore: 15</p>&#10;&#10;<p class=MsoNormal>Danno: 12</p>&#10;&#10;<p class=MsoNormal>Note: sistema di puntamento olografico integrato</p>', 200, 0, 2, 14, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Revolver', './img/equipment/Revolver.jpg', '<p class=MsoNormal>Tipologia: Revolver a rotaia elettromagnetica</p>&#10;&#10;<p class=MsoNormal>Gittata:&#160; 30/60/120</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: 1</p>&#10;&#10;<p class=MsoNormal>Caricatore: 6</p>&#10;&#10;<p class=MsoNormal>Danno: 24</p>&#10;&#10;<p class=MsoNormal>Note: sistema di puntamento olografico integrato&#160;</p>', 300, 0, 2, 15, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Tamahawk', './img/equipment/Tamahak.png', '<p class=MsoNormal>Tipologia: Ascia da combattimento&#160;</p>&#10;&#10;<p class=MsoNormal>Gittata: n/a</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: n/a</p>&#10;&#10;<p class=MsoNormal>Caricatore: n/a</p>&#10;&#10;<p class=MsoNormal>Danno: Forza +24</p>&#10;&#10;<p class=MsoNormal>Note: n/a</p>', 250, 0, 2, 16, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Combat Knife', './img/equipment/Combat Knife.jpg', '<p class=MsoNormal>Tipologia: Coltello da combattimento</p>&#10;&#10;<p class=MsoNormal>Gittata: n/a</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: n/a</p>&#10;&#10;<p class=MsoNormal>Caricatore: n/a</p>&#10;&#10;<p class=MsoNormal>Danno: Forza+12</p>&#10;&#10;<p class=MsoNormal>Note: n/a</p>', 150, 0, 2, 17, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Multivisor Helmet', './img/equipment/Multivisor Helmet.jpg', 'Elmetto in ceramite imbottito con gel balisitco, protegge solo la testa dell\'operatore.<div>Assorbimento danno : 15</div><div><br></div><div>Note: sistema di visione notturna e termica integrati</div>', 300, 0, 3, 18, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Combat suit', './img/equipment/Combat  Suit.jpg', 'Suite da combattimento in piastre di ceramite su sottotuta in fibrato di Kevlar, protegge l\'intero corpo dell\'operatore e lo&#160; isola dall\'ambiente esterno ma non &#232; studiata per resistere al vuoto cosmico.<div>Assorbimento danno: 20</div>', 600, 0, 3, 19, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Void Suit', './img/equipment/Void Suit.jpg', 'suite da esplorazione in ceramite su tuta in fibrato di kevlar, protegge tutto il corpo dell\'operatore, lo isola dall\'ambiente esterno ed &#232; progettata per affrontare la pressione del vuoto cosmico.<div>Assorbimento danno: 15</div><div>Note: riserva d\'aria utile per 5 ore, jet pack ad aria compressa integrati, faretti led ad alta intensit&#224; integrati nel casco.</div>', 900, 0, 3, 20, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Pilot Suit', './img/equipment/Pilot Suit.jpg', 'Combinazione di volo rinforzata da innesti di Kevlar e ceramite che protegge l\'intero corpo dell\'operatore, isolandolo dall\'ambiente esterno e proteggendolo dalla pressione del vuoto cosmico.<div>Assorbimento danno 12</div><div>Note: la tuta si interconnette con il sistema di supporto vitale della navetta,&#160; ha un autonomia di emergenza di 2.5 ore da quando viene disconnessa dai sistemi della navetta.</div>', 300, 0, 3, 21, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Azmat Suit', './img/equipment/Hazmat Suit.jpg', 'suit NBC (nucleare, chimica, batteriologica) che protegge l\'interno corpo dell\'operatore e lo isola dall\'ambiente esterno, non da protezione balistica.', 250, 0, 3, 22, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Goliath Pilot Suit', './img/equipment/Golitah Pilot Suit.jpg', 'suit protettiva in fibrato di kevalr per i piloti di Goliath , isola l\'operatore dall\'ambiente esterno ma non &#232; progettata per resistere alla pressione del vuoto cosmico.<div>Assorbimento danno: 12</div>', 300, 0, 3, 23, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Plasma Lighter', './img/equipment/Plasma Lighter.jpg', 'accendino al plasma', 50, 0, 1, 24, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Holo Phone', './img/equipment/Holo-Phone.jpg', 'smart phone in polimero, consente: chiamate, video chiamate, connessione dati, registrazione video ed audio, fotografie in alta risoluzione.', 200, 0, 1, 25, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Data Card', './img/equipment/Data Card.jpg', 'Memory stick per data pad, chiave di memoria capace di contenere 10 therabyte di memoria.', 25, 0, 1, 26, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Holo Watch', './img/equipment/Holo-Watch.jpg', 'orologio da polso olografico, consente olo chiamate, trasmissione dati, connessione con la rete locale, registrazione video ed audio', 300, 0, 1, 27, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Data Pad', './img/equipment/Data Pad.jpg', 'data pad trasportabile, protetto da polimero balistico ed ad elevata capacit&#224; di calcolo, memoria di 80 TheraByte', 500, 0, 1, 28, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Arm Pad', './img/equipment/Arm-Pad.jpg', 'Data pad da braccio, portabile in stand alone o montato su suite, interfacciabile con i sistemi delle tute , comunicazione, trasmissione dati,registrazioni video ed audio, dati ambientali, altitudine, pressione, posizione geo-localizzata di altri arm pad sincronizzati a quello dell\'operatore', 700, 0, 1, 29, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Persefone', './img/equipment/Olographic Assistant.jpg', 'assistente olografica, installabile su tutti i device elettronici in commercio, attivabile tramite comandi vocali.', 500, 0, 1, 30, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('IR Googles', './img/equipment/NVG-IR goggles.jpg', 'Sistema di visione ad intensificazione di luce ed infrarosso&#160;', 200, 0, 1, 31, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Telemetric Binoculars', './img/equipment/Binocolo Telemetrico.jpg', 'Binocoli telemetrici digitali, distanza di utilizzo 1500 metri, fornisce tutti i dati su distanza del bersaglio e correzione di tiro, possiede la modalit&#224; visione notturna e termica, fornito con piccolo treppiede dedicato.', 700, 0, 1, 32, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Flare', './img/equipment/Flare.jpg', '<p class=MsoNormal>Bengala con led ad alta intensit&#224;, raggio di illuminazione&#10;30 metri, durata 5 minuti, uso singolo</p>', 25, 0, 1, 33, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Light Stick', './img/equipment/Light Stick.jpg', 'set di 50 micro light sitck chimiche, producono un soffuso bagliore (colore a scelta tra rosso, verde, giallo, bianco, ir)&#160; per la durata di 12h,, uso singolo', 50, 0, 1, 34, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('IFAK', './img/equipment/IFAK.jpg', 'Kit medico personale, contiene, una combat action turniquet, una benda auto-compressiva, un tubetto di medi-gel, una dose di anestetico in fiala auto-iniettante, uso singolo', 100, 0, 1, 35, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('IFRK', './img/equipment/IFRK.jpg', 'kit di riparazione di emergenza individuale, contiene un piccolo rotolo di nastro telato rinforzato, un tubetto di colla ad asciugatura rapida, set di 1 toppa rinforzata in fibrato di kevlar autoadesiva, uso singolo', 100, 0, 1, 36, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('MRE', './img/equipment/Field Food Ration.jpg', 'Razione da campo contenete un pasto completo, disponibile con diverse tipologie di men&#249;, uso singolo', 20, 0, 1, 37, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Poncho Termo-ottico', './img/equipment/Poncho Termo-ottico.jpg', 'Pocho termo ottico che permette una parziale schermatura visiva e termica dell\'operatore, ottimale in posizione ferma e parzialmente nascosto, durata schermatura 3 turni, 1 turno per attivazione, 1 turno per disattivazione, indossabile sopra protezioni e suit.', 900, 0, 1, 38, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Jet-Pack', './img/equipment/JetPack.png', 'Jet-pack individuale, permette lunghi balzi, o atterraggi (massimo 9 metri ad utilizzo), non permette il volo.<div>Numero massimo di utilizzi consecutivi 3. indossabile sopra suit e protezioni.</div>', 950, 0, 1, 39, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Oniscanner', './img/equipment/Omni scanner.jpg', 'Scanner medico-scientifico, capace di analizzare sostanze biologiche e sintetiche, intensit&#224; e tipologia di radiazioni, condizioni ambientali, protetto da case balistico.', 700, 0, 1, 40, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Emergency Distress Beacon', './img/equipment/Emergency Distress Beacon.jpg', 'radiofaro di emergenza, agganciabile a caschi e suit, invia un messaggio di emergenza pre registrato a banda larga, fornito di un led ad alta intensit&#224; per la localizzazione visiva.', 60, 0, 1, 41, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Medic Backpack', './img/equipment/Medic Backpack.jpg', 'zaino medico contenente tutto il necessario per gestire un emergenza medica sul campo per la stabilizzazione del paziente.<div>Contiene: 5 combat application turniquet, 5 bende auto-compressive, 5 dosi di anestetico in fiale auto-iniettanti, 5 flaconi di medigel, 5 flebloclisi con soluzione fisiologica,5 pinzatrici chirurgiche, 5 set di ferri chirurgici, 5 kit di ventilazione, 5 kit per intubaggio, 1 defibrillatore automatico.</div>', 900, 0, 1, 42, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('PRC 2050', './img/equipment/Comms Device.jpg', 'Radio a onde lunghe/corte ed ad alta frequenza, utilizzabile in stand alone o connessa ai sistemi delle suit.<div>100 canali selezionabili, gestisce due canali contemporaneamente (intra team-outra team),&#160;<span>non trasmette su canali criptati.</span></div>', 450, 0, 1, 43, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Bio-Hazard Container', './img/equipment/Bio-Hazard Container.jpg', 'piccolo contenitore, in polimero e vetro balistico, con sistema auto-sigillante alla chiusura, pensato per il trasporto e lo stoccaggio di campioni biologici potenzialmente pericolosi', 50, 0, 1, 44, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Tactical Load Bearing', './img/equipment/Tactical Load Bearing.jpg', 'sistema modulare di gibernaggio tattico per avere sempre tutto il proprio equipaggiamento a portata di mano, indossabile sopra protezioni e suit', 600, 0, 1, 45, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Holster', './img/equipment/Fondina Pistola.jpg', 'fondina pensata per il trasporto di pistole e revolver, siano esse portate alla cintura, sulla coscia e sul fianco.', 60, 0, 1, 46, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Knife Pouch', './img/equipment/Fondina Coltello.jpg', 'fondina per il trasposto e lo stoccaggio di coltelli da combattimento, agganciabile alla cintura o alla caviglia, compatibile con i sistemi di gibernaggio tattico.', 30, 0, 1, 47, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('3 day Backpack', './img/equipment/Backpack.jpg', 'Zaino in fibrato di kevlar, capacit&#224; di carico 45 litri, pu&#242; contenere equipaggiamento personale per un escursione d 3 giorni', 65, 0, 1, 48, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Duffel Bag', './img/equipment/Duffel Bag.jpg', 'Sacca floscia in fibrato di kevlar, capace di contenere un kit completo di un operatore, necessario per un dispiegamento, capacit&#224; 180 litri.', 85, 0, 1, 49, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('EVA Suit', './img/equipment/EVA Suit.jpg', 'Scafandro da lavoro per attivit&#224; extra-veicolare, composta in piastre di ceramite snodate, rallenta i movimenti dell\'operatore, ma dona una elevata resistenza (assorbimento danno25),protegge tutto il corpo dell\'operatore e lo isola dall\'ambiente esterno, progettata per lavorazioni pesanti nei planetoidi di estrazione e nei bacini di carenaggio federali. riserva d\'aria utile, 12 ore, jet pack ad aria compressa integrato, fari led ad alta intensit&#224; integrati nelle spalle e nel casco.', 1000, 0, 3, 50, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Body Cam', './img/equipment/Body_cam.jpg', 'mini camera agganciabile alle suit ed alla protezioni, o utilizzabile in stand alone.<div>Trasmette sia in real time, collegata ai sistemi di comunicazione delle suit, sia pu&#242; registrare filmati che vengono storati nella data card inserita.&#160;</div>', 200, 0, 1, 51, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('electronic cigarette', './img/equipment/Electronic Cigarettes.jpg', 'sigaretta elettronica ricaricabile', 25, 0, 1, 52, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('cigarettes', './img/equipment/Cigarette.jpg', 'sigarette in reale tabacco, pacchetto da 20, uso singolo.', 100, 0, 1, 53, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Cigar', './img/equipment/Cigar.jpg', 'Sigaro in vero tabacco,confezione da uno,&#160; uso singolo', 250, 0, 1, 54, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Chewing gum', './img/equipment/Chewing gum.jpg', 'confezione da 10 lastrine di gomme da masticare, uso singolo', 5, 0, 1, 55, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('carbon card', './img/equipment/Carbon Card.jpg', 'carte da poker in fibrato di carbonio.', 25, 0, 1, 56, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Exo Suit', './img/equipment/Exo Suit.jpg', 'esoscheletro da lavoro per il sollevamento di carichi pesanti, autonomia batteria 6 ore.<div>non pu&#242; essere usato se sono indossate delle suit o protezioni.</div>', 500, 0, 1, 57, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Jump suit', './img/equipment/Jump Suit Civile.jpg', 'tuta da lavoro in fibrato di Kevalr, fornisce una minima protezione al corpo dell\'operatore, assorbimento danno 6.', 50, 0, 3, 58, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('A.R. Mag.', './img/equipment/AR Mag.jpg', 'Caricatore per fucili d\'assalto a rotaia elettromagnetica cal 5.56.<div>capacit&#224; 30</div><div><br></div><div><br></div>', 150, 0, 9, 59, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('D.M.R. Mag.', './img/equipment/Sniper Mag.jpg', 'Caricatore per fucili di precisione a rotaia elettromagnetica cal.7.62.<div>capacit&#224; 12</div><div><br></div>', 75, 0, 9, 60, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('A.M.R. mag.', './img/equipment/anti-material rifle mag..jpg', 'caricatore per fucili anti-materiale a rotaia elettromagnetica, cal .50 BMG.<div>Capacit&#224; 3</div><div><br></div>', 300, 0, 9, 61, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('S.M.G. Mag', './img/equipment/SMG mag.jpg', 'caricatore per mitragliette a rotaia elettromagnetica cal.45 acp.<div>Capacit&#224;: 30</div><div><br></div>', 150, 0, 9, 62, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('S.D. Mag.', './img/equipment/pistol mag.jpg', 'Caricatore per pistole semi-automatiche a rotaia elettromagnetica cal .45acp.<div>Capacit&#224; 7</div><div><br></div>', 75, 0, 9, 63, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Recharger', './img/equipment/cilindro di ricarcia.jpg', 'Cilindro di ricarica per revolver a rotaia elettromagnerica, cal.357 magnum.<div>Capacit&#224; 6</div><div><br></div><div><br></div>', 90, 0, 9, 64, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Shotgun Shell', './img/equipment/Shotgun shell.jpg', 'Cartuccia per fucile a pompa a rotaia elettro magnetica, cal 12 buckshot.<div>Confezione da 8</div>', 120, 0, 9, 65, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Magnum shell', './img/equipment/Magnum Shell.jpg', '<div>Cartuccia per fucili sovrapposti a rotaia elettromagnetica, cal 12 nonopalla.</div><div>Confezione da 2</div>', 60, 0, 9, 66, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Bionic Arm', './img/equipment/Arto superiore sintetico sostitutivo.jpg', 'Protesi bionica sostitutiva, destra o sinistra, in fibra di carbonio e kevlar, non da potenziamenti al portatore, ma sostituisce in tutto e per tutto l\'arto perduto.<div><br></div>', 800, 0, 6, 67, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Bionic Leg', './img/equipment/Arto Inferiore sintetico sostitutivo.jpg', 'Protesi bionica sostitutiva, destra o sinistra, in fibra di carbonio e kevlar, non da potenziamenti al portatore, ma sostituisce in tutto e per tutto l\'arto perduto.<div><br></div>', 800, 0, 6, 68, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('bionic eye', './img/equipment/Organo sensoriale sintetico sostitutivo.jpg', 'Protesi bionica sostitutiva, destra o sinistra, non da potenziamenti al portatore, ma&#160; sostituisce in tutto e per tutto l\'occhio perduto.<div><br></div>', 500, 0, 6, 69, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Bionic Organs', './img/equipment/Organo interno sintetico sostitutivo.jpg', 'protesi bionica sostitutiva, non dona potenziamenti al portatore ma, sostituisce in tutto e per tutto l\'organo perduto.<div><br></div>', 600, 0, 6, 70, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Bionic ears', './img/equipment/modulo uditivo base.png', 'protesi auditiva sintetica in polimero, non dona potenziamenti al portatore, ma sostituisce in tutto e per tutto l\'orecchio perduto.<div><br></div>', 500, 0, 6, 71, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Bionic spine', './img/equipment/Sistema Toracico-spinale sintetico sostitutivo.jpg', 'protesi sintetica sostitutiva in fibra di carbonio, non dona alcun potenziamento al portatore,ma sostituisce in tutte e per tutto la colonna spinale danneggiata.<div><br></div>', 1000, 0, 6, 72, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Syn-Skin', './img/equipment/Derma Sintetico Sostitutivo.jpg', 'epidermide sintetica per il rivestimento degli arti bionici e sostituzione di parti di tessuto compromesso.', 800, 0, 6, 73, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Goliath Lite Chassis', './img/equipment/Goliath Light Chassis.jpg', 'Mech&#160; leggero da combattimento.<div>Altezza totale 6 metri, peso 6.000 kg.</div><div>Forza: 25/Destrezza 50</div><div>Assorbimento danno 45</div><div>Punti ferita 450</div><div>Note: fornisce supporto vitale e protezione dall\'atmosfera esterna</div><div><br></div>', 5000, 0, 5, 74, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Atmospheric Recon Drone', './img/equipment/Atmospheric Recon Drone.jpg', 'piccolo drone da ricognizione atmosferica, delle dimensioni di una granata, trasmette in tempo reale le immagini catturate dalla propria cam, con capacit&#224; nvg e termiche, all\'arm-pad del proprietario, raggio massimo operativo 800 metri prima di perdere il segnale. Non utilizzabile a zero g. la mobilit&#224; &#232; garantita da 4 micro rotori intubati.', 500, 0, 8, 75, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Void Recon Drone', './img/equipment/Void Recon Drone.jpg', 'piccolo drone da ricognizione spaziale, grande come una palla da biliardo, trasmette in tempo reale le immagini catturare dalla propria cam, sia nvg che termiche, all\'arm-pad del proprietario, raggio massimo operativo di 8oo metri prima di perdere il segnale; la mobilit&#224; &#232; data da piccoli ugelli di aria compresso che lo stabilizzano e indirizzano.', 500, 0, 8, 76, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Exo Rover 6x6', './img/equipment/6x6.png', 'Rover da esplorazione, equipaggio 8, velocit&#224; massima 90 km/h, fornisce supporto vitale e protezione dall\'atmosfera esterna a pilota e passeggeri', 8000, 0, 4, 77, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Mule', './img/equipment/Mule Drone.jpg', 'Drone da trasporto pesante, Segue il portatore dell\'arm pad con cui &#232; sincronizzato.', 900, 0, 8, 78, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Goliath Medium Chassis', './img/equipment/Goliath Medium Chassis.jpg', 'Mech&#160; medio da combattimento.<div>Altezza totale 6 metri, peso 7.000 kg.</div><div>Forza: 50/Destrezza 25</div><div>Assorbimento danno 45</div><div>Punti ferita 550</div><div><div>Note: fornisce supporto vitale e protezione dall\'atmosfera esterna</div><div><br></div></div>', 7000, 0, 5, 79, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Goliath Heavy Chassis', './img/equipment/Goliath heavy Chassis.jpg', 'Mech&#160;pesante da combattimento.<div>Altezza totale 6 metri, peso 8.000 kg.</div><div>Forza: 60/Destrezza 15</div><div>Assorbimento danno 45</div><div>Punti ferita 650</div><div><div>Note: fornisce supporto vitale e protezione dall\'atmosfera esterna</div><div><br></div></div>', 10000, 0, 5, 80, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Racer Ship', './img/equipment/Navetta da Corsa.jpg', 'Tipologia: Navetta da corsa mono motore biposto.<div>Equipaggio: 2 (pilota + navigatore)</div><div>Propulsione: Motore ad impulso, getti di manovra ad aria compressa.<br><div>Armamento: nessuno</div></div><div>Corazza: assorbimento danno 45</div><div>Punti struttura: 200</div><div>Note: navetta con capacit&#224; atmosferica.</div><div><br></div><div><br></div>', 2500, 0, 7, 81, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Starship Lite', './img/equipment/Navetta Leggera.jpg', '<div>Tipologia: Navetta leggera bimotore</div><div>Equipaggio: 1 pilota +3 passeggeri</div><div>Propulsione: coppia di motori gemelli ad impulso, getti di manovra ad aria compressa<br><div>Armamento: 1 cannone automatico pesante cal.50 mm posizionato sul lato sinistro dello scafo.(CDT 1, danno 90, gittata 250/500/1000, colpi a disposizione 100)</div></div><div>Corazza:Assorbimento danno 45</div><div>Punti struttura: 400</div><div>Note:navetta con capacit&#224; atmosferica</div>', 5000, 0, 7, 82, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Starship Medium', './img/equipment/Navetta Media.jpg', 'Tipologia: navetta media bimotore con capacit&#224; STOL e VTOL<div>Equipaggio: 5 (1 pilota, 1navigatore, 2 cannonieri, 1 operatore di carico)</div><div>Propulsione: motori ad impulso a geometria variabile, getti di manovra ad aria compressa.<br><div>Armamento: due torrette binate a tiro rapido calibro 12.7mm(gittata125/250/500, cadenza di tiro 1/3, danno 20, colpi 100)&#160; controllabili da remoto (cabina), 2 cannoni automatici calibro 30mm(gittata 250/500/1000, cadenza di tiro 1, danno 45, colpi 100)&#160; in posizione fissa a prua</div></div><div>Corazza: assorbimento danno 45</div><div>Punti struttura: 500</div><div>Note: capacit&#224; atmosferica, capacit&#224; di decollo corto verticale.</div>', 7500, 0, 7, 83, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Starship Heavy', './img/equipment/Navetta Pesante.jpg', 'Tipologia:navetta pesante quadrimotore con capacit&#224; STOL e VTOL<div>Equipaggio: 1 pilota, 1 navigatore, 3 cannonieri, 1 operatore di carico</div><div>Propulsione: quattro motori gemellati ad impulso in gondole a geometria variabile, ugelli di manovra ad aria compressa.<br><div>Armamento: 6 torrette calibro 12.7mm<span>(gittata125/250/500, cadenza di tiro 1/3, danno 20, colpi 100)&#160; controllabili da remoto (cabina), 3 cannoni automatici calibro 30mm(gittata 250/500/1000, cadenza di tiro 1, danno 45, colpi 100)&#160; in posizione fissa a prua.</span></div></div><div><div>Corazza: assorbimento danno 45</div><div>Punti struttura: 600</div><div>Note: capacit&#224; atmosferica, capacit&#224; di decollo corto verticale.</div></div>', 10000, 0, 7, 84, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Goliath Autocannon ', './img/equipment/Kestrel Goliath Autocannon.jpg', '<p class=MsoNormal>Tipologia: Cannone automatico a rotaia elettromagnetica</p>&#10;&#10;<p class=MsoNormal>Gittata: 250/500/1000</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: 1/3</p>&#10;&#10;<p class=MsoNormal>Caricatore: 50</p>&#10;&#10;<p class=MsoNormal>Danno: 45</p>&#10;&#10;<p class=MsoNormal>Note: Maneggiabile solo da Goliath.</p>', 2500, 0, 2, 85, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Goliath Blade', './img/equipment/Kestrel Goliath Blade.jpg', '<p class=MsoNormal>Tipologia: Spada Monofilare per Goliath</p>&#10;&#10;<p class=MsoNormal>Gittata: n/a</p>&#10;&#10;<p class=MsoNormal>Rateo di fuoco: n/a</p>&#10;&#10;<p class=MsoNormal>Caricatore: n/a</p>&#10;&#10;<p class=MsoNormal>Danno: for+25</p>&#10;&#10;<p class=MsoNormal>Note: maneggiabile solo da Goliath</p>', 1500, 0, 2, 86, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Goliath Feed Belt', './img/equipment/Goliath Ammo Belt.jpg', 'Caricatore per cannoni automatici e a rotaia elettromagnetica cal&#160; 30mm.<div>Capacit&#224; 100</div><div><br></div><div>note: utilizzabile solo per Goliath Autocannon</div>', 500, 0, 9, 87, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Mercs Badge', './img/equipment/Badge3.jpg', 'Badge di certificazione come mercenario federale.<div>Contiene identificativo dell\'operativo, dati biometrici, dati anagrafici.</div><div>Permette l\'accesso alla rete del circuito&#160;</div><div><br></div><div>Note: deve essere richiesto On Game o con motivazioni in Background</div>', 0, 0, 1, 88, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1),
('Space Cowboy Badge', './img/equipment/Badge1.jpg', 'Badge di certificazione come cacciatore di taglie federale.<div>Contiene identificativo dell\'operativo, dati biometirci, dati anagrafici, fedina penale.</div><div>Permette l\'accesso agli avvisi di taglia Federali.</div><div><br></div><div>Note: deve essere richiesto On Game o con Motivazioni di Background</div>', 0, 0, 1, 89, '2022-02-03 17:26:10', 1, '2022-02-03 17:26:10', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `equiptypes`
--

DROP TABLE IF EXISTS `equiptypes`;
CREATE TABLE IF NOT EXISTS `equiptypes` (
  `Name` varchar(255) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `equiptypes`
--

INSERT INTO `equiptypes` (`Name`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Equipaggiamento', 1, '2022-01-29 18:03:41', 1, '2022-01-29 18:03:41', 1),
('Armi', 2, '2022-01-29 18:04:37', 1, '2022-01-29 18:04:37', 1),
('Armature', 3, '2022-01-29 18:04:49', 1, '2022-01-29 18:04:49', 1),
('Veicoli', 4, '2022-01-29 18:05:01', 1, '2022-01-29 18:05:01', 1),
('Mech', 5, '2022-01-29 18:05:11', 1, '2022-01-29 18:05:11', 1),
('Innesti', 6, '2022-01-29 18:05:21', 1, '2022-01-29 18:05:21', 1),
('Velivoli', 7, '2022-01-29 18:05:32', 1, '2022-01-29 18:05:32', 1),
('Droni', 8, '2022-01-29 18:05:39', 1, '2022-01-29 18:05:39', 1),
('Munizioni', 9, '2022-01-29 18:05:50', 1, '2022-01-29 18:05:50', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `forummessages`
--

DROP TABLE IF EXISTS `forummessages`;
CREATE TABLE IF NOT EXISTS `forummessages` (
  `Message` text NOT NULL,
  `IDParent` int(11) NOT NULL,
  `IDAuthor` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `forummessages`
--

INSERT INTO `forummessages` (`Message`, `IDParent`, `IDAuthor`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('asdasd', 1, 1, 4, '2022-03-02 13:02:10', 1, '2022-03-02 13:02:10', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `forums`
--

DROP TABLE IF EXISTS `forums`;
CREATE TABLE IF NOT EXISTS `forums` (
  `Title` varchar(255) NOT NULL,
  `Icon` varchar(255) NOT NULL,
  `Closed` tinyint(1) NOT NULL,
  `IDAuthor` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `forums`
--

INSERT INTO `forums` (`Title`, `Icon`, `Closed`, `IDAuthor`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Primo Topic', './img/forum/equip-71[1].png', 0, 1, 1, '2022-02-02 17:19:01', 1, '2022-02-02 17:19:01', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `guildmembers`
--

DROP TABLE IF EXISTS `guildmembers`;
CREATE TABLE IF NOT EXISTS `guildmembers` (
  `IDGuild` int(11) NOT NULL,
  `IDCharacter` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `guilds`
--

DROP TABLE IF EXISTS `guilds`;
CREATE TABLE IF NOT EXISTS `guilds` (
  `Name` varchar(255) NOT NULL,
  `Icon` varchar(255) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `locations`
--

DROP TABLE IF EXISTS `locations`;
CREATE TABLE IF NOT EXISTS `locations` (
  `Name` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Image` varchar(255) NOT NULL,
  `X` int(11) NOT NULL,
  `Y` int(11) NOT NULL,
  `IDParent` int(11) NOT NULL,
  `HasChat` tinyint(1) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `locations`
--

INSERT INTO `locations` (`Name`, `Description`, `Image`, `X`, `Y`, `IDParent`, `HasChat`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Nete Orbital Station', 'Stazione Civile Federale di Settore&#160;', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 60, 10, -1, 0, 4, '2022-02-03 21:15:37', 1, '2022-02-03 21:15:37', 1),
('U.E.F.S. Breckinridge', 'Nave da battaglia della Flotta Federale', './img/map/Breckinridge_1.jpg', 30, 20, -1, 0, 5, '2022-02-03 21:15:37', 1, '2022-02-03 21:15:37', 1),
('Relitto  Comet', 'Relitto della nave coloniale Comet', './img/map/8fd9ec395479981817daec2b48865bed-700.jpg', 30, 50, -1, 0, 6, '2022-02-03 21:15:37', 1, '2022-02-03 21:15:37', 1),
('Eracle 101', 'Esopianeta terraformabile', './img/map/ice-planet-3d-3d-model-obj-fbx.jpg', 10, 70, -1, 0, 7, '2022-02-03 21:15:37', 1, '2022-02-03 21:15:37', 1),
('Plancia di comando', 'null', './img/map/Breckinridge_1.jpg', 75, 10, 0, 1, 8, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Eagle Rift', 'Porzione di spazio conosciuta con il nome di Breccia dell\'Acquila', './img/map/space-galaxy-space-art-digital-art-wallpaper.jpg', 80, 45, -1, 0, 9, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Patrol Route Alpha', 'null', './img/map/space-galaxy-space-art-digital-art-wallpaper.jpg', 72, 20, 9, 1, 10, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Patrol Route Bravo', 'null', './img/map/space-galaxy-space-art-digital-art-wallpaper.jpg', 72, 30, 9, 1, 11, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Patrol Route Charlie', 'null', './img/map/space-galaxy-space-art-digital-art-wallpaper.jpg', 72, 40, 9, 1, 12, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Patrol Route Delta', 'null', './img/map/space-galaxy-space-art-digital-art-wallpaper.jpg', 72, 50, 9, 1, 13, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Patrol Route Echo', 'null', './img/map/space-galaxy-space-art-digital-art-wallpaper.jpg', 72, 60, 9, 1, 14, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Colonial Sector Alpha', 'null', './img/map/ice-planet-3d-3d-model-obj-fbx.jpg', 70, 20, 7, 1, 15, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Colonial Sector Bravo', 'null', './img/map/ice-planet-3d-3d-model-obj-fbx.jpg', 70, 30, 7, 1, 16, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Colonial Sector Charlie', 'null', './img/map/ice-planet-3d-3d-model-obj-fbx.jpg', 70, 40, 7, 1, 17, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Colonial Sector Delta', 'null', './img/map/ice-planet-3d-3d-model-obj-fbx.jpg', 70, 50, 7, 1, 18, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Colonial Sector Echo', 'null', './img/map/ice-planet-3d-3d-model-obj-fbx.jpg', 70, 60, 7, 1, 19, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Palestra', 'null', './img/map/Breckinridge_1.jpg', 75, 60, 5, 1, 20, '2022-02-03 21:15:38', 1, '2022-02-03 21:15:38', 1),
('Dry Docks', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 10, 4, 1, 21, '2022-02-03 21:15:39', 1, '2022-02-03 21:15:39', 1),
('Hangar Navette', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 15, 4, 1, 22, '2022-02-03 21:15:39', 1, '2022-02-03 21:15:39', 1),
('The Otter Space', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 20, 4, 1, 23, '2022-02-03 21:15:39', 1, '2022-02-03 21:15:39', 1),
('Commercial Hallway', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 25, 4, 1, 24, '2022-02-03 21:15:39', 1, '2022-02-03 21:15:39', 1),
('Federal Park', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 30, 4, 1, 25, '2022-02-03 21:15:39', 1, '2022-02-03 21:15:39', 1),
('Holo Rooms', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 35, 4, 1, 26, '2022-02-03 21:15:40', 1, '2022-02-03 21:15:40', 1),
('The Hive', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 40, 4, 1, 27, '2022-02-03 21:15:40', 1, '2022-02-03 21:15:40', 1),
('Med Bay', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 45, 4, 1, 28, '2022-02-03 21:15:40', 1, '2022-02-03 21:15:40', 1),
('Docking Bay', 'null', './img/map/8fd9ec395479981817daec2b48865bed-700.jpg', 76, 20, 6, 1, 29, '2022-02-03 21:15:40', 1, '2022-02-03 21:15:40', 1),
('Alpha Deck', 'null', './img/map/8fd9ec395479981817daec2b48865bed-700.jpg', 76, 30, 6, 1, 30, '2022-02-03 21:15:40', 1, '2022-02-03 21:15:40', 1),
('Bravo Deck', 'null', './img/map/8fd9ec395479981817daec2b48865bed-700.jpg', 76, 40, 6, 1, 31, '2022-02-03 21:15:41', 1, '2022-02-03 21:15:41', 1),
('Charlie Deck', 'null', './img/map/8fd9ec395479981817daec2b48865bed-700.jpg', 76, 50, 6, 1, 32, '2022-02-03 21:15:41', 1, '2022-02-03 21:15:41', 1),
('Delta Deck', 'null', './img/map/8fd9ec395479981817daec2b48865bed-700.jpg', 76, 60, 6, 1, 33, '2022-02-03 21:15:41', 1, '2022-02-03 21:15:41', 1),
('Soma Sleep Bay', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 50, 4, 1, 34, '2022-02-03 21:15:41', 1, '2022-02-03 21:15:41', 1),
('N.P.D.', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 55, 4, 1, 35, '2022-02-03 21:15:41', 1, '2022-02-03 21:15:41', 1),
('Blocco Alloggi', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 60, 4, 1, 36, '2022-02-03 21:15:42', 1, '2022-02-03 21:15:42', 1),
('Bellavista', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 65, 4, 1, 37, '2022-02-03 21:15:42', 1, '2022-02-03 21:15:42', 1),
('Ready Room', 'null', './img/map/Breckinridge_1.jpg', 75, 25, 5, 1, 38, '2022-02-03 21:15:42', 1, '2022-02-03 21:15:42', 1),
('Briefing Room', 'null', './img/map/Breckinridge_1.jpg', 75, 20, 5, 1, 39, '2022-02-03 21:15:42', 1, '2022-02-03 21:15:42', 1),
('Hangar', 'null', './img/map/Breckinridge_1.jpg', 75, 30, 5, 1, 40, '2022-02-03 21:15:42', 1, '2022-02-03 21:15:42', 1),
('Holo Room', 'null', './img/map/Breckinridge_1.jpg', 75, 40, 5, 1, 41, '2022-02-03 21:15:42', 1, '2022-02-03 21:15:42', 1),
('Armeria', 'null', './img/map/Breckinridge_1.jpg', 75, 35, 5, 1, 42, '2022-02-03 21:15:42', 1, '2022-02-03 21:15:42', 1),
('Combat Med Bay', 'null', './img/map/Breckinridge_1.jpg', 75, 45, 5, 1, 43, '2022-02-03 21:15:43', 1, '2022-02-03 21:15:43', 1),
('Soma Sleep Tanker', 'null', './img/map/Breckinridge_1.jpg', 75, 50, 5, 1, 44, '2022-02-03 21:15:43', 1, '2022-02-03 21:15:43', 1),
('Sala Relax', 'null', './img/map/Breckinridge_1.jpg', 75, 55, 5, 1, 45, '2022-02-03 21:15:43', 1, '2022-02-03 21:15:43', 1),
('Mensa', 'null', './img/map/Breckinridge_1.jpg', 75, 65, 5, 1, 46, '2022-02-03 21:15:43', 1, '2022-02-03 21:15:43', 1),
('Alloggi', 'null', './img/map/Breckinridge_1.jpg', 75, 70, 5, 1, 47, '2022-02-03 21:15:43', 1, '2022-02-03 21:15:43', 1),
('Rovine Argo', 'null', './img/map/andrea-chiampo-andrea-chiampo-5-1800-4.jpg', 10, 65, -1, 0, 48, '2022-02-03 21:15:44', 1, '2022-02-03 21:15:44', 1),
('Landing Pad', 'null', './img/map/andrea-chiampo-andrea-chiampo-5-1800-4.jpg', 76, 10, 48, 1, 49, '2022-02-03 21:15:44', 1, '2022-02-03 21:15:44', 1),
('Level Charlie', 'null', './img/map/andrea-chiampo-andrea-chiampo-5-1800-4.jpg', 76, 40, 48, 1, 50, '2022-02-03 21:15:44', 1, '2022-02-03 21:15:44', 1),
('Level Bravo', 'null', './img/map/andrea-chiampo-andrea-chiampo-5-1800-4.jpg', 76, 30, 48, 1, 51, '2022-02-03 21:15:44', 1, '2022-02-03 21:15:44', 1),
('Level Alpha', 'null', './img/map/andrea-chiampo-andrea-chiampo-5-1800-4.jpg', 76, 20, 48, 1, 52, '2022-02-03 21:15:45', 1, '2022-02-03 21:15:45', 1),
('Sporting Center', 'null', './img/map/1424007312_preview_Andromeda_timeline_team_MASTER_h264_ultrafast_hq_encode_ENG__12_01741.jpg', 77, 70, 4, 1, 53, '2022-02-03 21:15:45', 1, '2022-02-03 21:15:45', 1),
('Officer Quarter', 'null', './img/map/Breckinridge_1.jpg', 75, 15, 5, 1, 54, '2022-02-03 21:15:45', 1, '2022-02-03 21:15:45', 1),
('Level Delta', 'null', './img/map/andrea-chiampo-andrea-chiampo-5-1800-4.jpg', 76, 50, 48, 1, 55, '2022-02-03 21:15:45', 1, '2022-02-03 21:15:45', 1),
('Level Echo', 'null', './img/map/andrea-chiampo-andrea-chiampo-5-1800-4.jpg', 76, 60, 48, 1, 56, '2022-02-03 21:15:45', 1, '2022-02-03 21:15:45', 1);

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
) ENGINE=MyISAM AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
('MainMenuFe', 'Info luoghi', -1, 322, 50, 65, '2021-12-11 12:29:16', 1, '2021-12-11 17:32:42', 1),
('MainMenuBe', 'Sheet Configuration', 67, 330, 0, 66, '2021-12-18 16:21:58', 1, '2022-01-28 12:04:17', 1),
('MainMenuBe', 'RPG Management', -1, 323, 40, 67, '2022-01-14 21:37:29', 1, '2022-01-14 21:37:29', 1),
('MainMenuBe', 'Logs', 1, 337, 50, 68, '2022-01-28 11:26:17', 1, '2022-01-28 11:30:41', 1),
('MainMenuBe', 'Characters', 67, 338, 10, 69, '2022-01-28 12:03:42', 1, '2022-01-28 12:03:56', 1),
('MainMenuBe', 'Equip Types', 67, 341, 40, 71, '2022-01-29 14:19:47', 1, '2022-01-29 14:20:05', 1),
('MainMenuBe', 'Equip', 67, 344, 50, 72, '2022-01-29 19:01:51', 1, '2022-01-29 19:02:01', 1),
('MainMenuBe', 'Forums', -1, 345, 50, 73, '2022-01-31 12:21:45', 1, '2022-01-31 12:21:45', 1),
('MainMenuBe', 'Map', 67, 350, 60, 74, '2022-02-02 20:19:47', 1, '2022-02-02 20:20:09', 1),
('MainMenuBe', 'Guilds', -1, 356, 60, 75, '2022-03-03 15:43:40', 1, '2022-03-03 15:43:53', 1),
('MainMenuFe', 'ID Badge', -1, 363, 60, 76, '2022-03-03 22:47:38', 1, '2022-03-03 22:49:00', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `notifications`
--

DROP TABLE IF EXISTS `notifications`;
CREATE TABLE IF NOT EXISTS `notifications` (
  `Description` text NOT NULL,
  `IsRead` tinyint(1) NOT NULL,
  `IDUser` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
) ENGINE=MyISAM AUTO_INCREMENT=367 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `routes`
--

INSERT INTO `routes` (`Package`, `Func`, `Type`, `Methods`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('page', 'routes', 'be', 'GET', 279, '2021-12-11 14:01:42', 1, '2021-12-11 14:01:42', 1),
('page', 'home', 'fe', 'GET', 288, '2021-12-11 15:07:02', 1, '2022-02-02 20:05:07', 1),
('page', 'componenteditor', 'be', 'GET', 284, '2021-12-11 14:43:29', 1, '2021-12-11 15:56:59', 1),
('page', 'database', 'be', 'GET', 283, '2021-12-11 14:41:26', 1, '2021-12-11 15:56:53', 1),
('page', 'usertypes', 'be', 'GET', 280, '2021-12-11 14:02:20', 1, '2021-12-11 15:57:30', 1),
('page', 'users', 'be', 'GET', 278, '2021-12-11 13:50:43', 1, '2021-12-11 15:57:24', 1),
('usertype', 'getusertypes', 'api', 'GET', 289, '2021-12-11 15:53:22', 1, '2021-12-11 15:53:22', 1),
('page', 'register', 'fe', 'GET', 286, '2021-12-11 14:53:11', 1, '2021-12-11 15:57:38', 1),
('page', 'home', 'be', 'GET', 287, '2021-12-11 15:00:03', 1, '2022-02-02 20:04:22', 1),
('page', 'menus', 'be', 'GET', 281, '2021-12-11 14:02:38', 1, '2021-12-11 15:57:12', 1),
('page', 'logout', 'fe', 'GET', 282, '2021-12-11 14:02:58', 1, '2022-02-02 20:05:28', 1),
('route', 'getroutes', 'api', 'GET', 290, '2021-12-11 15:53:22', 1, '2021-12-11 15:53:22', 1),
('route', 'update', 'api', 'POST', 291, '2021-12-11 15:53:22', 1, '2022-01-20 19:02:58', 1),
('route', 'add', 'api', 'POST', 292, '2021-12-11 15:53:22', 1, '2022-01-20 19:02:26', 1),
('component', 'getcomponents', 'api', 'GET', 293, '2021-12-11 16:02:50', 1, '2021-12-11 16:02:50', 1),
('component', 'delete', 'api', 'DELETE', 294, '2021-12-11 16:03:05', 1, '2022-01-20 19:01:09', 1),
('component', 'add', 'api', 'POST', 295, '2021-12-11 16:03:19', 1, '2022-01-20 19:01:31', 1),
('component', 'update', 'api', 'POST', 296, '2021-12-11 16:03:31', 1, '2022-01-20 19:01:40', 1),
('dbapi', 'getdatabases', 'api', 'GET', 297, '2021-12-11 16:04:08', 1, '2021-12-11 16:04:08', 1),
('dbapi', 'gettables', 'api', 'GET', 298, '2021-12-11 16:04:16', 1, '2021-12-11 16:04:16', 1),
('dbapi', 'opentable', 'api', 'GET', 299, '2021-12-11 16:04:26', 1, '2021-12-11 16:04:26', 1),
('dbapi', 'execute', 'api', 'POST', 300, '2021-12-11 16:04:38', 1, '2021-12-11 16:04:38', 1),
('menu', 'getmenu', 'api', 'GET', 301, '2021-12-11 16:25:43', 1, '2021-12-16 19:20:43', 1),
('menu', 'getplainmenu', 'api', 'GET', 302, '2021-12-11 16:25:58', 1, '2021-12-11 16:25:58', 1),
('menu', 'delete', 'api', 'DELETE', 303, '2021-12-11 16:26:07', 1, '2022-01-20 19:02:06', 1),
('menu', 'add', 'api', 'POST', 304, '2021-12-11 16:26:14', 1, '2022-01-20 19:01:57', 1),
('menu', 'update', 'api', 'POST', 305, '2021-12-11 16:26:22', 1, '2022-01-20 19:02:16', 1),
('user', 'login', 'api', 'POST', 306, '2021-12-11 16:37:38', 1, '2021-12-11 16:37:38', 1),
('user', 'register', 'api', 'POST', 307, '2021-12-11 16:37:48', 1, '2021-12-11 16:37:48', 1),
('user', 'verifyuser', 'api', 'GET', 308, '2021-12-11 16:37:58', 1, '2022-02-02 20:03:37', 1),
('user', 'loadusers', 'api', 'GET', 309, '2021-12-11 16:38:06', 1, '2021-12-11 16:38:06', 1),
('user', 'update', 'api', 'POST', 310, '2021-12-11 16:38:15', 1, '2022-01-20 19:15:30', 1),
('user', 'exist', 'api', 'GET', 311, '2021-12-11 16:38:22', 1, '2021-12-11 16:38:22', 1),
('usertype', 'delete', 'api', 'DELETE', 312, '2021-12-11 16:39:54', 1, '2022-01-20 19:15:59', 1),
('usertype', 'add', 'api', 'POST', 313, '2021-12-11 16:40:02', 1, '2022-01-20 19:15:47', 1),
('page', 'ambientazione', 'fe', 'GET', 314, '2021-12-11 16:57:36', 1, '2022-02-02 20:04:54', 1),
('route', 'getroutesfiltered', 'api', 'GET', 317, '2021-12-11 17:20:32', 1, '2022-02-02 20:02:21', 1),
('route', 'delete', 'api', 'DELETE', 316, '2021-12-11 17:20:13', 1, '2022-01-20 19:02:46', 1),
('page', 'logout', 'be', 'GET', 318, '2021-12-11 17:27:16', 1, '2022-02-02 20:04:31', 1),
('page', 'login', 'fe', 'GET', 319, '2021-12-11 17:29:40', 1, '2021-12-11 17:29:40', 1),
('page', 'regolamento', 'fe', 'GET', 320, '2021-12-11 17:31:08', 1, '2022-02-02 20:05:40', 1),
('page', 'guida', 'fe', 'GET', 321, '2021-12-11 17:31:48', 1, '2022-02-02 20:05:00', 1),
('page', 'infoluoghi', 'fe', 'GET', 322, '2021-12-11 17:32:25', 1, '2022-02-02 20:05:13', 1),
('fake', 'fake', 'be', 'GET', 323, '2021-12-11 17:46:17', 1, '2021-12-11 17:46:17', 1),
('logs', 'getlog', 'api', 'GET', 336, '2022-01-27 12:29:19', 1, '2022-01-27 12:29:19', 1),
('user', 'reset', 'api', 'POST', 325, '2021-12-16 19:28:17', 1, '2021-12-16 19:28:17', 1),
('sheetelement', 'add', 'api', 'POST', 326, '2021-12-18 16:12:56', 1, '2022-02-02 20:02:35', 1),
('sheetelement', 'getsheetelements', 'api', 'GET', 327, '2021-12-18 16:14:54', 1, '2022-03-03 23:11:01', 1),
('sheetelement', 'delete', 'api', 'DELETE', 328, '2021-12-18 16:16:15', 1, '2022-02-02 20:02:43', 1),
('sheetelement', 'update', 'api', 'POST', 329, '2021-12-18 16:18:42', 1, '2022-02-02 20:03:06', 1),
('page', 'sheetelement', 'be', 'GET', 330, '2021-12-18 16:21:08', 1, '2022-02-02 20:04:42', 1),
('sheetelement', 'getsheetelementypes', 'api', 'GET', 331, '2021-12-20 00:13:59', 1, '2022-02-02 20:02:59', 1),
('sheetelement', 'getsheetelementstable', 'api', 'GET', 332, '2021-12-20 22:39:00', 1, '2022-02-02 20:02:54', 1),
('route', 'check', 'api', 'POST', 333, '2022-01-20 18:02:42', 1, '2022-02-02 20:02:15', 1),
('logs', 'getlogs', 'api', 'GET', 335, '2022-01-27 12:03:53', 1, '2022-01-27 12:04:27', 1),
('page', 'logs', 'be', 'GET', 337, '2022-01-28 11:16:02', 1, '2022-01-28 11:16:02', 1),
('page', 'characters', 'be', 'GET', 338, '2022-01-28 12:02:29', 1, '2022-02-02 20:03:49', 1),
('character', 'getcharacters', 'api', 'GET', 339, '2022-01-28 23:52:10', 1, '2022-02-02 20:01:08', 1),
('page', 'equiptype', 'be', 'GET', 341, '2022-01-29 14:19:16', 1, '2022-02-02 20:04:07', 1),
('equip', 'getequiptypes', 'api', 'GET', 342, '2022-01-29 14:21:33', 1, '2022-02-02 20:01:28', 1),
('equip', 'addtype', 'api', 'POST', 343, '2022-01-29 18:00:51', 1, '2022-02-02 20:01:22', 1),
('page', 'equip', 'be', 'GET', 344, '2022-01-29 19:01:30', 1, '2022-02-02 20:04:00', 1),
('page', 'forums', 'be', 'GET', 345, '2022-01-31 12:21:20', 1, '2022-02-02 20:04:14', 1),
('forum', 'getopics', 'api', 'GET', 346, '2022-01-31 12:22:57', 1, '2022-02-02 20:01:59', 1),
('forum', 'add', 'api', 'POST', 347, '2022-02-02 17:16:54', 1, '2022-02-02 20:01:38', 1),
('page', 'location', 'be', 'GET', 350, '2022-02-02 20:19:22', 1, '2022-02-02 20:19:22', 1),
('forum', 'getopic', 'api', 'GET', 349, '2022-02-02 18:23:17', 1, '2022-02-02 20:01:47', 1),
('location', 'getlocations', 'api', 'GET', 351, '2022-02-03 11:48:05', 1, '2022-02-03 11:48:05', 1),
('equip', 'add', 'api', 'POST', 352, '2022-02-03 14:50:05', 1, '2022-02-03 14:50:05', 1),
('equip', 'getequip', 'api', 'GET', 353, '2022-02-03 14:57:24', 1, '2022-02-03 14:57:24', 1),
('menu', 'getmenunames', 'api', 'GET', 354, '2022-02-23 20:15:01', 1, '2022-02-23 20:15:01', 1),
('forum', 'addmessage', 'api', 'POST', 355, '2022-03-02 12:54:13', 1, '2022-03-02 12:54:13', 1),
('page', 'guilds', 'be', 'GET', 356, '2022-03-03 15:40:05', 1, '2022-03-03 15:40:05', 1),
('guild', 'getguilds', 'api', 'GET', 357, '2022-03-03 15:40:50', 1, '2022-03-03 15:40:50', 1),
('guild', 'add', 'api', 'POST', 358, '2022-03-03 15:41:11', 1, '2022-03-03 15:41:11', 1),
('guild', 'delete', 'api', 'DELETE', 359, '2022-03-03 15:41:39', 1, '2022-03-03 15:41:39', 1),
('guild', 'update', 'api', 'POST', 360, '2022-03-03 15:42:14', 1, '2022-03-03 15:42:14', 1),
('guild', 'setmember', 'api', 'GET', 361, '2022-03-03 15:42:43', 1, '2022-03-03 15:42:43', 1),
('component', 'getcomponent', 'api', 'GET', 362, '2022-03-03 19:17:59', 1, '2022-03-03 19:17:59', 1),
('page', 'character', 'fe', 'GET', 363, '2022-03-03 22:48:39', 1, '2022-03-03 22:48:39', 1),
('character', 'getminecharacters', 'api', 'GET', 364, '2022-03-03 23:01:12', 1, '2022-03-03 23:01:12', 1),
('character', 'check', 'api', 'GET', 365, '2022-04-02 11:03:11', 1, '2022-04-02 11:03:11', 1),
('character', 'add', 'api', 'POST', 366, '2022-04-02 11:25:18', 1, '2022-04-02 11:25:18', 1);

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
) ENGINE=MyISAM AUTO_INCREMENT=323 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `routespermission`
--

INSERT INTO `routespermission` (`IDRoute`, `IDUserType`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
(309, 1, 183, '2021-12-11 16:38:06', 1, '2021-12-11 16:38:06', 1),
(308, 3, 264, '2022-02-02 20:03:37', 1, '2022-02-02 20:03:37', 1),
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
(323, 1, 211, '2021-12-11 17:46:17', 1, '2021-12-11 17:46:17', 1),
(301, 2, 212, '2021-12-16 19:20:43', 1, '2021-12-16 19:20:43', 1),
(301, 3, 213, '2021-12-16 19:20:43', 1, '2021-12-16 19:20:43', 1),
(301, 99, 214, '2021-12-16 19:20:43', 1, '2021-12-16 19:20:43', 1),
(326, 1, 215, '2021-12-18 16:15:21', 1, '2021-12-18 16:15:21', 1),
(327, 1, 216, '2021-12-18 16:15:26', 1, '2021-12-18 16:15:26', 1),
(328, 1, 217, '2021-12-18 16:18:19', 1, '2021-12-18 16:18:19', 1),
(329, 1, 218, '2021-12-18 16:18:53', 1, '2021-12-18 16:18:53', 1),
(330, 1, 219, '2021-12-18 16:21:08', 1, '2021-12-18 16:21:08', 1),
(331, 1, 220, '2021-12-20 00:13:59', 1, '2021-12-20 00:13:59', 1),
(332, 1, 221, '2021-12-20 22:39:00', 1, '2021-12-20 22:39:00', 1),
(317, 2, 222, '2022-01-17 11:25:06', 1, '2022-01-17 11:25:06', 1),
(317, 3, 223, '2022-01-17 11:25:06', 1, '2022-01-17 11:25:06', 1),
(317, 99, 224, '2022-01-17 11:25:06', 1, '2022-01-17 11:25:06', 1),
(333, 1, 225, '2022-01-20 18:02:42', 1, '2022-01-20 18:02:42', 1),
(333, 2, 226, '2022-01-20 18:02:42', 1, '2022-01-20 18:02:42', 1),
(333, 3, 227, '2022-01-20 18:02:42', 1, '2022-01-20 18:02:42', 1),
(333, 99, 228, '2022-01-20 18:02:42', 1, '2022-01-20 18:02:42', 1),
(338, 1, 236, '2022-01-28 12:02:29', 1, '2022-01-28 12:02:29', 1),
(337, 1, 235, '2022-01-28 11:16:02', 1, '2022-01-28 11:16:02', 1),
(336, 1, 234, '2022-01-27 12:29:19', 1, '2022-01-27 12:29:19', 1),
(335, 1, 233, '2022-01-27 12:03:53', 1, '2022-01-27 12:03:53', 1),
(339, 1, 237, '2022-01-28 23:52:10', 1, '2022-01-28 23:52:10', 1),
(341, 1, 239, '2022-01-29 14:19:16', 1, '2022-01-29 14:19:16', 1),
(342, 1, 240, '2022-01-29 14:21:33', 1, '2022-01-29 14:21:33', 1),
(343, 1, 241, '2022-01-29 18:00:51', 1, '2022-01-29 18:00:51', 1),
(344, 1, 242, '2022-01-29 19:01:30', 1, '2022-01-29 19:01:30', 1),
(345, 1, 243, '2022-01-31 12:21:20', 1, '2022-01-31 12:21:20', 1),
(346, 1, 244, '2022-01-31 12:22:57', 1, '2022-01-31 12:22:57', 1),
(347, 1, 245, '2022-02-02 17:16:54', 1, '2022-02-02 17:16:54', 1),
(350, 1, 279, '2022-02-02 20:19:22', 1, '2022-02-02 20:19:22', 1),
(349, 1, 247, '2022-02-02 18:23:17', 1, '2022-02-02 18:23:17', 1),
(339, 109, 248, '2022-02-02 20:01:08', 1, '2022-02-02 20:01:08', 1),
(343, 109, 249, '2022-02-02 20:01:22', 1, '2022-02-02 20:01:22', 1),
(342, 109, 250, '2022-02-02 20:01:28', 1, '2022-02-02 20:01:28', 1),
(347, 109, 251, '2022-02-02 20:01:38', 1, '2022-02-02 20:01:38', 1),
(349, 2, 252, '2022-02-02 20:01:47', 1, '2022-02-02 20:01:47', 1),
(349, 109, 253, '2022-02-02 20:01:47', 1, '2022-02-02 20:01:47', 1),
(346, 2, 254, '2022-02-02 20:01:59', 1, '2022-02-02 20:01:59', 1),
(346, 109, 255, '2022-02-02 20:01:59', 1, '2022-02-02 20:01:59', 1),
(333, 109, 256, '2022-02-02 20:02:15', 1, '2022-02-02 20:02:15', 1),
(317, 109, 257, '2022-02-02 20:02:21', 1, '2022-02-02 20:02:21', 1),
(326, 109, 258, '2022-02-02 20:02:35', 1, '2022-02-02 20:02:35', 1),
(328, 109, 259, '2022-02-02 20:02:43', 1, '2022-02-02 20:02:43', 1),
(327, 109, 260, '2022-02-02 20:02:49', 1, '2022-02-02 20:02:49', 1),
(332, 109, 261, '2022-02-02 20:02:54', 1, '2022-02-02 20:02:54', 1),
(331, 109, 262, '2022-02-02 20:03:00', 1, '2022-02-02 20:03:00', 1),
(329, 109, 263, '2022-02-02 20:03:06', 1, '2022-02-02 20:03:06', 1),
(308, 99, 265, '2022-02-02 20:03:37', 1, '2022-02-02 20:03:37', 1),
(338, 109, 266, '2022-02-02 20:03:49', 1, '2022-02-02 20:03:49', 1),
(344, 109, 267, '2022-02-02 20:04:00', 1, '2022-02-02 20:04:00', 1),
(341, 109, 268, '2022-02-02 20:04:07', 1, '2022-02-02 20:04:07', 1),
(345, 109, 269, '2022-02-02 20:04:14', 1, '2022-02-02 20:04:14', 1),
(287, 109, 270, '2022-02-02 20:04:22', 1, '2022-02-02 20:04:22', 1),
(318, 109, 271, '2022-02-02 20:04:31', 1, '2022-02-02 20:04:31', 1),
(330, 109, 272, '2022-02-02 20:04:42', 1, '2022-02-02 20:04:42', 1),
(314, 109, 273, '2022-02-02 20:04:54', 1, '2022-02-02 20:04:54', 1),
(321, 109, 274, '2022-02-02 20:05:00', 1, '2022-02-02 20:05:00', 1),
(288, 109, 275, '2022-02-02 20:05:07', 1, '2022-02-02 20:05:07', 1),
(322, 109, 276, '2022-02-02 20:05:13', 1, '2022-02-02 20:05:13', 1),
(282, 109, 277, '2022-02-02 20:05:28', 1, '2022-02-02 20:05:28', 1),
(320, 109, 278, '2022-02-02 20:05:40', 1, '2022-02-02 20:05:40', 1),
(350, 2, 280, '2022-02-02 20:19:22', 1, '2022-02-02 20:19:22', 1),
(350, 109, 281, '2022-02-02 20:19:22', 1, '2022-02-02 20:19:22', 1),
(351, 1, 282, '2022-02-03 11:48:05', 1, '2022-02-03 11:48:05', 1),
(351, 109, 283, '2022-02-03 11:48:05', 1, '2022-02-03 11:48:05', 1),
(352, 1, 284, '2022-02-03 14:50:05', 1, '2022-02-03 14:50:05', 1),
(352, 109, 285, '2022-02-03 14:50:05', 1, '2022-02-03 14:50:05', 1),
(353, 1, 286, '2022-02-03 14:57:24', 1, '2022-02-03 14:57:24', 1),
(353, 109, 287, '2022-02-03 14:57:24', 1, '2022-02-03 14:57:24', 1),
(354, 1, 288, '2022-02-23 20:15:01', 1, '2022-02-23 20:15:01', 1),
(355, 1, 289, '2022-03-02 12:54:13', 1, '2022-03-02 12:54:13', 1),
(355, 2, 290, '2022-03-02 12:54:13', 1, '2022-03-02 12:54:13', 1),
(355, 109, 291, '2022-03-02 12:54:13', 1, '2022-03-02 12:54:13', 1),
(356, 1, 292, '2022-03-03 15:40:05', 1, '2022-03-03 15:40:05', 1),
(356, 109, 293, '2022-03-03 15:40:05', 1, '2022-03-03 15:40:05', 1),
(357, 1, 294, '2022-03-03 15:40:50', 1, '2022-03-03 15:40:50', 1),
(357, 2, 295, '2022-03-03 15:40:50', 1, '2022-03-03 15:40:50', 1),
(357, 109, 296, '2022-03-03 15:40:50', 1, '2022-03-03 15:40:50', 1),
(358, 1, 297, '2022-03-03 15:41:11', 1, '2022-03-03 15:41:11', 1),
(358, 109, 298, '2022-03-03 15:41:11', 1, '2022-03-03 15:41:11', 1),
(359, 1, 299, '2022-03-03 15:41:39', 1, '2022-03-03 15:41:39', 1),
(359, 109, 300, '2022-03-03 15:41:39', 1, '2022-03-03 15:41:39', 1),
(360, 1, 301, '2022-03-03 15:42:14', 1, '2022-03-03 15:42:14', 1),
(360, 109, 302, '2022-03-03 15:42:14', 1, '2022-03-03 15:42:14', 1),
(361, 1, 303, '2022-03-03 15:42:43', 1, '2022-03-03 15:42:43', 1),
(361, 109, 304, '2022-03-03 15:42:43', 1, '2022-03-03 15:42:43', 1),
(362, 1, 305, '2022-03-03 19:17:59', 1, '2022-03-03 19:17:59', 1),
(362, 2, 306, '2022-03-03 19:17:59', 1, '2022-03-03 19:17:59', 1),
(362, 3, 307, '2022-03-03 19:17:59', 1, '2022-03-03 19:17:59', 1),
(362, 99, 308, '2022-03-03 19:17:59', 1, '2022-03-03 19:17:59', 1),
(362, 109, 309, '2022-03-03 19:17:59', 1, '2022-03-03 19:17:59', 1),
(363, 1, 310, '2022-03-03 22:48:39', 1, '2022-03-03 22:48:39', 1),
(363, 2, 311, '2022-03-03 22:48:39', 1, '2022-03-03 22:48:39', 1),
(363, 109, 312, '2022-03-03 22:48:39', 1, '2022-03-03 22:48:39', 1),
(364, 1, 313, '2022-03-03 23:01:12', 1, '2022-03-03 23:01:12', 1),
(364, 2, 314, '2022-03-03 23:01:12', 1, '2022-03-03 23:01:12', 1),
(364, 109, 315, '2022-03-03 23:01:12', 1, '2022-03-03 23:01:12', 1),
(327, 2, 316, '2022-03-03 23:11:01', 1, '2022-03-03 23:11:01', 1),
(365, 1, 317, '2022-04-02 11:03:11', 1, '2022-04-02 11:03:11', 1),
(365, 2, 318, '2022-04-02 11:03:11', 1, '2022-04-02 11:03:11', 1),
(365, 109, 319, '2022-04-02 11:03:11', 1, '2022-04-02 11:03:11', 1),
(366, 1, 320, '2022-04-02 11:25:18', 1, '2022-04-02 11:25:18', 1),
(366, 2, 321, '2022-04-02 11:25:18', 1, '2022-04-02 11:25:18', 1),
(366, 109, 322, '2022-04-02 11:25:18', 1, '2022-04-02 11:25:18', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `sheetelementinclusion`
--

DROP TABLE IF EXISTS `sheetelementinclusion`;
CREATE TABLE IF NOT EXISTS `sheetelementinclusion` (
  `IDParentSheetElement` int(11) NOT NULL,
  `IDChildSheetElement` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `sheetelementinclusion`
--

INSERT INTO `sheetelementinclusion` (`IDParentSheetElement`, `IDChildSheetElement`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
(89, 94, 1, '2021-12-19 18:46:35', 1, '2021-12-19 18:46:35', 1),
(89, 95, 2, '2021-12-19 19:07:41', 1, '2021-12-19 19:07:41', 1),
(82, 96, 3, '2021-12-19 19:10:18', 1, '2021-12-19 19:10:18', 1),
(83, 97, 4, '2021-12-19 19:11:12', 1, '2021-12-19 19:11:12', 1),
(85, 97, 5, '2021-12-19 19:11:12', 1, '2021-12-19 19:11:12', 1),
(84, 98, 6, '2021-12-19 19:11:52', 1, '2021-12-19 19:11:52', 1),
(80, 99, 7, '2021-12-19 19:12:27', 1, '2021-12-19 19:12:27', 1),
(100, 101, 8, '2021-12-19 19:15:56', 1, '2021-12-19 19:15:56', 1),
(81, 102, 9, '2021-12-19 19:16:36', 1, '2021-12-19 19:16:36', 1),
(80, 102, 10, '2021-12-19 19:16:36', 1, '2021-12-19 19:16:36', 1),
(100, 103, 11, '2021-12-19 19:17:18', 1, '2021-12-19 19:17:18', 1),
(81, 104, 12, '2021-12-19 19:17:48', 1, '2021-12-19 19:17:48', 1),
(82, 105, 13, '2021-12-19 19:18:26', 1, '2021-12-19 19:18:26', 1),
(87, 106, 14, '2021-12-19 19:18:54', 1, '2021-12-19 19:18:54', 1),
(86, 107, 15, '2021-12-19 19:19:23', 1, '2021-12-19 19:19:23', 1),
(82, 108, 16, '2021-12-19 19:19:59', 1, '2021-12-19 19:19:59', 1),
(82, 109, 17, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
(81, 109, 18, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
(100, 109, 19, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
(84, 109, 20, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
(79, 109, 21, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
(83, 109, 22, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
(85, 109, 23, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
(86, 109, 24, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
(87, 110, 25, '2021-12-19 19:22:02', 1, '2021-12-19 19:22:02', 1),
(79, 111, 26, '2021-12-19 19:22:40', 1, '2021-12-19 19:22:40', 1),
(79, 112, 27, '2021-12-19 19:23:15', 1, '2021-12-19 19:23:15', 1),
(86, 112, 28, '2021-12-19 19:23:15', 1, '2021-12-19 19:23:15', 1),
(79, 113, 29, '2021-12-19 19:23:39', 1, '2021-12-19 19:23:39', 1),
(85, 113, 30, '2021-12-19 19:23:39', 1, '2021-12-19 19:23:39', 1),
(100, 114, 31, '2021-12-19 19:24:10', 1, '2021-12-19 19:24:10', 1),
(80, 115, 32, '2021-12-19 19:24:45', 1, '2021-12-19 19:24:45', 1),
(82, 116, 33, '2021-12-19 19:25:14', 1, '2021-12-19 19:25:14', 1),
(82, 117, 34, '2021-12-19 19:26:25', 1, '2021-12-19 19:26:25', 1),
(83, 117, 35, '2021-12-19 19:26:25', 1, '2021-12-19 19:26:25', 1),
(83, 118, 36, '2021-12-19 19:27:02', 1, '2021-12-19 19:27:02', 1),
(85, 118, 37, '2021-12-19 19:27:02', 1, '2021-12-19 19:27:02', 1),
(82, 119, 38, '2021-12-19 19:27:36', 1, '2021-12-19 19:27:36', 1),
(81, 120, 39, '2021-12-19 19:28:27', 1, '2021-12-19 19:28:27', 1),
(100, 120, 40, '2021-12-19 19:28:27', 1, '2021-12-19 19:28:27', 1),
(79, 120, 41, '2021-12-19 19:28:27', 1, '2021-12-19 19:28:27', 1),
(86, 120, 42, '2021-12-19 19:28:27', 1, '2021-12-19 19:28:27', 1),
(81, 121, 43, '2021-12-19 19:29:31', 1, '2021-12-19 19:29:31', 1),
(100, 121, 44, '2021-12-19 19:29:31', 1, '2021-12-19 19:29:31', 1),
(84, 121, 45, '2021-12-19 19:29:31', 1, '2021-12-19 19:29:31', 1),
(79, 121, 46, '2021-12-19 19:29:31', 1, '2021-12-19 19:29:31', 1),
(85, 121, 47, '2021-12-19 19:29:31', 1, '2021-12-19 19:29:31', 1),
(86, 121, 48, '2021-12-19 19:29:31', 1, '2021-12-19 19:29:31', 1),
(82, 122, 49, '2021-12-19 19:30:27', 1, '2021-12-19 19:30:27', 1),
(83, 122, 50, '2021-12-19 19:30:27', 1, '2021-12-19 19:30:27', 1),
(87, 123, 51, '2021-12-19 19:30:59', 1, '2021-12-19 19:30:59', 1),
(81, 124, 52, '2021-12-19 19:31:54', 1, '2021-12-19 19:31:54', 1),
(100, 124, 53, '2021-12-19 19:31:54', 1, '2021-12-19 19:31:54', 1),
(85, 124, 54, '2021-12-19 19:31:54', 1, '2021-12-19 19:31:54', 1),
(86, 124, 55, '2021-12-19 19:31:54', 1, '2021-12-19 19:31:54', 1),
(86, 125, 56, '2021-12-19 19:32:29', 1, '2021-12-19 19:32:29', 1),
(83, 125, 57, '2021-12-19 19:32:29', 1, '2021-12-19 19:32:29', 1),
(84, 126, 58, '2021-12-19 19:32:59', 1, '2021-12-19 19:32:59', 1),
(85, 126, 59, '2021-12-19 19:32:59', 1, '2021-12-19 19:32:59', 1),
(80, 127, 60, '2021-12-19 19:33:35', 1, '2021-12-19 19:33:35', 1),
(87, 127, 61, '2021-12-19 19:33:35', 1, '2021-12-19 19:33:35', 1),
(87, 128, 62, '2021-12-19 19:33:57', 1, '2021-12-19 19:33:57', 1),
(79, 129, 63, '2021-12-19 19:34:30', 1, '2021-12-19 19:34:30', 1),
(84, 129, 64, '2021-12-19 19:34:30', 1, '2021-12-19 19:34:30', 1),
(81, 130, 65, '2021-12-19 19:35:42', 1, '2021-12-19 19:35:42', 1),
(100, 130, 66, '2021-12-19 19:35:42', 1, '2021-12-19 19:35:42', 1),
(84, 130, 67, '2021-12-19 19:35:42', 1, '2021-12-19 19:35:42', 1),
(79, 130, 68, '2021-12-19 19:35:42', 1, '2021-12-19 19:35:42', 1),
(85, 130, 69, '2021-12-19 19:35:42', 1, '2021-12-19 19:35:42', 1),
(86, 130, 70, '2021-12-19 19:35:42', 1, '2021-12-19 19:35:42', 1),
(84, 131, 71, '2021-12-19 19:36:24', 1, '2021-12-19 19:36:24', 1),
(85, 131, 72, '2021-12-19 19:36:24', 1, '2021-12-19 19:36:24', 1),
(80, 132, 73, '2021-12-19 19:37:01', 1, '2021-12-19 19:37:01', 1),
(80, 133, 74, '2021-12-19 19:37:20', 1, '2021-12-19 19:37:20', 1),
(87, 134, 75, '2021-12-19 19:37:57', 1, '2021-12-19 19:37:57', 1),
(87, 135, 76, '2021-12-19 19:38:17', 1, '2021-12-19 19:38:17', 1),
(80, 136, 77, '2021-12-19 19:38:41', 1, '2021-12-19 19:38:41', 1),
(80, 137, 78, '2021-12-19 19:39:02', 1, '2021-12-19 19:39:02', 1),
(87, 138, 79, '2021-12-19 19:39:26', 1, '2021-12-19 19:39:26', 1),
(81, 139, 80, '2021-12-19 19:39:55', 1, '2021-12-19 19:39:55', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `sheetelements`
--

DROP TABLE IF EXISTS `sheetelements`;
CREATE TABLE IF NOT EXISTS `sheetelements` (
  `Name` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Icon` varchar(255) NOT NULL,
  `Min` int(11) NOT NULL,
  `Max` int(11) NOT NULL,
  `Cost` int(11) NOT NULL,
  `IDType` int(11) NOT NULL,
  `IDReferenceSheetElement` int(11) NOT NULL DEFAULT -1,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=141 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `sheetelements`
--

INSERT INTO `sheetelements` (`Name`, `Description`, `Icon`, `Min`, `Max`, `Cost`, `IDType`, `IDReferenceSheetElement`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Rapid', '...', './img/default.png', 0, 0, 0, 3, 3, 95, '2021-12-19 19:07:41', 1, '2021-12-19 19:07:41', 1),
('Forza', '...', './img/default.png', 0, 10, 10, 1, -1, 2, '2021-12-19 01:04:46', 1, '2021-12-19 01:04:46', 1),
('Destrezza', '...', './img/default.png', 0, 10, 10, 1, -1, 3, '2021-12-19 01:16:28', 1, '2021-12-19 01:16:28', 1),
('Costituzione', '...', './img/default.png', 0, 10, 10, 1, -1, 4, '2021-12-19 01:16:41', 1, '2021-12-19 01:16:41', 1),
('Carisma', '...', './img/default.png', 0, 10, 10, 1, -1, 5, '2021-12-19 01:17:02', 1, '2021-12-19 01:17:02', 1),
('Volontà', '...', './img/default.png', 0, 10, 10, 1, -1, 6, '2021-12-19 01:17:16', 1, '2021-12-19 01:17:16', 1),
('Intelligenza', '...', './img/default.png', 0, 10, 10, 1, -1, 7, '2021-12-19 01:17:26', 1, '2021-12-19 01:17:26', 1),
('Comb. Armi da Fuoco Leggere', '...', './img/default.png', 0, 20, 5, 2, 3, 8, '2021-12-19 01:18:54', 1, '2021-12-19 02:12:29', 0),
('Comb. Armi Bianche', '...', './img/default.png', 0, 20, 5, 2, 3, 9, '2021-12-19 01:19:13', 1, '2021-12-19 02:15:06', 0),
('Comb. Mani Nude', '...', './img/default.png', 0, 20, 5, 2, 2, 10, '2021-12-19 01:19:27', 1, '2021-12-19 02:15:19', 0),
('Guidare Veicoli', '...', './img/default.png', 0, 20, 5, 2, 3, 11, '2021-12-19 01:19:40', 1, '2021-12-19 02:15:34', 0),
('Pilotare Goliath', '...', './img/default.png', 0, 20, 5, 2, 3, 12, '2021-12-19 01:19:56', 1, '2021-12-19 02:15:46', 0),
('Pilotare Droni', '...', './img/default.png', 0, 20, 5, 2, 3, 13, '2021-12-19 01:20:09', 1, '2021-12-19 02:16:03', 0),
('Pilotare Velivoli', '...', './img/default.png', 0, 20, 5, 2, 3, 14, '2021-12-19 01:20:20', 1, '2021-12-19 02:16:09', 0),
('Furtività', '...', './img/default.png', 0, 20, 5, 2, 3, 15, '2021-12-19 01:20:32', 1, '2021-12-19 02:16:19', 0),
('Ateltica', '...', './img/default.png', 0, 20, 5, 2, 3, 16, '2021-12-19 01:20:40', 1, '2021-12-19 02:16:26', 0),
('Astronavigazione', '...', './img/default.png', 0, 20, 5, 2, 7, 17, '2021-12-19 01:22:56', 1, '2021-12-19 02:20:55', 0),
('Addestramento 0 G', '...', './img/default.png', 0, 20, 5, 2, 3, 18, '2021-12-19 01:23:08', 1, '2021-12-19 02:16:41', 0),
('Comb. Armi da fuoco Pesanti', '...', './img/default.png', 0, 20, 5, 2, 3, 19, '2021-12-19 01:23:24', 1, '2021-12-19 02:16:55', 0),
('Resistenza alla Fatica', '...', './img/default.png', 0, 20, 5, 2, 4, 20, '2021-12-19 01:23:36', 1, '2021-12-19 02:17:23', 0),
('Uso Jet-Pack', '...', './img/default.png', 0, 20, 5, 2, 3, 21, '2021-12-19 01:23:47', 1, '2021-12-19 02:17:07', 0),
('Resistenza al Dolore', '...', './img/default.png', 0, 20, 5, 2, 6, 22, '2021-12-19 01:23:59', 1, '2021-12-19 02:20:04', 0),
('Uso Sistemi d\'Arma Integrati', '...', './img/default.png', 0, 20, 5, 2, 7, 23, '2021-12-19 01:24:11', 1, '2021-12-19 02:21:10', 0),
('Uso Sensori Integrati', '...', './img/default.png', 0, 20, 5, 2, 7, 24, '2021-12-19 01:24:22', 1, '2021-12-19 02:21:29', 0),
('Conoscenza Esplosivi', '...', './img/default.png', 0, 20, 5, 2, 7, 25, '2021-12-19 01:24:33', 1, '2021-12-19 02:21:36', 0),
('Primo Soccorso', '...', './img/default.png', 0, 20, 5, 2, 7, 26, '2021-12-19 01:24:45', 1, '2021-12-19 02:21:48', 0),
('Tattiche di Combattimento', '...', './img/default.png', 0, 20, 5, 2, 7, 27, '2021-12-19 01:25:00', 1, '2021-12-19 02:22:00', 0),
('Leadership', '...', './img/default.png', 0, 20, 5, 2, 5, 28, '2021-12-19 01:25:19', 1, '2021-12-19 02:17:48', 0),
('Navigazione Terrestre', '...', './img/default.png', 0, 20, 5, 2, 7, 29, '2021-12-19 01:25:31', 1, '2021-12-19 02:22:16', 0),
('Medicina a Zero G', '...', './img/default.png', 0, 20, 5, 2, 7, 30, '2021-12-19 01:25:43', 1, '2021-12-19 02:22:25', 0),
('Medi-Chirurgia', '...', './img/default.png', 0, 20, 5, 2, 7, 31, '2021-12-19 01:25:56', 1, '2021-12-19 02:22:31', 0),
('Medicina Implantistica', '...', './img/default.png', 0, 20, 5, 2, 7, 32, '2021-12-19 01:26:11', 1, '2021-12-19 02:22:38', 0),
('Psicologia', '...', './img/default.png', 0, 20, 5, 2, 7, 33, '2021-12-19 01:26:23', 1, '2021-12-19 02:22:44', 0),
('Xeno-Psicologia', '...', './img/default.png', 0, 20, 5, 2, 7, 34, '2021-12-19 01:26:36', 1, '2021-12-19 02:22:50', 0),
('Xeno-Medi-Chirurgia', '...', './img/default.png', 0, 20, 5, 2, 7, 35, '2021-12-19 01:26:48', 1, '2021-12-19 02:22:55', 0),
('Conoscenza Terra-Formazione', '...', './img/default.png', 0, 20, 5, 2, 7, 36, '2021-12-19 01:27:00', 1, '2021-12-19 02:23:02', 0),
('Xeno-Biologia', '...', './img/default.png', 0, 20, 5, 2, 7, 37, '2021-12-19 01:27:11', 1, '2021-12-19 02:23:10', 0),
('Xeno-Botanica', '...', './img/default.png', 0, 20, 5, 2, 7, 38, '2021-12-19 01:27:23', 1, '2021-12-19 02:23:15', 0),
('Ingegneria Aerospaziale', '...', './img/default.png', 0, 20, 5, 2, 7, 39, '2021-12-19 01:27:35', 1, '2021-12-19 02:23:20', 0),
('Ingegneria Meccatronica', '...', './img/default.png', 0, 20, 5, 2, 7, 40, '2021-12-19 01:27:47', 1, '2021-12-19 02:23:26', 0),
('Xeno-Ingegneria', '...', './img/default.png', 0, 20, 5, 2, 7, 41, '2021-12-19 01:28:00', 1, '2021-12-19 02:23:32', 0),
('Riparare', '...', './img/default.png', 0, 20, 5, 2, 7, 42, '2021-12-19 01:28:21', 1, '2021-12-19 02:23:38', 0),
('Programmazione Avanzata', '...', './img/default.png', 0, 20, 5, 2, 7, 43, '2021-12-19 01:28:31', 1, '2021-12-19 02:23:45', 0),
('Xeno-Programmazione', '...', './img/default.png', 0, 20, 5, 2, 7, 44, '2021-12-19 01:28:42', 1, '2021-12-19 02:23:52', 0),
('Hacking', '...', './img/default.png', 0, 20, 5, 2, 7, 45, '2021-12-19 01:28:52', 1, '2021-12-19 02:23:59', 0),
('Investigare', '...', './img/default.png', 0, 20, 5, 2, 7, 46, '2021-12-19 01:29:02', 1, '2021-12-19 02:24:06', 0),
('Profiling', '...', './img/default.png', 0, 20, 5, 2, 7, 47, '2021-12-19 01:29:15', 1, '2021-12-19 02:24:15', 0),
('Intrattenere', '...', './img/default.png', 0, 20, 5, 2, 5, 48, '2021-12-19 01:29:25', 1, '2021-12-19 02:18:06', 0),
('Intimidire', '...', './img/default.png', 0, 20, 5, 2, 5, 49, '2021-12-19 01:29:35', 1, '2021-12-19 02:18:21', 0),
('Socializzare', '...', './img/default.png', 0, 20, 5, 2, 5, 50, '2021-12-19 01:29:44', 1, '2021-12-19 02:18:33', 0),
('Conoscenza Bassifondi', '...', './img/default.png', 0, 20, 5, 2, 5, 51, '2021-12-19 01:29:54', 1, '2021-12-19 02:19:05', 0),
('Mascherare', '...', './img/default.png', 0, 20, 5, 2, 5, 52, '2021-12-19 01:30:15', 1, '2021-12-19 02:19:18', 0),
('Percezione', '...', './img/default.png', 0, 20, 5, 2, 7, 53, '2021-12-19 01:30:20', 1, '2021-12-19 02:24:22', 0),
('Sopravvivenza', '...', './img/default.png', 0, 20, 5, 2, 6, 54, '2021-12-19 01:30:30', 1, '2021-12-19 02:20:29', 0),
('Med Resercher', 'il tuo personaggio è un medico ricercatore, laureato presso le università federali, la sua missione, portare benessere tra i coloni e studiare le forme di vita aliene, sia animali che vegetali,catalogarle e trovarne un utilizzo in seno alla federazione, oltre ad aiutare i Tech Resercher nella loro missione di terraformazione.', '/img/sheetelement/Med%20Resercher[1].png', 0, 0, 0, 7, -1, 80, '2021-12-19 14:01:21', 1, '2022-03-06 14:13:10', 1),
('Scout', '<p>Il tuo personaggio è un cacciatore, battitore di piste ed esploratore; è abituato ad operare su pianeti e sugli esopianeti della fascia esterna, abile nel combattimento a distanza e ravvicinato oltre che alla guida dei rover su terreni più impervi.</p>', '/img/sheetelement/Scout[1].png', 0, 0, 0, 7, -1, 79, '2021-12-19 13:46:49', 1, '2022-03-06 14:12:43', 1),
('Combat Medic', 'il tuo personaggio è addestrato al recupero dei feriti nelle zone di combattimento, che il suo maestro sia stata l\'accademia o la strada, sa destreggiarsi in questo in tutti gli ambienti, che esse siano lontani campi di battaglia su esopianeti inesplorati o nel dedalo di acciaio di una stazione orbitale o nave spaziale.', '/img/sheetelement/Combat%20Medic[1].png', 0, 0, 0, 7, -1, 81, '2021-12-19 14:02:00', 1, '2022-03-06 14:14:01', 1),
('Agent', 'il tuo personaggio è un abile detective, che sia in forza alla pubblica sicurezza federale o che sia una abile investigatore privato, sa destreggiarsi nel tessuto urbano di un pianeta o di una stazione orbitale, conosce la gente giusta e sa non dare nell\'occhio, se qualcuno non canta sa come fargli sciogliere la lingua, si esatto sei uno sbirro.', '/img/sheetelement/Agent[1].jpg', 0, 0, 0, 7, -1, 82, '2021-12-19 14:02:22', 1, '2022-03-06 14:14:27', 1),
('Space Cowboy', 'il tuo personaggio è un cacciatore di taglie regolarmente iscritto al registro federale, sei il lungo e brutale braccio della legge, dove essa non arriva, abile nel combattimento corpo a copro ed a distanza, la tua seconda casa &#232; la tua navetta che usi come un moderno cavallo del vecchio west.', '/img/sheetelement/Space%20Cowboy[1].png', 0, 0, 0, 7, -1, 83, '2021-12-19 14:02:46', 1, '2022-03-06 14:14:52', 1),
('Goliath Pilot', 'Il tuo personaggio è un abile pilota di goliath, che sia stato addestrato nella flotta o abbia imparato da solo, alla guida del suo mech, sulla superficie d un pianeta o esopianeta, o durante gli sbarchi orbitali,non ha rivali.', '/img/sheetelement/Goliath%20Pilot[1].jpg', 0, 0, 0, 7, -1, 84, '2021-12-19 14:03:09', 1, '2022-03-06 14:15:19', 1),
('Star Pilot', 'il tuo personaggio è un abile pilota, che sia stato addestrato nella flotta o abbia imparato da solo, una cosa è certa, ai comandi di una navetta o di un caccia, che sia nel vuoto cosmico o nell\'atmosfera di un pianeta od esopianeta non ha rivali', '/img/sheetelement/Star%20Pilot[1].png', 0, 0, 0, 7, -1, 85, '2021-12-19 14:03:46', 1, '2022-03-06 14:16:44', 1),
('Star Warrior', 'il tuo personaggio è un marine federale o un mercenario abituato a combattere su pianeti ed esopianeti e nel freddo vuoto dello spazio esterno tra gli asteroidi o in rocamboleschi arrembaggi e combattimenti all\'ultimo uomo.', '/img/sheetelement/Star%20Warrior[1].png', 0, 0, 0, 7, -1, 86, '2021-12-19 14:04:08', 1, '2022-03-06 14:17:11', 1),
('Tech Resercher', 'il tuo personaggio è un tecnico ricercatore,laureato presso una delle università federali, la tua missione portare le nuove colonie operative e terraformare gli esopianeti, recuperare e studiare i manufatti Xeno e scoprire i loro segreti per inglobarli nelle tecnologie federali.', '/img/sheetelement/Tech%20Resercher[1].jpg', 0, 0, 0, 7, -1, 87, '2021-12-19 14:04:46', 1, '2022-03-06 14:17:44', 1),
('Earther', 'Il personaggio &#232; nato e cresciuto sulla terra o su di un pianete, o grande pianeta, terra-formato.<div>Il suo fisico sopporta le lunghe fatiche o i grandi sforzi prolungati e si adatta al meglio in tutte le situazioni che gli si presentano davanti.<br><div>Abituato a respirare liberamente ed a far vagare lo sguardo sino agli orizzonti, trova particolarmente snervante i lunghi periodi passati in orbita senza possibilit&#224; di una discesa su di un pianeta.</div></div>', '/img/sheetelement/Earther[1].png', 0, 0, 0, 6, -1, 88, '2021-12-19 16:46:35', 1, '2022-03-06 14:03:20', 1),
('Spacer', 'Nato e cresciuto nelle stazioni orbitali, astronavi, planetoidi o lune &#232; abituato ad una gravit&#224; altalenante.<div>Per la sua assuefazione alla vita in orbita la struttura muscolare e scheletrica di uno Spacer mal sopporta le fatiche prolungate, mentre&#160; il poter spaziare con lo sguardo da orizzonte ad orizzonte su di un pianeta dona loro un senso di straniamento; i<span>n compenso tutti gli Spacer sono molto agili.</span></div><div><br></div>', '/img/sheetelement/Spacer[1].png', 0, 0, 0, 6, -1, 89, '2021-12-19 16:48:39', 1, '2022-03-06 14:03:53', 1),
('Slim', '...', './img/default.png', 0, 0, 0, 3, 4, 94, '2021-12-19 18:45:50', 1, '2021-12-19 18:46:07', 1),
('3rd Grade', '...', './img/default.png', 0, 0, 0, 4, 49, 96, '2021-12-19 19:10:18', 1, '2021-12-19 19:10:18', 1),
('Ace High', '...', './img/default.png', 0, 0, 0, 4, 14, 97, '2021-12-19 19:11:12', 1, '2021-12-19 19:11:12', 1),
('Armored Pilot', '...', './img/default.png', 0, 0, 0, 4, 12, 98, '2021-12-19 19:11:52', 1, '2021-12-19 19:11:52', 1),
('Cyber System', '...', './img/default.png', 0, 0, 0, 4, 32, 99, '2021-12-19 19:12:27', 1, '2021-12-19 19:12:27', 1),
('Combat Sapper', '...', '/img/sheetelement/Combat%20Sapper[1].png', 0, 0, 0, 7, -1, 100, '2021-12-19 19:14:51', 1, '2022-03-06 14:18:10', 1),
('Demolition Man', '...', './img/default.png', 0, 0, 0, 4, 25, 101, '2021-12-19 19:15:56', 1, '2021-12-19 19:15:56', 1),
('Doc', '...', './img/default.png', 0, 0, 0, 4, 31, 102, '2021-12-19 19:16:36', 1, '2021-12-19 19:16:36', 1),
('Drone Master', '...', './img/default.png', 0, 0, 0, 4, 13, 103, '2021-12-19 19:17:18', 1, '2021-12-19 19:17:18', 1),
('E.R', '...', './img/default.png', 0, 0, 0, 4, 26, 104, '2021-12-19 19:17:48', 1, '2021-12-19 19:17:48', 1),
('Eagle Eye', '...', './img/default.png', 0, 0, 0, 4, 53, 105, '2021-12-19 19:18:26', 1, '2021-12-19 19:18:26', 1),
('Electro Man', '...', './img/default.png', 0, 0, 0, 4, 40, 106, '2021-12-19 19:18:54', 1, '2021-12-19 19:18:54', 1),
('Field Operator', '...', './img/default.png', 0, 0, 0, 4, 27, 107, '2021-12-19 19:19:23', 1, '2021-12-19 19:19:23', 1),
('Ghost', '...', './img/default.png', 0, 0, 0, 4, 15, 108, '2021-12-19 19:19:59', 1, '2021-12-19 19:19:59', 1),
('Gunslinger', '...', './img/default.png', 0, 0, 0, 4, 8, 109, '2021-12-19 19:21:25', 1, '2021-12-19 19:21:25', 1),
('Hacker-man', '...', './img/default.png', 0, 0, 0, 4, 45, 110, '2021-12-19 19:22:02', 1, '2021-12-19 19:22:02', 1),
('Hot Road', '...', './img/default.png', 0, 0, 0, 4, 11, 111, '2021-12-19 19:22:40', 1, '2021-12-19 19:22:40', 1),
('Long Shot', '...', './img/default.png', 0, 0, 0, 4, 19, 112, '2021-12-19 19:23:15', 1, '2021-12-19 19:23:15', 1),
('Man of the Wild', '...', './img/default.png', 0, 0, 0, 4, 54, 113, '2021-12-19 19:23:39', 1, '2021-12-19 19:23:39', 1),
('McGyver', '...', './img/default.png', 0, 0, 0, 4, 42, 114, '2021-12-19 19:24:10', 1, '2021-12-19 19:24:10', 1),
('Mind Blower', '...', './img/default.png', 0, 0, 0, 4, 33, 115, '2021-12-19 19:24:45', 1, '2021-12-19 19:24:45', 1),
('Mind Hunter', '...', './img/default.png', 0, 0, 0, 4, 47, 116, '2021-12-19 19:25:14', 1, '2021-12-19 19:25:14', 1),
('Moobster', '...', './img/default.png', 0, 0, 0, 4, 51, 117, '2021-12-19 19:26:25', 1, '2021-12-19 19:26:25', 1),
('Navigator', '...', './img/default.png', 0, 0, 0, 4, 17, 118, '2021-12-19 19:27:02', 1, '2021-12-19 19:27:02', 1),
('Poker Face', '...', './img/default.png', 0, 0, 0, 4, 52, 119, '2021-12-19 19:27:36', 1, '2021-12-19 19:27:36', 1),
('Rocket Man', '...', './img/default.png', 0, 0, 0, 4, 21, 120, '2021-12-19 19:28:27', 1, '2021-12-19 19:28:27', 1),
('Ronin', '...', './img/default.png', 0, 0, 0, 4, 9, 121, '2021-12-19 19:29:31', 1, '2021-12-19 19:29:31', 1),
('Sherlock', '...', './img/default.png', 0, 0, 0, 4, 46, 122, '2021-12-19 19:30:27', 1, '2021-12-19 19:30:27', 1),
('Space tech', '...', './img/default.png', 0, 0, 0, 4, 39, 123, '2021-12-19 19:30:59', 1, '2021-12-19 19:30:59', 1),
('Star Man', '...', './img/default.png', 0, 0, 0, 4, 18, 124, '2021-12-19 19:31:54', 1, '2021-12-19 19:31:54', 1),
('Sucker Punch', '...', './img/default.png', 0, 0, 0, 4, 10, 125, '2021-12-19 19:32:29', 1, '2021-12-19 19:32:29', 1),
('Systemist', '...', './img/default.png', 0, 0, 0, 4, 24, 126, '2021-12-19 19:32:59', 1, '2021-12-19 19:32:59', 1),
('Terraforming', '...', './img/default.png', 0, 0, 0, 4, 36, 127, '2021-12-19 19:33:35', 1, '2021-12-19 19:33:35', 1),
('The Geek', '...', './img/default.png', 0, 0, 0, 4, 43, 128, '2021-12-19 19:33:57', 1, '2021-12-19 19:33:57', 1),
('Trail Blazer', '...', './img/default.png', 0, 0, 0, 4, 29, 129, '2021-12-19 19:34:30', 1, '2021-12-19 19:34:30', 1),
('Unbreakable', '...', './img/default.png', 0, 0, 0, 4, 20, 130, '2021-12-19 19:35:42', 1, '2021-12-19 19:35:42', 1),
('Weapon Master', '...', './img/default.png', 0, 0, 0, 4, 23, 131, '2021-12-19 19:36:24', 1, '2021-12-19 19:36:24', 1),
('Xeno Biologist', '...', './img/default.png', 0, 0, 0, 4, 37, 132, '2021-12-19 19:37:01', 1, '2021-12-19 19:37:01', 1),
('Xeno Doc', '...', './img/default.png', 0, 0, 0, 4, 35, 133, '2021-12-19 19:37:20', 1, '2021-12-19 19:37:20', 1),
('Xeno Geek', '...', './img/default.png', 0, 0, 0, 4, 44, 134, '2021-12-19 19:37:57', 1, '2021-12-19 19:37:57', 1),
('Xeno Hacking', '...', './img/default.png', 0, 0, 0, 4, 44, 135, '2021-12-19 19:38:17', 1, '2021-12-19 19:38:17', 1),
('Xeno Mentalist', '...', './img/default.png', 0, 0, 0, 4, 34, 136, '2021-12-19 19:38:41', 1, '2021-12-19 19:38:41', 1),
('Xeno Plant', '...', './img/default.png', 0, 0, 0, 4, 38, 137, '2021-12-19 19:39:01', 1, '2021-12-19 19:39:02', 1),
('Xeno Tronic', '...', './img/default.png', 0, 0, 0, 4, 41, 138, '2021-12-19 19:39:26', 1, '2021-12-19 19:39:26', 1),
('Zero Doc', '...', './img/default.png', 0, 0, 0, 4, 30, 139, '2021-12-19 19:39:55', 1, '2021-12-19 19:39:55', 1),
('Duster', 'il personaggio &#232; nato su Marte, il grande pianeta&#160; rosso.<div>La popolazione marziana &#232; da sempre abituata al sacrificio ed &#232; cresciuta per centinaia di anni in una societ&#224; spartana con un unico fine, la terra-formazione del pianeta, forti nel fisico e temprati dalla fatica i Duster hanno dovuto affrontare dopo la terra formazione anche la ricostruzione di Marte a seguito della devastazione di 50 anni di dominio Bioroide.</div>', '/img/sheetelement/Duster[1].png', 0, 0, 0, 6, -1, 140, '2022-03-06 14:11:01', 1, '2022-03-06 14:11:01', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `sheetelementstype`
--

DROP TABLE IF EXISTS `sheetelementstype`;
CREATE TABLE IF NOT EXISTS `sheetelementstype` (
  `Name` varchar(255) NOT NULL,
  `Fields` varchar(255) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InsertDate` datetime NOT NULL,
  `IDInsertUser` int(11) NOT NULL,
  `EditDate` datetime NOT NULL,
  `IDEditUser` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `sheetelementstype`
--

INSERT INTO `sheetelementstype` (`Name`, `Fields`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Ability', 'Name, Description, ReferenceSheetElement.Name, AbilitatedForSheetElement, Min, Max, Cost', 1, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('Skill', 'Name, Description, ReferenceSheetElement.Name, AbilitatedForSheetElement, Min, Max, Cost', 2, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('Automatic Bundle', 'Name, Description, ReferenceSheetElement.Name, AbilitatedForSheetElement, Cost', 3, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('Optionals Bundle', 'Name, Description, ReferenceSheetElement.Name, AbilitatedForSheetElement, Cost', 4, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('Race', 'Name, Description, Icon', 6, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('Class', 'Name, Description, ReferenceSheetElement.Name, AbilitatedForSheetElement, Icon', 7, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1);

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
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `storedqueries`
--

INSERT INTO `storedqueries` (`Name`, `Command`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('GetMenu', 'SELECT DISTINCT Menus.MenuName, Menus.Name, Menus.Parent, Menus.IDROute, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM menus INNER JOIN routes ON menus.IDRoute = routes.ID INNER JOIN routespermission ON routes.ID = routespermission.IDRoute WHERE routespermission.IDUserType = ? AND menus.MenuName = ? AND menus.Parent = ? ORDER BY menus.MenuOrder', 1, '2021-08-28 11:31:36', 1, '2021-08-28 11:31:36', 1),
('GetRoutes', 'SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes', 4, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('UserPrinc', 'SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID', 3, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetComponent', 'SELECT component.IDElement, component.Type, component.Columns, component.VerticalOrientation, component.Content, component.ImageName, component.IsClass, component.IDParent, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component JOIN routes ON component.IDRoute = routes.ID JOIN routespermission ON routes.ID = routespermission.IDRoute WHERE CONCAT(routes.Type, \'/\', routes.Func) = ? AND routespermission.IDUserType = ?', 24, '2021-12-07 10:41:23', 1, '2021-12-07 10:41:23', 1),
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
('CountRoute', 'SELECT COUNT(*) as Conteggio FROM Routes', 17, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetComponentFromID', 'SELECT component.IDElement, component.Type, component.Columns, component.VerticalOrientation, component.Content, component.ImageName, component.IsClass, component.IDParent, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component JOIN routes ON component.IDRoute = routes.ID JOIN routespermission ON routes.ID = routespermission.IDRoute WHERE component.ID = ? LIMIT 1', 28, '2021-12-07 10:59:07', 1, '2021-12-07 10:59:07', 1),
('GetComponents', 'SELECT component.IDElement, component.Type, component.Columns, component.VerticalOrientation, component.Content, component.ImageName, component.IsClass, component.IDParent, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component WHERE component.IDParent = ? LIMIT ?, ?', 27, '2021-12-07 14:11:30', 1, '2021-12-07 14:11:30', 1),
('GetRoute', 'SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes LEFT JOIN RoutesPermission ON Routes.ID = RoutesPermission.IDRoute LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID WHERE routes.Package = ? AND routes.Func = ? AND Routes.Type = ? AND Routes.Methods LIKE ? LIMIT 1', 22, '2021-11-27 10:41:59', 1, '2021-11-27 10:41:59', 1),
('GetRouteFromID', 'SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes LEFT JOIN RoutesPermission ON Routes.ID = RoutesPermission.IDRoute LEFT JOIN UserTypes ON RoutesPermission.IDUserType = UserTypes.ID WHERE routes.ID = ? LIMIT 1', 23, '2021-11-27 11:40:09', 1, '2021-11-27 11:40:09', 1),
('GetChildrenComponents', 'SELECT component.IDElement, component.Type, component.Columns, component.VerticalOrientation, component.Content, component.ImageName, component.IsClass, component.IDParent, component.IDRoute, component.ID, component.InsertDate, component.IDInsertUser, component.EditDate, component.IDEditUser FROM component WHERE component.IDParent = ?', 57, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetMenuFromID', 'SELECT menus.MenuName, menus.Name, menus.Parent, menus.IDRoute, menus.MenuOrder, menus.ID, menus.InsertDate, menus.IDInsertUser, menus.EditDate, menus.IDEditUser FROM menus WHERE menus.ID = ? LIMIT 1', 26, '2021-12-07 10:59:07', 1, '2021-12-07 10:59:07', 1),
('AddComponent', 'INSERT INTO component(IDElement, Type, Columns, VerticalOrientation, Content, ImageName, IsClass, IDParent, IDRoute, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?,?,?,?,?,?,?,?,?,NOW(),?,NOW(),?)', 29, '2021-12-08 16:24:52', 1, '2021-12-08 16:24:52', 1),
('GetSheetElement', 'SELECT sheetelements.Name, sheetelements.Description, sheetelements.Icon, sheetelements.Min, sheetelements.Max, sheetelements.Cost, sheetelements.IDType, sheetelementstype.Name, sheetelements.IDReferenceSheetElement, sheetelements.ID, sheetelements.InsertDate, sheetelements.IDInsertUser, sheetelements.EditDate, sheetelements.IDEditUser FROM sheetelements JOIN sheetelementstype ON sheetelements.IDType = sheetelementstype.ID', 30, '2021-12-18 17:41:01', 1, '2021-12-18 17:41:01', 1),
('AddSheetElement', 'INSERT INTO SheetelEments(Name, Icon, Description, Min, Max, Cost, IDType, IDReferenceSheetElement, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NOW(), ?)', 31, '2021-03-20 21:04:03', 1, '2021-04-25 15:51:53', 1),
('GetAbilitatedForSheetElement', 'SELECT sheetelements.Name, sheetelements.Description, sheetelements.Icon, sheetelements.Min, sheetelements.Max, sheetelements.Cost, sheetelements.IDType, sheetelementstype.Name, sheetelements.IDReferenceSheetElement, sheetelements.ID, sheetelements.InsertDate, sheetelements.IDInsertUser, sheetelements.EditDate, sheetelements.IDEditUser FROM sheetelementinclusion JOIN sheetelements on sheetelementinclusion.IDParentSheetElement = sheetelements.ID JOIN sheetelementstype ON sheetelements.IDType = sheetelementstype.ID WHERE sheetelementinclusion.IDChildSheetElement = ?', 32, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddSheetElementAbilitation', 'INSERT INTO sheetelementinclusion (IDParentSheetElement, IDChildSheetElement, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, NOW(), ?, NOW(), ?)', 33, '2021-03-20 21:04:03', 1, '2021-03-27 11:01:40', 1),
('GetSheetElementype', 'SELECT sheetelementstype.Name, sheetelementstype.Fields, sheetelementstype.ID, sheetelementstype.InsertDate, sheetelementstype.IDInsertUser, sheetelementstype.EditDate, sheetelementstype.IDEditUser FROM sheetelementstype', 34, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetCharacters', 'SELECT characters.Name, characters.Icon, characters.Surname, characters.Background, characters.IDUser, characters.ID, characters.InsertDate, characters.IDInsertUser, characters.EditDate, characters.IDEditUser FROM characters', 35, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddCharacter', 'INSERT INTO Characters (Name, Icon, Surname, Background, IDUser, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?, ?, ?, ?, ?, NOW(), ?, NOW(), ?)', 36, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddCharacterValue', 'INSERT INTO CharacterValues (Name, Value, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?, ?, NOW(), ?, NOW(), ?)', 37, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddEquip', 'INSERT INTO Equip (Name, Icon, Description, Price, Size, IDType, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?, ?, ?, ?, ?, ?, NOW(), ?, NOW(), ?)', 38, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddEquipType', 'INSERT INTO EquipTypes (Name, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?, NOW(), ?, NOW(), ?)', 39, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetEquip', 'SELECT equip.Name, equip.Icon, equip.Description, equip.Price, equip.Size, equiptypes.ID, equiptypes.Name, equip.ID, equip.InsertDate, equip.IDInsertUser, equip.EditDate, equip.IDEditUser FROM equip JOIN equiptypes on equip.IDType = equiptypes.ID', 40, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetEquipTypes', 'SELECT equiptypes.Name, equiptypes.ID, equiptypes.InsertDate, equiptypes.IDInsertUser, equiptypes.EditDate, equiptypes.IDEditUser FROM equiptypes', 41, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetTopics', 'SELECT forums.Title, forums.Icon, forums.Closed, forums.IDAuthor, forums.ID, forums.InsertDate, forums.IDInsertUser, forums.EditDate, forums.IDEditUser FROM forums', 42, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetTopicMessages', 'SELECT forummessages.Message, forummessages.IDParent, forummessages.IDAuthor, forummessages.ID, forummessages.InsertDate, forummessages.IDInsertUser, forummessages.EditDate, forummessages.IDEditUser FROM forummessages WHERE forummessages.IDParent = ?', 43, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddTopic', 'INSERT INTO forums(Title, Icon, Closed, IDAuthor, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, NOW(), ?, NOW(), ?)', 44, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddTopicMessage', 'INSERT INTO forummessages(Message, IDParent, IDAuthor, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, NOW(), ?, NOW(), ?)', 45, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetLocations', 'SELECT locations.Name, locations.Description, locations.Image, locations.X, locations.Y, locations.IDParent, locations.HasChat, locations.ID, locations.InsertDate, locations.IDInsertUser, locations.EditDate, locations.IDEditUser FROM locations', 46, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetChatMessages', 'SELECT chatmessages.Message, chatmessages.IDCharacter, chatmessages.IDLocation, chatmessages.Archive, chatmessages.IDMaster, chatmessages.ID, chatmessages.InsertDate, chatmessages.IDInsertUser, chatmessages.EditDate, chatmessages.IDEditUser FROM chatmessages WHERE chatmessages.IDLocation = ?', 47, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('AddLocation', 'INSERT INTO locations(Name, Description, Image, X, Y, IDParent, HasChat, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, ?, ?, ?, NOW(), ?, NOW(), ?)', 48, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('EmptyChat', 'DELETE FROM chatmessages WHERE chatmessages.IDLocation = ?', 49, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00', 0),
('AddLocation', 'INSERT INTO locations(Name, Description, Image, X, Y, IDParent, HasChat, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, ?, ?, ?, NOW(), ?, NOW(), ?)', 50, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('EmptyChat', 'DELETE FROM chatmessages WHERE chatmessages.IDLocation = ?', 51, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('SendChatToValidate', 'UPDATE chatmessages SET chatmessages.Archive = (SELECT CASE WHEN MAX(Archive) IS NULL THEN 1 WHEN MAX(Archive) IS NOT NULL THEN MAX(Archive) + 1 END FROM chatmessages), chatmessages.IDMaster = ? WHERE chatmessages.IDLocation = ?;\r\nINSERT INTO notifications(Description, IDUser, IsRead, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, 0, NOW(), ?, NOW(), ?)', 52, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('ValidateChatMessage', 'UPDATE ChatMessage SET Validated = 1 WHERE Archive = ? AND IDLocation = ?', 53, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetMenuNames', 'SELECT DISTINCT MenuName from menus', 54, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetGuilds', 'SELECT guilds.Name, guilds.Icon, guilds.ID, guilds.InsertDate, guilds.IDInsertUser, guilds.EditDate, guilds.IDEditUser FROM guilds', 55, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1),
('GetGuildCharacters', 'SELECT characters.Name, characters.Icon, characters.Surname, characters.Background, characters.IDUser, characters.ID, characters.InsertDate, characters.IDInsertUser, characters.EditDate, characters.IDEditUser FROM guildmembers JOIN characters ON guildmembers.IDCharacter = characters.ID', 56, '2021-03-20 21:04:03', 1, '2021-03-20 21:04:03', 1);

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
('ghimdalas@gmail.com', '16a7d7a86556c85a393eb602549efe75', '2021-08-12 09:53:39', '2021-09-03 19:03:03', -1, 1, '', 1, '2020-12-28 16:34:51', 1, '2022-05-15 09:21:30', 1),
('admin', '3e17b27820b479f02a3af16533109185', '2021-12-12 22:59:32', '2022-01-24 21:41:38', -1, 1, '', 5, '2021-12-12 22:59:32', 0, '2022-01-24 21:41:38', 0);

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
) ENGINE=MyISAM AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `usertypes`
--

INSERT INTO `usertypes` (`Description`, `ID`, `InsertDate`, `IDInsertUser`, `EditDate`, `IDEditUser`) VALUES
('Admin', 1, '2020-12-28 16:34:17', 1, '2020-12-28 16:34:17', 1),
('User', 2, '2020-12-28 16:34:17', 1, '2020-12-28 16:34:17', 1),
('UserNotVerified', 3, '2020-12-28 16:34:17', 1, '2020-12-28 16:34:17', 1),
('Guest', 99, '2020-12-28 16:34:17', 1, '2020-12-28 16:34:17', 1),
('Master', 109, '2022-02-02 20:00:54', 1, '2022-02-02 20:00:54', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
