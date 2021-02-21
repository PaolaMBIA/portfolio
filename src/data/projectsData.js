import React from 'react';

import pmMovieHome from "../assets/image/projet-3.png";
import popularMovies from "../assets/image/popularMovies.JPG";
import similarMovies from "../assets/image/similarMovies.JPG";

//schitt creek cafe
import addCustomer from "../assets/image/addCustomer.jpg";
import totalBill from "../assets/image/totalBill.png";
import stat from "../assets/image/stat.png";
import median from "../assets/image/median.PNG";
import mongoDB from "../assets/image/mongoDB.PNG";

//Mboa237

import pageConnexion from "../assets/image/pageConnexion.jpeg";
import pageInscription from "../assets/image/pageInscription.jpeg";
import pageAccueil from "../assets/image/pageAccueil.jpeg";
import projet3 from "../assets/image/projet-2.jpg";

//site jeune 

import projet4 from "../assets/image/projet-5.PNG";
import mims from "../assets/image/mims.png";
import tiki from "../assets/image/tiki.JPG";

//pmTools 

import projet5 from "../assets/image/projet-6.JPG";

//afrik tchop

import home1 from "../assets/image/home1.jpeg";
import connexion from "../assets/image/connexion.jpg";
import inscription from "../assets/image/inscription.jpg";
import projet6 from "../assets/image/projet-4.jpeg";
import accueil from "../assets/image/accueil.jpeg";
import recettes from "../assets/image/recettes.jpeg";

export const projectsData = [

    {
      id: 1,
      title: "Schitt's Creek Cafe Tropical",
      date: "Janvier 2020",
      languages: "React, Node JS, MongoDB",
      infos:
        ["Dans le cadre d’une amélioration du service de restauration du Schitt’s Creek Cafe Tropical, il est demandé de faire la création d’une API et des outils bien conçus pour s’assurer que la serveuse Twyla ne mélange pas les commandes des différents clients.",
        "Cette API devra stocker les informations des clients, les commandes de ces derniers, les éléments disponibles dans le menu et les différents commentaires des clients.",
        
        `cette dernière devra être capable de :`,`
        - Permettre une récupération de données même après un crash complet du système ;`,`
        - Permettre l’insertion de plusieurs clients passant des commandes régulièrement ;`,`
        - Permettre au responsable du café de voir l’évolution au fil du temps de la consommation de certains aliments/boissons ;`,`
        - De rechercher les différents clients dans une catégorie précise.
        `],
      img: [addCustomer, totalBill, stat, median, mongoDB ],
      link: "https://github.com/PaolaMBIA/Schitt_Creek_Cafe_Tropical",
    },
    {
      id: 2,
      title: "PM movies",
      date: "Mars 2020",
      languages: "React JS, API The movies database",
      infos:
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"],
      img: [ popularMovies, similarMovies],
      link: "https://paolambia.fr/",
    },
    {
      id: 3,
      title: "Mboa237",
      date: "Avril 2020",
      languages: "React native, firebase",
      infos:
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"],
      img: [pageConnexion, pageInscription , pageAccueil, projet3],
      link: "https://github.com/PaolaMBIA/Application-mobile-du-tourisme-au-Cameroun",
    },
    {
      id: 4,
      title: "Site de jeunes entrepreneurs",
      date: "Juillet 2020",
      languages: "WordPress",
      infos:
        ["Le Cameroun pays d’Afrique, regorge de jeunes entrepreneurs souhaitant se faire connaître sur le plan national comme international. Nous avons recueillis pour le moment deux jeunes femmes très dynamiques qui se sont lancées dans la fabrication de boissons à base de fruits. Mim’s Drink qui présente une variété de boissons 100% naturels et Tiki qui utilise spécialement du jus d’ananas pour faire du vin. Laissez-vous séduire par leurs présentations respectives et surtout n’hésitez pas à partager ou mieux commander des produits de votre choix!!!"],
      img: [ mims, tiki],
      link: "http://entrepreneurs.paolambia.fr/entrepreneurs/",
  },
  {
    id: 5,
    title: "pmTools",
    date: "Juillet 2020",
    languages: "Angular, Node JS, MongoDB",
    infos:
      ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste."],
    img: [projet5],
    link: "https://github.com/PaolaMBIA/ToDoList",
  },
  {
    id: 6,
    title: "Afrik tchop",
    date: "Juillet 2020",
    languages: "React native, Php",
    infos: [
      ` Dans le cadre de notre formation professionnelle de développeur d’application Web et mobile, nous avons eu l’idée de former une équipe afin de pouvoir réaliser un projet mettant en pratique les connaissances acquises tout au long de la formation.`,
      
      `Etant dans une ère purement connectée avec une génération constamment sur le téléphone, nous avons très rapidement orienté notre projet vers une application mobile. De plus, nous sommes originaires d’Afrique, continent plein de couleur, reconnu pour sa richesse alimentaire. Nous avons ainsi conclu sur la réalisation d’une application mobile mettant en avant la culture culinaire de notre continent, avec la fonctionnalité en plus de lister des restaurants africains dans le périmètre où se trouvera l’utilisateur.`,
      `La réalisation de ce projet aura pour objectifs de :`,`
      - Nous former au travail en équipe et aux outils nécessaires aux bonnes pratiques en Entreprise ;`,`
      - Développer nos compétences sur les technologies visant au développement d’applications
      mobiles ;`,`
      - Lancer un projet possiblement à même d’être commercialiser.
      `],
    img: [home1,connexion,inscription , projet6, accueil, recettes],
    link: "https://github.com/Afro-tchop/Afro",
  },
  ];