-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 13, 2018 at 06:45 PM
-- Server version: 5.7.23-0ubuntu0.18.04.1
-- PHP Version: 7.0.31-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maturity`
--

-- --------------------------------------------------------

--
-- Table structure for table `campagne`
--

CREATE TABLE `campagne` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `state` tinyint(1) UNSIGNED NOT NULL,
  `ft_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `campagne`
--

INSERT INTO `campagne` (`id`, `name`, `date`, `state`, `ft_id`) VALUES
(23, 'Campagne_test_1', '2018-10-01', 0, 10),
(35, 'JOool', '2018-10-08', 0, 10),
(37, 'rty', '2018-10-10', 0, 4),
(38, 'dsqjdqpqd', '2018-10-10', 0, 8),
(46, 'Yes', '2018-10-10', 0, 5),
(48, 'test', '2018-10-11', 0, 2),
(49, 'Testons', '2018-10-12', 0, 5),
(51, 'Test-maturity', '2018-10-12', 0, 4),
(52, 'Hello', '2018-10-13', 0, 8);

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(10) UNSIGNED NOT NULL,
  `wording` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`id`, `wording`) VALUES
(1, 'A - Process: Les bases'),
(2, 'B - Process: Maitriser vos livraisons'),
(3, 'C - Process: Améliorer vos livraisons'),
(4, 'D - Process: Aider les équipes partenaires à améliorer leurs process'),
(5, 'A - Qualité'),
(6, 'B - Qualité'),
(7, 'C - Qualité'),
(8, 'D - Qualité'),
(9, 'E - Qualité'),
(10, 'A - Valeur : Identifier la valeur\r\n'),
(11, 'B - Valeur : Se concentrer sur la valeur'),
(12, 'C - Valeur : Livrer la valeur'),
(13, 'D - Valeur: Optimiser la valeur'),
(14, 'E - Valeur : De la valeur innovante');

-- --------------------------------------------------------

--
-- Table structure for table `ft`
--

CREATE TABLE `ft` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `icon` varchar(30) NOT NULL,
  `theme` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ft`
--

INSERT INTO `ft` (`id`, `name`, `icon`, `theme`) VALUES
(1, 'Accélérer', 'fas fa-exchange-alt', 'pink'),
(2, 'Annonce', 'far fa-newspaper', 'skyblue'),
(3, 'Concrétisation', 'far fa-handshake', 'blue'),
(4, 'Contact', 'fas fa-user', 'orange'),
(5, 'Identité', 'fas fa-fingerprint', 'purple'),
(6, 'Paiement', 'far fa-credit-card', 'grey'),
(7, 'Publicité', 'fas fa-bullhorn', 'green'),
(8, 'Search', 'fas fa-search', 'black'),
(9, 'Tools', 'fas fa-sliders-h', 'brown'),
(10, 'Test', 'fas fa-vial', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(10) UNSIGNED NOT NULL,
  `number` int(10) UNSIGNED NOT NULL,
  `wording` text NOT NULL,
  `url` text NOT NULL,
  `categorie_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `number`, `wording`, `url`, `categorie_id`) VALUES
(1, 1, 'L\'équipe s\'est elle réunie au moins une fois les 2 derniers mois pour améliorer ses méthodes de\r\ntravail ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804777', 1),
(2, 2, 'Votre équipe a t elle une liste connue, priorisée et claire des tâches sur lesquelles elle doit\r\ntravailler ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804784', 1),
(3, 3, 'L\'équipe délivre t elle à ses demandeurs au moins un incrément de service ou produit par mois ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804785', 1),
(4, 1, 'L\'équipe se rencontre t elle de façon régulière pour améliorer ses méthodes de travail et son\r\nefficacité ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804787', 2),
(5, 2, 'Tient on compte des flux de nos différents process de développement ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804788', 2),
(6, 3, 'Le status du sprint est il connu de tous à tout moment ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804789', 2),
(7, 1, 'L\'équipe suit elle un process d\'amélioration continue pour améliorer sa maturité ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804792', 3),
(8, 2, 'Les objectifs fixés sont ils atteignables par l’équipe, ne voit elle pas trop grand ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804793', 3),
(9, 3, 'La livraison d\'incréments se fait elle de façon continue ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804794', 3),
(10, 4, 'Le Bus-Factor de l\'équipe est il supérieur à 1 ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=110592219', 3),
(11, 1, 'L\'équipe prend elle des actions pour aider les équipes partenaires à améliorer leur process ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804801', 4),
(12, 1, 'Le code a des tests unitaires (BE, FE, Mobile)', 'Le code a des tests unitaires (BE, FE, Mobile)', 5),
(13, 2, 'Syntaxe, Code-review +2 et outillage du code', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804806', 5),
(14, 3, 'L\'équipe est autonome pour déployer tous ses services', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804807', 5),
(15, 4, 'On peut installer et configurer les projets de l\'équipe uniquement grace au README file', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804808', 5),
(16, 5, 'Petites PRs, pas de faux approval et disponibilité pour les reviews.', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804809', 5),
(17, 1, 'Des tests automatiques sont inclus dans la CI avant déploiement (BE, FE, Mobile)', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804811', 6),
(18, 2, 'Notre code est clair et suffit à s\'expliquer lui même', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804812', 6),
(19, 3, 'Pas de TODO ou FIXME dans le code sans un ticket associé', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804813', 6),
(20, 4, 'L\'équipe écrit un rapport d\'incident après chaque incident en prod', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804814', 6),
(21, 5, 'On review les PRs d\'autres équipes', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804816', 6),
(22, 1, 'L\'équipe génère des changelog automatiquement', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804819', 7),
(23, 2, 'Un outil de documentation auto est utilisé sur le code', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804820', 7),
(24, 3, 'L\'équipe utilise un outil pour réduire la taille du code (Front End, Mobile)', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804821', 7),
(25, 4, 'L\'équipe tient les SDKs, librairies et les dépendences à jour', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=110599564', 7),
(26, 1, 'Les principales User Stories de l\'équipe ont des tests d\'acceptance', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804823', 8),
(27, 2, 'Boy Scout: on laisse un code encore plus propre après notre passage.', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804824', 8),
(28, 3, 'Les process critiques de l\'équipe sont documentés', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804826', 8),
(29, 4, 'On utilise les \"feature flag\" pour activer les nouvelles features', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804827', 8),
(30, 1, 'Canary Releasing', 'https://confluence.schibsted.io/display/~julien.conan@scmfrance.fr/1.+Canary+Releasing', 9),
(31, 2, 'Team defined Service Level Objectives (SLO) in its services Team has metrics to check\r\ncompliance with the defined SLOs for every deployed service Team has a dashboard with the\r\nservices\' SLOs', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804830', 9),
(32, 3, 'New team members can Onboard only following team\'s documentation', 'https://confluence.schibsted.io/display/~julien.conan@scmfrance.fr/3.+New+team+members+can+Onboard+only+following+team%27s+documentation', 9),
(33, 4, 'Team uses an automatic tool to reduce size of the deliverable (Front End, Mobile)', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804832', 9),
(34, 1, 'L\'équipe connaît-elle ses objectifs du trimestre ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804835', 10),
(35, 2, 'L\'équipe sait-elle qui sont ses clients et quels sont leurs besoins ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804836', 10),
(36, 3, 'L\'équipe suit-elle ses KPIs et propose-t-elle des actions pour les améliorer ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804837', 10),
(37, 1, 'Notre roadmap est-elle alignée avec les objectifs d\'entreprise et priorisée selon les besoins de nos\r\nclients ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804839', 11),
(38, 2, 'Transformez-vous le feedback des clients régulièrement et de façon structurée ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804840', 11),
(39, 3, 'L\'équipe mesure-t-elle l\'effet de ses actions ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804841', 11),
(40, 4, 'L\'équipe a-t-elle un plan à moyen terme sur la valeur qu\'elle délivre à ses clients ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804842', 11),
(41, 1, 'Vérifie-t-on que nos hypothèses délivrent de la valeur à nos clients ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804844', 12),
(42, 2, 'La plupart des livraisons de l\'équipe ont un impact positif sur le business', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804845', 12),
(43, 3, 'Nous réalisons au moins 70% de ce que nous avions prévu sur la roadmap du trimestre', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804846', 12),
(44, 1, 'Est-ce que l\'équipe partage avec les parties prenantes quand il s\'agit de trouver un plan B ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804848\r\n', 13),
(45, 2, 'Est-ce que les plans B améliorent la valeur livrée ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804849', 13),
(46, 3, 'L\'équipe sait-elle comment ses actions impactent les domaines d\'activité ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804850', 13),
(47, 1, 'L\'équipe découvre-t-elle de la valeur qu\'elle ne connaissait pas il y a 6 mois ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804852', 14),
(48, 2, 'L\'équipe a-t-elle les outils et les compétences pour arrêter d\'itérer quand la solution convient ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804853', 14),
(49, 3, 'L\'équipe a-t-elle pris une action pour améliorer l\'orientation valeur d\'une autre équipe pour\r\naméliorer le business de la société ?', 'https://confluence.schibsted.io/pages/viewpage.action?pageId=107804854', 14);

-- --------------------------------------------------------

--
-- Table structure for table `reponse`
--

CREATE TABLE `reponse` (
  `id` int(10) UNSIGNED NOT NULL,
  `wording` tinyint(1) NOT NULL,
  `action` text,
  `campagne_id` int(10) UNSIGNED NOT NULL,
  `question_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reponse`
--

INSERT INTO `reponse` (`id`, `wording`, `action`, `campagne_id`, `question_id`) VALUES
(1, 0, 'Test 1 : Action 1', 23, 1),
(5, 1, '', 23, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campagne`
--
ALTER TABLE `campagne`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_ft` (`ft_id`);

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ft`
--
ALTER TABLE `ft`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_categorie` (`categorie_id`);

--
-- Indexes for table `reponse`
--
ALTER TABLE `reponse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_campagne` (`campagne_id`),
  ADD KEY `fk_question` (`question_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campagne`
--
ALTER TABLE `campagne`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `ft`
--
ALTER TABLE `ft`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT for table `reponse`
--
ALTER TABLE `reponse`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
