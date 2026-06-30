# Mise en place de l'environnement de travail

## 🛠️ Stack technique
- **Back-end :** Laravel 13, PHP 8.3+
- **Base de données :** MySQL
- **Environnement local :** Laravel Sail (Docker)

## ⚙️ Installation

### Prérequis

### 🐳 Docker
Docker permet d'empaqueter une application et ses dépendances dans un conteneur isolé, qui peut être exécuté sur n'importe quel serveur. Il ne s'agit pas de virtualisation, mais de conteneurisation, une forme plus légère qui s'appuie sur certaines parties de la machine hôte pour son fonctionnement.

|[Windows](https://docs.docker.com/desktop/setup/install/windows-install/)|[Linux](https://docs.docker.com/desktop/setup/install/linux/)|
|---|---|

### 🐘 PHP 8.3+
**PHP** (Hypertext Preprocessor) est le langage de programmation principal du projet. C'est un langage dit "back-end" (qui s'exécute côté serveur).

|[Windows](https://grafikart.fr/tutoriels/install-php-windows-1114)|[Linux](https://grafikart.fr/tutoriels/install-php-linux-1153)|
|---|---|

### Composer
Composer est un gestionnaire de paquets pour PHP. C'est le chef d'orchestre de notre projet. Tout comme `npm`, `composer` sert à ajouter, supprimer, mettre à jour des dépdendances dans le projet.

|[Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)|[Linux / Mac](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)|
|---|---|

## ⚙️ Configuration

### 1. Cloner le dépôt

```bash
git clone https://github.com/Paul04sho/ETHER-ARTS
cd ETHER-ARTS
```

### 2. Installer les dépendances PHP
Dans votre terminal à la racine du projet Laravel.
```bash
composer install
```

### 3. Configurer l'environnement

Copie le dotenv d'exemple :

```bash
cp .env.example .env
```

Ouvre `.env` et faire les modifications suivantes :

```dotenv
APP_NAME="ETHER ARTS"
APP_URL=http://localhost

# Remplace la connexion SQLite par défaut par MySQL
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=ether_arts
DB_USERNAME=sail
DB_PASSWORD=password
```
## 🚀 Démarrage

### 1. Démarrer les conteneurs Sail

```bash
composer sail:up
```

### 2. Générer la clé applicative

```bash
composer sail:keygen
```

### 3. Lancer les migrations

```bash
composer sail:migrate
```

### ✅ L'application est accessible sur [http://localhost](http://localhost:80)