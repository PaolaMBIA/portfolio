//import React from 'react';

//import pmMovieHome from "../assets/image/projet-3.png";
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

//import projet4 from "../assets/image/projet-5.PNG";
import mims from "../assets/image/mims.png";
import tiki from "../assets/image/tiki.JPG";

//pmTools 

import projet5 from "../assets/image/arduinoVue.JPG";
import cloches from "../assets/image/htmlEsp8266.JPG";
import cvWeb from "../assets/image/cvWeb.JPG";

//afrik tchop

import home1 from "../assets/image/home1.jpeg";
import connexion from "../assets/image/connexion.jpg";
import inscription from "../assets/image/inscription.jpg";
import projet6 from "../assets/image/projet-4.jpeg";
import accueil from "../assets/image/accueil.jpeg";
import recettes from "../assets/image/recettes.jpeg";

export const projectsData = [

    {
      id: "schitt-cafe",
      title: "Schitt's Creek Cafe Tropical",
      date: "Novembre 2020 ~ Janvier 2021",
      languages: "React, Node JS, MongoDB",
      infos:
        [`Dans le cadre d’une amélioration du service de restauration d'un Cafe au Canada, il etait question de faire la création d’une API et des outils bien conçus pour s’assurer que les serveurs ne mélangent pas les commandes des différents clients.`,
        "Cette API devait stocker les informations des clients, les commandes de ces derniers, les éléments disponibles dans le menu et les différents commentaires des clients.",
        
        `On devait donc pouvoir :`,`
        - Permettre une récupération de données même après un crash complet du système ;`,`
        - Permettre l’insertion de plusieurs clients passant des commandes régulièrement ;`,`
        - Permettre au responsable du café de voir l’évolution au fil du temps de la consommation de certains aliments/boissons ;`,`
        - De rechercher les différents clients dans une catégorie précise.
        `,
        "Ce projet m'a permis de faire beaucoup de manipulation de données."
      ],
      img: [addCustomer, totalBill, stat, median, mongoDB ],
      link: "https://github.com/PaolaMBIA/Schitt_Creek_Cafe_Tropical",
    },
    {
      id: "PM-movies",
      title: "PM movies",
      date: "Septembre 2020",
      languages: "React JS, API The movies database",
      infos:
        ["Dans l'optique d'apprendre plus sur les concepts de base de REACT JS, j'ai réalisé un site de deux pages d'affiche de films du plus populaire au moins populaire. Sur la première page, on a le listing des films avec les détails concernant le titre du film, l'image d'affiche, la date de publication, la langue originale, la moyenne de point obtenu et le resumé du film. On accède à la deuxième page en cliquant sur une affiche afin d'avoir un listing de films similaires.",
          "Dans ce projet, j'ai pu :",
          ` - Créer des HOOKS personnalisés;`,
          `- Utiliser les Styled-components;`,
          `- Faire de l'es6;`,
          `- Communiquer avec la base de données TMDB (The Movie Database).`
        ],
      img: [ popularMovies, similarMovies],
      link: "https://paolambia.fr/",
    },
  {
    id: "mboa237",
    title: "Mboa237",
    date: "Février 2021",
    languages: "React native, firebase",
    infos:
      [`Il y'a quelque mois je discutais avec un ami qui devait rentrer en vacances au Cameroun (pays d'origine). Il avait une principale envie "découvrir son pays" c'est-à-dire visiter les zones touristiques. Mais on fait face actuellement à trois problématiques : Quels sont les endroits touristiques ? Comment y accéder ? Où loger ?`,
        `Face à ces interrogations, j'ai eu l'idée de développer une application mobile du tourisme au Cameroun. Cette dernière sera sous forme de réseau social permettant de:`,
        `- Créer un compte utilisateur;`,
        `- Avoir accès à tous les posts publiés;`,
        `- Liker / commenter des posts;`,
        `- Rechercher par mots clés des endroits à visiter;`,
        `- Créer / modifier / effacer sa publication `,
      `Cette application sera plus dans le thème du partage, pour faire évoluer le tourisme. Ainsi, lors de la publication d'un nouveau post, l'utilisateur devra mettre des photos avec un descriptif repondant aux problématiques soulevées.`],
      img: [pageConnexion, pageInscription , pageAccueil, projet3],
      link: "https://github.com/PaolaMBIA/Application-mobile-du-tourisme-au-Cameroun",
  },
  {
    id: "Pilotage-cloches",
    title: "Pilotage des cloches",
    date: "2017 ~ 2019",
    languages: "HTML5, CSS3, Javascript, esp8266",
    infos:
      ["Dans le cadre de mon alternance dans la socièté BODET (leader européen de la mesure et gestion du temps), je devais participer à l'étude et le développement d'un nouveau produit visant à rendre les prêtres connectés.", "L'objectif était de permettre à un prêtre (utilisateur) de piloter les cloches de son église depuis une interface Web (sur sa tablette).", "Pour ce faire, j'ai été amené à :",
        "- Rechercher des modules (cartes électroniques) pouvant répondre aux attentes et faire un rapport de synthèse;",
        "- Réaliser l'interface utilisateur en HTML, CSS, Javascript;",
      '- Vérifier la bonne communication des données "interface utilisateur vers les cloches" via le bus de communication RS485.'],
    img: [cloches],
    link: "",
  },
  {
    id: "Gestion-dressing",
    title: "Gestion dressing pour malvoyant",
    date: "Janvier 2020 ~ Mars 2020",
    languages: "Vue JS, Arduino",
    infos:
      ["Dans le cadre du développement d'un projet en interne dans la socièté ADENTIS, j'ai été amené à développer un prototype de boitier à effet sonore pour faciliter le choix de vêtements des personnes malvoyantes. Ces dernières devaient être assistés lors de l'enrégistrement vocal.","Les objectifs étaient de pouvoir : ","- Faire un enrégistrement vocale des descriptifs d'un vêtement sur un tag NFC (qui était ensuite intégré à l'habit);","- Visualiser à l'aide d'une interface Web les vêtements enrégistrés avec une possibilité de modification et de suppression; ","- Prendre en photo les vêtements pour les associer aux notes vocales;","- Rapprocher le boitier vers un habit et écouter l'enrégistrement qui a été fait."],
    img: [projet5],
    link: "",
  },
  
  {
    id: "afrik-tchop",
    title: "Afrik tchop",
    date: "2020",
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

  {
    id: "jeunes-entrepreneurs",
    title: "Site de jeunes entrepreneurs",
    date: "Juillet 2020",
    languages: "WordPress",
    infos:
      ["Le Cameroun pays d’Afrique, regorge de jeunes entrepreneurs souhaitant se faire connaître sur le plan national comme international. J'ai décidé de faire un site Web regroupant plusieurs bussiness en cours de développement. Pour le moment je met en avant deux jeunes femmes très dynamiques qui se sont lancées dans la fabrication de boissons à base de fruits.",` Mim’s Drink qui présente une variété de boissons 100% naturels et Tiki qui utilise spécialement du jus d’ananas pour faire du vin.`,` Laissez-vous séduire par leurs présentations respectives et surtout n’hésitez pas à partager ou mieux commander des produits de votre choix!!!`],
    img: [ mims, tiki],
    link: "http://entrepreneurs.paolambia.fr/entrepreneurs/",
},

  {
    id: "site-cv",
    title: "Site CV",
    date: "2021",
    languages: "React JS, Sass",
    infos:
      ["J'ai réalisé mon site CV mettant en avant quelques compétences acquises en REACT JS. J'utilise également SASS pour ma feuille de style."],
    img: [cvWeb],
    link: "",
  },
  ];