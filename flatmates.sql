-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 04 juil. 2024 à 23:18
-- Version du serveur : 8.0.37-0ubuntu0.22.04.3
-- Version de PHP : 8.1.2-1ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `colocation`
--
CREATE DATABASE IF NOT EXISTS `colocation` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `colocation`;

-- --------------------------------------------------------

--
-- Structure de la table `categorys_expense`
--

CREATE TABLE `categorys_expense` (
  `id` int NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categorys_expense`
--

INSERT INTO `categorys_expense` (`id`, `name`) VALUES
(1, 'loyer'),
(2, 'factures'),
(3, 'courses'),
(4, 'credits');

-- --------------------------------------------------------

--
-- Structure de la table `categorys_task`
--

CREATE TABLE `categorys_task` (
  `id` int NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categorys_task`
--

INSERT INTO `categorys_task` (`id`, `name`) VALUES
(1, 'tâches ménagères'),
(2, 'courses'),
(3, 'cuisine'),
(4, 'sortir les poubelles');

-- --------------------------------------------------------

--
-- Structure de la table `expenses`
--

CREATE TABLE `expenses` (
  `id` int NOT NULL,
  `price` double NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_limit` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  `home_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `expenses`
--

INSERT INTO `expenses` (`id`, `price`, `description`, `created_at`, `date_limit`, `status`, `category_id`, `user_id`, `home_id`) VALUES
(19, 427, 'Ut non odit doloremq', '2024-06-18 22:00:00', '1975-06-05 09:53:00', 1, 1, 9, 5),
(20, 527, 'Ut qui voluptatem f', '2024-06-18 22:00:00', '2005-03-26 03:24:00', 1, 1, 9, 5),
(21, 15, 'Eiusmod Nam veniam ', '2024-06-18 22:00:00', '1980-09-01 21:00:00', 1, 3, 9, 5),
(22, 33, 'Sunt quidem consequ', '2024-06-18 22:00:00', '1990-08-15 09:51:00', 1, 4, 9, 5),
(23, 638, 'In delectus veniam', '2024-06-19 22:00:00', '1982-12-14 05:01:00', 1, 1, 9, 5),
(24, 373, 'Do unde repudiandae ', '2024-06-20 22:00:00', '2020-05-06 03:29:00', 1, 3, 9, 5),
(25, 69, 'Debitis harum dolore', '2024-06-27 22:00:00', '2023-04-12 00:01:00', 1, 1, 9, 5),
(26, 149, 'Debitis harum dolore', '2024-06-27 22:00:00', '2023-04-12 00:01:00', 1, 1, 9, 5),
(27, 484, 'Ut nisi perspiciatis', '2024-06-30 22:00:00', '2008-11-07 03:56:00', 1, 1, 9, 5),
(28, 607, 'Consequatur nisi sit', '2024-06-30 22:00:00', '2019-07-20 10:56:00', 0, 4, 21, 5),
(29, 840, 'Itaque dolore enim p', '2024-06-30 22:00:00', '1982-08-09 22:15:00', 1, 2, 9, 5),
(30, 965, 'Qui sunt nostrum nu', '2024-07-03 22:00:00', '1971-04-19 05:43:00', 1, 2, 9, 5),
(31, 45, '', '2024-07-03 22:00:00', '2010-04-06 10:21:00', 0, 2, 10, 5),
(32, 527, 'Ut id ipsa in alias', '2024-07-03 22:00:00', '2008-10-11 16:32:00', 0, 3, 9, 5),
(33, 520, 'Quia voluptas dolore', '2024-07-03 22:00:00', '2024-07-05 09:20:00', 0, 4, 10, 5),
(34, 279, 'Excepteur qui labori', '2024-07-03 22:00:00', '2024-07-05 01:58:00', 0, 4, 9, 5),
(35, 39, 'Ut consectetur repre', '2024-07-03 22:00:00', '2024-07-05 10:33:00', 0, 3, 9, 5);

-- --------------------------------------------------------

--
-- Structure de la table `homes`
--

CREATE TABLE `homes` (
  `id` int NOT NULL,
  `adress` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `homes`
--

INSERT INTO `homes` (`id`, `adress`, `name`, `token`) VALUES
(1, '9 rue Henri Lavedan', 'Playstation', '39207275652048656e7269204c61766564616e'),
(2, '9 rue Henri Lavedan', 'Playstation', '39207275652048656e7269204c61766564616e'),
(3, 'Nisi mollit eos aliq', 'Chandler Pate', '4e697369206d6f6c6c697420656f7320616c6971'),
(4, 'Saepe molestiae debi', 'Francesca Austin', '5361657065206d6f6c6573746961652064656269'),
(5, 'Omnis animi ad numq', 'Rhea French', 'home5'),
(11, 'Ut aperiam dolorem v', 'Amal Ware', '&8DndG'),
(12, 'Esse porro nemo enim', 'Knox Bell', '2z)QGt'),
(13, 'Esse porro nemo enim', 'Knox Bell', 'QOlPXh'),
(14, '9 rue Henri Lavedan', 'Playstation', 'LaaF70');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int NOT NULL,
  `home_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `title`, `content`, `created_at`, `user_id`, `home_id`) VALUES
(3, 'Conference', 'Conference Green IT', '2024-06-16 14:56:15', 10, 5),
(4, 'Cillum dolore quaera', 'Ut et qui neque veli', '2024-06-20 13:16:39', 9, 5),
(16, 'Consequatur dolorib', 'Eiusmod sint et quia', '2024-06-28 12:44:06', 9, 5),
(17, 'Voluptas ab odio ver', 'Neque mollitia quod ', '2024-06-30 09:47:01', 9, 5),
(18, 'Voluptate cumque dol', 'Sit et numquam Nam ', '2024-06-30 15:50:48', 9, 5),
(19, 'Enim voluptas est de', 'At voluptas laborum ', '2024-06-30 15:51:47', 9, 5),
(20, 'Enim voluptas est de', 'At voluptas laborum ', '2024-06-30 15:52:33', 9, 5),
(21, 'Ut qui sed expedita ', 'Repellendus Volupta', '2024-06-30 15:53:50', 9, 5),
(22, 'Sunt similique quae', 'Itaque eum animi nu', '2024-06-30 15:54:41', 9, 5),
(23, 'Ullam aliquip perspi', 'Aut sed quia qui sit', '2024-06-30 15:55:04', 9, 5),
(24, 'Iure labore perspici', 'Tempore voluptatem', '2024-06-30 15:55:19', 9, 5),
(25, 'Sunt doloribus tempo', 'Sit dolor possimus', '2024-07-04 14:57:45', 9, 5);

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` int NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_limit` datetime NOT NULL,
  `status` enum('Pas Fait','En cours','Terminé','') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Pas Fait',
  `priority` set('PAS PRIORITAIRE','PRIORITAIRE','URGENT','') COLLATE utf8mb4_general_ci NOT NULL,
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  `home_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tasks`
--

INSERT INTO `tasks` (`id`, `description`, `created_at`, `date_limit`, `status`, `priority`, `category_id`, `user_id`, `home_id`) VALUES
(45, 'Possimus rem conseq', '2024-06-20 12:28:01', '2001-07-17 23:49:00', 'Terminé', 'URGENT', 4, 9, 5),
(46, 'Numquam pariatur Qu', '2024-06-20 13:23:20', '2024-06-20 10:38:00', 'Terminé', 'URGENT', 2, 10, 5),
(47, 'Consectetur do commo', '2024-06-20 13:24:02', '2024-06-20 06:57:00', 'Terminé', 'PRIORITAIRE', 3, 9, 5),
(55, 'Quo esse soluta alia', '2024-06-20 19:13:31', '2023-10-19 19:22:00', 'Terminé', 'PRIORITAIRE', 2, 9, 5),
(56, 'Ea ut enim sint qua', '2024-06-21 07:27:16', '1986-05-13 00:17:00', 'Terminé', 'PAS PRIORITAIRE', 2, 9, 5),
(57, 'Reiciendis ad aliqui', '2024-06-21 11:45:07', '1981-11-17 12:52:00', 'Terminé', 'URGENT', 2, 9, 5),
(58, 'Fugiat molestiae err', '2024-06-28 12:40:52', '2012-06-22 17:34:00', 'Terminé', 'URGENT', 1, 9, 5),
(59, 'A veritatis iure ips', '2024-07-01 13:40:51', '2022-06-12 05:37:00', 'Terminé', 'PAS PRIORITAIRE', 1, 9, 5),
(60, 'Quibusdam exercitati', '2024-07-01 13:43:35', '1979-04-05 09:41:00', 'Terminé', 'PRIORITAIRE', 4, 9, 5),
(61, 'Enim quibusdam quo l', '2024-07-01 13:51:43', '1999-06-28 00:13:00', 'Terminé', 'PAS PRIORITAIRE', 1, 9, 5),
(62, 'Enim quibusdam quo l', '2024-07-01 13:51:44', '1999-06-28 00:13:00', 'Terminé', 'PAS PRIORITAIRE', 1, 9, 5),
(63, 'Enim quibusdam quo l', '2024-07-01 13:51:44', '1999-06-28 00:13:00', 'Terminé', 'PAS PRIORITAIRE', 1, 9, 5),
(64, 'Enim quibusdam quo l', '2024-07-01 13:51:45', '1999-06-28 00:13:00', 'Terminé', 'PAS PRIORITAIRE', 1, 9, 5),
(65, 'Enim quibusdam quo l', '2024-07-01 13:51:45', '1999-06-28 00:13:00', 'Terminé', 'PAS PRIORITAIRE', 1, 9, 5),
(66, 'Enim quibusdam quo l', '2024-07-01 13:51:45', '1999-06-28 00:13:00', 'Pas Fait', 'PAS PRIORITAIRE', 1, 9, 5),
(67, 'Similique non eius v', '2024-07-01 20:52:54', '2024-07-02 18:30:00', 'Pas Fait', 'PRIORITAIRE', 2, 9, 5),
(68, 'yoyoyoyoy', '2024-07-04 14:31:55', '2018-09-18 14:39:00', 'Terminé', 'URGENT', 1, 9, 5),
(69, 'Ut sit id quis conse', '2024-07-04 14:33:40', '1975-07-15 05:43:00', 'Pas Fait', 'PAS PRIORITAIRE', 2, 21, 5);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstname` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` enum('ADMIN','USER','SUPERADMIN') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'USER',
  `home_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `token`, `role`, `home_id`) VALUES
(8, 'Jeanette', 'Cooke', 'rado@mailinator.com', '$argon2id$v=19$m=65536,t=4,p=1$dFBWOU9ZeEJkeEVqWEwvNg$whL3sBlr5gtE2NRxbJgKhncCeGuHGtyooprQ78NqeL4', '7261646f406d61696c696e61746f722e636f6d', 'USER', 1),
(9, 'Laetitia', 'Laetitia', 'laetitia.laetitia@gmail.com', '$argon2id$v=19$m=65536,t=4,p=1$dFBWOU9ZeEJkeEVqWEwvNg$whL3sBlr5gtE2NRxbJgKhncCeGuHGtyooprQ78NqeL4', 'admin', 'ADMIN', 5),
(10, 'Kilian', 'test', 'kilian.olry@gmail.com', '$argon2id$v=19$m=65536,t=4,p=1$dFBWOU9ZeEJkeEVqWEwvNg$whL3sBlr5gtE2NRxbJgKhncCeGuHGtyooprQ78NqeL4', 'srerzer', 'USER', 5),
(21, 'Cedric', 'Ayala', 'pyvihem@mailinator.com', '$argon2id$v=19$m=65536,t=4,p=1$cUxIQTdZN2JkRW5mODN5Yw$MdECX5gNVM08xtkmyYlKUj40sNkc4FTPKUgSrngS7ac', '7079766968656d406d61696c696e61746f722e636f6d', 'USER', 5),
(23, 'Cedrac', 'Simon', 'lipigip@mailinator.com', '$argon2id$v=19$m=65536,t=4,p=1$UlppZUkvOW5PeTJXN1UzNQ$HxAT1csE/itLZfrl5gAui6W9nbA9Z9KXCWY+Wbh09Is', '6c697069676970406d61696c696e61746f722e636f6d', 'USER', 14),
(24, 'Brianna', 'Norton', 'juqiwig@mailinator.com', '$argon2id$v=19$m=65536,t=4,p=1$L1UxU0JtNFpIZ25JUGQwRA$vlQxiAZaZwJUUmFfGfu0IHbkM8eAaH4473xWRwZwZ7Y', '6a757169776967406d61696c696e61746f722e636f6d', 'USER', NULL),
(25, 'Linda', 'Keller', 'fira@mailinator.com', '$argon2id$v=19$m=65536,t=4,p=1$Nk9qZXhqdXh0b3NHZXkyMw$yirg7N5mL69OSeb4gSP7A6TE87pdwvAnAgp1Tc2Lp64', '66697261406d61696c696e61746f722e636f6d', 'USER', NULL),
(26, 'Veronica', 'Duke', 'qapypokovo@mailinator.com', '$argon2id$v=19$m=65536,t=4,p=1$QWJyMjB2L3hjR3FBV0w3Qg$CYJeTeX8Cttp/+nWgutJmLLmPSOq/+spXmj8btvu1bw', '71617079706f6b6f766f406d61696c696e61746f722e636f6d', 'USER', NULL),
(27, 'Athena', 'Robles', 'lywaxysy@mailinator.com', '$argon2id$v=19$m=65536,t=4,p=1$RExtZFZMSzcuL0NYR3FOSw$3tZ1IOHF8JVcwqfsircPhCifSg3eE/tqHPGMO7ccjJs', '6c79776178797379406d61696c696e61746f722e636f6d', 'USER', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorys_expense`
--
ALTER TABLE `categorys_expense`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categorys_task`
--
ALTER TABLE `categorys_task`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_foreign_key` (`category_id`),
  ADD KEY `user_foreign_keys` (`user_id`),
  ADD KEY `home_foreign_keys` (`home_id`);

--
-- Index pour la table `homes`
--
ALTER TABLE `homes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_foreign_key` (`user_id`),
  ADD KEY `home_foreign_key` (`home_id`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id_foreign` (`category_id`),
  ADD KEY `user_id_foreign` (`user_id`),
  ADD KEY `homes_id_foreign` (`home_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `home_id_foreign` (`home_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorys_expense`
--
ALTER TABLE `categorys_expense`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `categorys_task`
--
ALTER TABLE `categorys_task`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `homes`
--
ALTER TABLE `homes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `expenses`
--
ALTER TABLE `expenses`
  ADD CONSTRAINT `category_foreign_key` FOREIGN KEY (`category_id`) REFERENCES `categorys_expense` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `home_foreign_keys` FOREIGN KEY (`home_id`) REFERENCES `homes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_foreign_keys` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `home_foreign_key` FOREIGN KEY (`home_id`) REFERENCES `homes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_foreign_key` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categorys_task` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `homes_id_foreign` FOREIGN KEY (`home_id`) REFERENCES `homes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `home_id_foreign` FOREIGN KEY (`home_id`) REFERENCES `homes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
