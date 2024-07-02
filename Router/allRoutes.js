import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/Home", "Accueil", "/Pages/Home.html"),
    new Route("/Service", "Service", "/Pages/Service.html"),
    new Route("/signin", "Connexion", "/Pages/signin.html", ["admin", "vétérinaire", "employé"], "/js/signin.js"),
    new Route("/monCompte", "Changement de mot de passe", "/Pages/monCompte.html", ["admin", "vétérinaire", "employé"], "/js/monCompte.js"),
    new Route("/reviews", "Avis", "/Pages/reviews.html"),
    new Route("/contacts", "Contacts", "/Pages/contacts.html"),
    new Route("/habitats", "Habitats", "/Pages/habitats.html", "/js/habitats.js"),
    new Route("/jungle", "Jungle", "/Pages/jungle.html"),
    new Route("/savane", "Savane", "/Pages/savane.html"),
    new Route("/marais", "Marais", "/Pages/marais.html"),
    new Route("/creat_user", "Créer un utilisateur", "/Pages/creat_user.html",["admin"]),
    new Route("/management_animals", "Management animals", "/Pages/management_dashboard/animals.html",["admin"], "/js/animals.js"),
    new Route("/management_employee_reports", "Employee reports", "/Pages/management_dashboard/employee_reports.html",["employé"], "/js/employee_reports.js"),
    new Route("/habitats_management", "Habitats management", "/Pages/management_dashboard/habitats_management.html",["admin"], "/js/habitats_management.js"),
    new Route("/mentions_legals", "Mentions legals", "/Pages/mentions_legals.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "ZOO Arcadia";
