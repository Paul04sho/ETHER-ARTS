# Environnement de développement local

## 🛠️ Stack technique

- **Back-end :** Laravel 13, PHP 8.3+
- **Base de données :** MySQL
- **Environnement local :** Laravel Sail (Docker)

---

## ⚙️ Installation

### Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et démarré
- [PHP 8.3+](https://www.php.net/downloads.php) installé
- [Composer](https://getcomposer.org/download/) installé

---

### 1. Cloner le dépôt

```bash
git clone https://github.com/Paul04sho/ETHER-ARTS
cd ETHER-ARTS
```

### 2. Installer les dépendances PHP

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

### 4. Démarrer les conteneurs Sail

```bash
composer sail:up
```

### 5. Générer la clé applicative

```bash
composer sail:keygen
```

### 6. Lancer les migrations

```bash
composer sail:migrate
```

### 7. (Optionnel) Peupler la base de données
```bash
composer sail:dbseed
```

---

### ✅ L'application est accessible sur [http://localhost](http://localhost)

---

## 🧰 Commandes utiles

| Commande | Description |
|---|---|
| `./vendor/bin/sail up -d` | Démarrer les conteneurs en arrière-plan |
| `./vendor/bin/sail down` | Arrêter les conteneurs |
| `./vendor/bin/sail artisan migrate` | Lancer les migrations |
| `./vendor/bin/sail artisan migrate:fresh --seed` | Réinitialiser la BDD et jouer les seeders |
| `./vendor/bin/sail artisan tinker` | Ouvrir une console interactive Laravel |
| `./vendor/bin/sail composer <commande>` | Exécuter une commande Composer |
| `./vendor/bin/sail npm <commande>` | Exécuter une commande npm |
| `./vendor/bin/sail shell` | Ouvrir un shell dans le conteneur applicatif |
| `./vendor/bin/sail build --no-cache` | Reconstruire les images Docker |