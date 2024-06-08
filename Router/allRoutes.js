import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/Home.html"),
    new Route("/Service", "Service", "/Pages/Service.html"),
    new Route("/signin", "signin", "/Pages/signin.html"),
    new Route("/signup", "signup", "/Pages/signup.html"),
   ];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ZOO Arcadia";