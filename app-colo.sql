-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : dim. 16 juin 2024 à 17:01
-- Version du serveur : 8.0.36-0ubuntu0.22.04.1
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
  `status` enum('Payé','Impayé') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Impayé',
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  `home_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `expenses`
--

INSERT INTO `expenses` (`id`, `price`, `description`, `created_at`, `date_limit`, `status`, `category_id`, `user_id`, `home_id`) VALUES
(16, 45, 'Plombier', '2024-06-15 22:00:00', '2024-06-19 12:54:00', 'Impayé', 2, 9, 5),
(17, 127, 'Loyer', '2024-06-15 22:00:00', '2024-06-21 15:54:00', 'Impayé', 1, 9, 5);

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
(5, 'Omnis animi ad numq', 'Rhea French', 'home5');

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
(3, 'Conference', 'Conference Green IT', '2024-06-16 14:56:15', 10, 5);

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
(43, 'Sel, Beurre, Coca', '2024-06-16 14:54:16', '2024-06-22 16:53:00', 'Pas Fait', 'PAS PRIORITAIRE', 2, 9, 5),
(44, 'Surtout la jaune', '2024-06-16 14:54:42', '2024-06-20 18:53:00', 'Pas Fait', 'PAS PRIORITAIRE', 4, 9, 5);

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
  `role` enum('ADMIN','USER') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'USER',
  `home_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `token`, `role`, `home_id`) VALUES
(8, 'Jeanette', 'Cooke', 'rado@mailinator.com', '$argon2id$v=19$m=65536,t=4,p=1$dFBWOU9ZeEJkeEVqWEwvNg$whL3sBlr5gtE2NRxbJgKhncCeGuHGtyooprQ78NqeL4', '7261646f406d61696c696e61746f722e636f6d', 'USER', 1),
(9, 'Laetitia', 'admin', 'admin@admin.com', '$argon2id$v=19$m=65536,t=4,p=1$dFBWOU9ZeEJkeEVqWEwvNg$whL3sBlr5gtE2NRxbJgKhncCeGuHGtyooprQ78NqeL4', 'admin', 'ADMIN', 5),
(10, 'Kilian', 'test', 'kilian.olry@gmail.com', '$argon2id$v=19$m=65536,t=4,p=1$dFBWOU9ZeEJkeEVqWEwvNg$whL3sBlr5gtE2NRxbJgKhncCeGuHGtyooprQ78NqeL4', 'srerzer', 'USER', 5);

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `homes`
--
ALTER TABLE `homes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
