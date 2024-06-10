import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/home.html", "Accueil", "/Pages/Home.html"),
    new Route("/Services.html", "Service", "/Pages/Service.html"),
    new Route("/signin.html", "signin", "/Pages/signin.html"),
    new Route("/signup.html", "signup", "/Pages/signup.html"),
    new Route("/reviews", "reviews", "/Pages/reviews.html"),
    new Route("/contacts", "contacts", "/Pages/contacts.html"),
    new Route("/habitats", "habitats", "/Pages/habitats.html"),
    new Route("/jungle", "jungle", "/Pages/jungle.html"),
    new Route("/savane", "savane", "/Pages/savane.html"),
    new Route("/marais", "marais", "/Pages/marais.html")
    ];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ZOO Arcadia";