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

## Fabriqué avec
* [React.js](https://fr.reactjs.org/) - Bibliothèque JavaScript (front-end)
* [Node.js](https://nodejs.org/fr/) - Environnement d'exécution JavaScript (back-end)
* [Express](https://expressjs.com/fr/) - Infrastructure d'applications web Node.js (back-end)

## Auteurs

* **Vianney** _alias_ [@vboualt](https://github.com/vbouault)
* **Nathan** _alias_ [@nathanguillaumin](https://github.com/nathanguillaumin)
* **Hugo** _alias_ [@K0Si-003](https://github.com/K0Si-003)