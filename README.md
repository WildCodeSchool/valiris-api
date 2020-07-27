![logo](src/images/logo_valiris.png)
# Valiris Résidence

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](http://forthebadge.com) 


Ce projet concerne la conception d’une application web qui a pour objectif de présenter des biens immobiliers au grand public et de permettre la prise de contact (dans l’optique d’une location courte ou longue durée). 
Le projet est composé d'une interface utilisateur ([front-office](https://github.com/WildCodeSchool/valiris-front)), un espace d'administration ([back-office](https://github.com/WildCodeSchool/valiris-back)) et d'une base de données ([API](https://github.com/WildCodeSchool/valiris-api)).

# Modules utilisés et implémentation
## Front-office

#### Traduction
Utilisation du plugin i18n pour gérer le multilingue. Les traductions sont stockés dans deux fichiers JSON.
[Documentation officielle](https://www.i18next.com/overview/getting-started)

### Calendrier
Utilisation d'un calendrier interactif pour l'affichage de la disponibilité de chaque appartement. Un composant Calendar.js est disponible en front-office.
[Documentation officielle](https://fullcalendar.io/docs/getting-started)

### Material UI
Utilisation du framework UI React Material UI pour quelques composants: Buttons, TextFields, Cards, Loader...
[Documentation officielle](https://material-ui.com/getting-started/installation/)

### Carousel d'images
Utilisations d'un carousel d'images pour l'affichage de photos d'appartements en page d'accueil grâce au module React Responive Carousel.
[Documentation officielle](https://react-responsive-carousel.js.org/)


## Back-office

Back-office développé avec l'aide de Material-UI.
[Documentation officielle](https://material-ui.com/getting-started/installation/)

## API

#### Gestion des emails

Utilisation de la librairie Nodemailer.
[Documentation officielle](https://nodemailer.com/about/)


Se rendre dans le fichier services/mailer.js.

Le premier email est déstiné au client et le deuxième à l'admin.

Il prend en compte la langue actuelle du site pour le mail ultilisateur.

Modification du contenu des emails : 

  * Phrase d'intro : de la ligne 120 à 123 et à la ligne 368
  
  * Liste récapitulative : de la ligne 180 à 192 et de la ligne 423 à 427

  * Liens Facebook et youtube : ligne 130/231 et ligne 462/463

Gestion de l'envoi d'email de la ligne 482 à 518.

*exemple:*

```javascript
      const mailOptionsUser = {
      from: `"Valiris Résidence" <${process.env.MAIL_USER}>`,
      to: body.email,
      subject: `Valiris Résidence - ${lang === 'en' ? 'Summary of your request' : 'Récapitulatif de votre demande'}`,
      html: outputUser
    };
```

# Before cloning the repo
```sh
git config --global core.autocrlf input
```
(just re-clone if already cloned).

# Setup

Install dependencies and the migration tool :
```sh
npm i
npm i -g db-migrate db-migrate-mysql
```
Copy the environnement variables : 
```
cp .env.sample .env
```
This `.env` file allows to change the way the Node server connects to the database, but you probably won't have to change any of those variables unless you want to deploy the app yourself and connect it to a specific DB.

## With Docker (recommanded)

Install Docker on your OS.

### I just want to run the existing app without making changes to the code
```sh
docker-compose up --build
```
That will install and run the app with all its dependencies (including the DB) in isolated containers. With this single command, you will have a fully functionnal API listening by default on `localhost:3000`. 

You will also have two running DB servers (one for developpement and one for running automated tests), accessible respectively on `localhost:3307` and `localhost:3308` with the user `root` and the password `root`.

### I want to develop the app

Alternatively, you can just bring up the db and run the app outside a container :
```sh
docker-compose up db #(wait until the console stop outputing stuff)
npm run migrate
npm run start-watch
```
That may be useful when developpping since you won't have to rebuild and re-run the NodeJS container every time when a change is made in the code.

### I want to run the automated tests
```sh
npm run tests:setup-db #(wait until the test DB is accessible at localhost:3308)
npm run tests:migrate-db
npm run test
```

## Without Docker

Install MySQL (5.7) on your OS. 
Then, create two MySQL server instances, both accessible with the user `root` and the password `root` : 
- One listening on port 3307 with an empty database called `valiris_api_database`. 
- One listening on port 3308 with an empty database called `valiris_api_database_test`.

### Run the app

```sh
npm run migrate
npm run start-watch
```

### Run the automated tests

```sh
npm run tests:migrate-db
npm run test
```

# Docs
You can access the docs at [localhost:3000/api-docs](http://localhost:3000/api-docs)

## Fabriqué avec
* [React.js](https://fr.reactjs.org/) - Bibliothèque JavaScript (front-end)
* [Node.js](https://nodejs.org/fr/) - Environnement d'exécution JavaScript (back-end)
* [Express](https://expressjs.com/fr/) - Infrastructure d'applications web Node.js (back-end)

## Auteurs

* **Vianney** _alias_ [@vboualt](https://github.com/vbouault)
* **Nathan** _alias_ [@nathanguillaumin](https://github.com/nathanguillaumin)
* **Hugo** _alias_ [@K0Si-003](https://github.com/K0Si-003)