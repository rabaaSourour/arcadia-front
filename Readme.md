# ZooArcadia
ZooArcadia est une application de gestion de zoo développée en PHP. Elle permet de gérer les animaux, les habitats, les services, les utilisateurs, les horaires d'ouverture, les avis, et plus encore. Ce projet comprend une API pour les opérations back-end et un front-end basé sur des fichiers statiques.

## Table des matières
- Prérequis
- Installation
- Configuration
- Structure du Projet
- Utilisation
- Routes de l'API
- Déploiement
- Tests
- Contribution
- Licence
- Prérequis
- PHP 7.4 ou supérieur
- MySQL 5.7 ou supérieur
- Composer
- Node.js et npm
- Apache avec mod_rewrite activé
### Installation
- Clonez le dépôt :

bash
git clone https://github.com/votre-utilisateur/zooarcadia.git
cd zooarcadia
- Installez les dépendances PHP :

bash
composer install
- Installez les dépendances JavaScript :

bash
npm install
- Configurez votre base de données MySQL et mettez à jour le fichier .env avec vos informations de connexion.

- Exécutez les migrations et les seeds pour créer et peupler la base de données :

bash
php database/migrations/create_tables.sql
php database/seeds/seed_data.sql
### Configuration
Copiez le fichier .env.example en .env :

bash
cp .env.example .env
Modifiez le fichier .env avec vos informations de connexion à la base de données.

#### Structure du Projet
plaintext
/zooArcadia
    /api
        animals.php
        habitats.php
        services.php
        users.php
    /config
        config.php
    /controllers
        AnimalController.php
        AnimalFoodsController.php
        APIAnimalFoodController.php
        HabitatController.php
        ReviewController.php
        ServiceController.php
        UserController.php
    /database
        /migrations
            create_tables.sql
        /seeds
            seed_data.sql
    /models
        Animal.php
        Habitat.php
        Review.php
        Service.php
        User.php
        AnimalFood.php
        ReportVeterinary.php
    /public
        /assets
        /js
        /pages
        /router
        /scss
        .gitignore
        index.html
        package-lock.json
        package.json
        Readme.md
        script.js
        style.css
    /routes
        contact.php
        web.php
    /tests
        UserTest.php
        AnimalTest.php
    /views
        home.php
        login.php
        dashboard.php
        animals.php
        habitats.php
        services.php
        users.php
        reviews.php
        animal_foods.php
        report_veterinary.php
    .env
    .gitignore
    .htaccess
    authMiddleware.php
    composer.phar
    fixtures.php
    index.php
    package-lock.json
    router.php
    server.js
# Utilisation
Démarrez le serveur PHP intégré :

bash
php -S localhost:8000 -t public
Accédez à l'application dans votre navigateur à l'adresse http://localhost:8000.

## Routes de l'API
Voici un aperçu des principales routes de l'API :

GET /api/animals : Liste des animaux
POST /api/animals : Ajouter un nouvel animal
PUT /api/animals/{id} : Mettre à jour un animal
DELETE /api/animals/{id} : Supprimer un animal
GET /api/habitats : Liste des habitats
POST /api/habitats : Ajouter un nouvel habitat
PUT /api/habitats/{id} : Mettre à jour un habitat
DELETE /api/habitats/{id} : Supprimer un habitat
GET /api/services : Liste des services
POST /api/services : Ajouter un nouveau service
PUT /api/services/{id} : Mettre à jour un service
DELETE /api/services/{id} : Supprimer un service
GET /api/users : Liste des utilisateurs
POST /api/users : Ajouter un nouvel utilisateur
PUT /api/users/{id} : Mettre à jour un utilisateur
DELETE /api/users/{id} : Supprimer un utilisateur
## Déploiement
Pour déployer cette application sur un serveur Apache :

Assurez-vous que mod_rewrite est activé.
Configurez votre hôte virtuel Apache pour pointer vers le dossier public.
Chargez le fichier .htaccess pour la gestion des routes.
## Tests
Pour exécuter les tests, utilisez PHPUnit. Assurez-vous que PHPUnit est installé globalement ou via Composer.

bash
vendor/bin/phpunit --bootstrap vendor/autoload.php tests/
## Contribution
Les contributions sont les bienvenues ! Veuillez soumettre des pull requests ou ouvrir des issues pour discuter des changements que vous souhaitez apporter.

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

