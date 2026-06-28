# 📋 Règles de Gestion — Ether Arts

## 1. Cardinalités & Relations

* **User ─── (1,N) ─── (1,1) ─── Artwork** : Un utilisateur (créateur) peut publier plusieurs œuvres. Une œuvre appartient à un unique utilisateur.
* **User ─── (1,N) ─── (1,1) ─── Comment** : Un utilisateur peut écrire plusieurs commentaires. Un commentaire appartient à un unique utilisateur.
* **User ─── (1,N) ─── (1,1) ─── Like** : Un utilisateur peut aimer plusieurs œuvres. Un like est émis par un unique utilisateur.
* **User ─── (1,N) ─── (1,1) ─── Don** : Un utilisateur peut effectuer plusieurs dons. Un don provient d'un unique utilisateur.
* **User (Fan) ─── (1,N) ─── (1,N) ─── User (Créateur)** : Un utilisateur peut suivre plusieurs créateurs, et un créateur peut être suivi par plusieurs utilisateurs.
* **Artwork ─── (1,N) ─── (1,1) ─── Comment** : Une œuvre peut recevoir plusieurs commentaires. Un commentaire concerne une unique œuvre.
* **Artwork ─── (1,N) ─── (1,1) ─── Like** : Une œuvre peut recevoir plusieurs likes. Un like cible une unique œuvre.

---

## 2. Dictionnaire des Données & Contraintes Métiers

### 👤 Entité : `user`
#### Attributs
* `nom` (Texte)
* `prenom` (Texte)
* `pseudo` (Texte, Unique)
* `email` (Texte, Unique)
* `password` (Texte)
* `telephone` (Texte, Unique)
* `avatar_url` (Texte / Chemin vers la photo)
* `bio` (Texte long)
* `role` (Énumération : `admin`, `createur`, `fan`)

#### Règles Métiers
* Un utilisateur doit posséder un compte unique identifié par son numéro de téléphone et son adresse e-mail.
* Un utilisateur possède un et un seul rôle à la fois (`admin`, `createur` ou `fan`).
* Un utilisateur ne peut en aucun cas modifier les informations des autres utilisateurs.
* Un utilisateur a le plein droit de modifier ses propres informations de profil.
* **Rôle `admin` :**
  * Peut consulter la liste des utilisateurs (`createur`, `fan`) ainsi que l'historique de leurs activités.
  * Ne peut pas publier d'œuvres sur la plateforme.
  * Peut restreindre certaines fonctionnalités du site ou de certains utilisateurs.
* **Rôle `createur` :**
  * Est le seul rôle autorisé à publier des œuvres.
* **Rôle `fan` :**
  * Ne peut pas publier d'œuvres.
  * Peut faire évoluer son compte pour devenir un `createur`.

---

### 🎨 Entité : `artwork` (Œuvre)
#### Attributs
* `titre` (Texte)
* `description` (Texte long)
* `artwork_type` (Énumération : `audio`, `video`, `image`, `pdf`, etc.)
* `media_url` (Texte / Chemin d'accès au fichier stockage)
* `is_active` (Booléen / Autorisation de publication)
* `created_at` (Date de publication)
* `#user_id` (Clé étrangère -> `user`)
* `#category_id` (Clé étrangère -> `category`)

#### Règles Métiers
* Une œuvre peut être modifiée après publication uniquement sur les champs suivants : `titre`, `description`, `category_id`, et son statut d'autorisation (`is_active`).
* Une œuvre appartient obligatoirement à un unique `user` ayant le rôle `createur`.
* **Sécurité :** Une œuvre ne peut jamais être définitivement supprimée de la base de données.
* Pour ne plus afficher une œuvre, le créateur ou l'administrateur doit désactiver sa publication (`is_active = false`).

---

### 💬 Entité : `artwork_comment` (Commentaire)
#### Attributs
* `content` (Texte long)
* `created_at` (Date de publication)
* `#user_id` (Clé étrangère -> `user`)
* `#artwork_id` (Clé étrangère -> `artwork`)

#### Règles Métiers
* Un commentaire appartient à un unique `user` (qu'il soit `createur` ou `fan`).
* Un commentaire concerne obligatoirement une seule et unique œuvre.
* Un commentaire ne peut être ni modifié, ni supprimé après sa publication (historique figé).

---

### 🏷️ Entité : `category` (Catégorie)
#### Attributs
* `libelle` (Texte, Unique / Ex: Musique, Slam, Peinture...)

---

### ❤️ Entité : `artwork_like` (Mention J'aime)
#### Attributs
* `status` (Booléen : `true` si actif)
* `#user_id` (Clé étrangère -> `user`)
* `#artwork_id` (Clé étrangère -> `artwork`)

#### Règles Métiers
* Un like associe de manière unique un utilisateur et une œuvre (Contrainte : un utilisateur ne peut liker qu'une seule fois la même œuvre).
* Un like peut être annulé par l'utilisateur à tout moment (le statut passe à `false` ou la ligne est retirée).

---

### 👥 Entité : `user_follow` (Abonnements)
#### Attributs
* `#fan_id` (Clé étrangère -> `user` jouant le rôle de l'abonné)
* `#creator_id` (Clé étrangère -> `user` jouant le rôle de l'artiste suivi)

#### Règles Métiers
* Un utilisateur peut s'abonner (`follow`) à un créateur sans condition préalable.
* Un utilisateur peut se désabonner (`unfollow`) à tout moment et sans condition.
* Le système de suivi est asymétrique mais autorise le double sens (X peut suivre Y, et Y peut également suivre X).

---

### 💰 Entité : `donation` (Don)
#### Attributs
* *Structure à définir ultérieurement (ex: montant, devise, statut_paiement, #user_id, #creator_id).*