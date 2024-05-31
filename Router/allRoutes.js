import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/", "Habitats", "/pages/Habitats.html"),
    new Route("/", "Contacts", "/pages/Contacts.html"),
    new Route("/", "Services", "/pages/Services.html"),];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ZOO Arcadia";