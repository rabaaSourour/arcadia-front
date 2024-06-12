import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/Home", "Accueil", "/Pages/Home.html"),
    new Route("/Service", "Service", "/Pages/Service.html"),
    new Route("/signin", "Connexion", "/Pages/signin.html", "/js/signin.js"),
    new Route("/monCompte", "Changement de mot de passe", "/Pages/monCompte.html", "/js/monCompte.js"),
    new Route("/reviews", "avis", "/Pages/reviews.html"),
    new Route("/contacts", "contacts", "/Pages/contacts.html"),
    new Route("/habitats", "habitats", "/Pages/habitats.html"),
    new Route("/jungle", "jungle", "/Pages/jungle.html"),
    new Route("/savane", "savane", "/Pages/savane.html"),
    new Route("/marais", "marais", "/Pages/marais.html"),
    ];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ZOO Arcadia";