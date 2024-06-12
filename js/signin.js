import { Button } from "bootstrap";

document.addEventListener('DOMContentLoaded', function() {
    const mailInput = document.getElementById("EmailInput");
    const passwordInput = document.getElementById("PasswordInput");
    const btnsignin = document.getElementById("btn-validation-connexion");
    const errorMessage = document.getElementById("error-message");
    const userRole = document.getElementById('userRole'); 

    function validateForm() {
        let isValid = true;
        
        // Validate user role
        if (userRole.value === "") {
            document.getElementById('roleFeedback').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('roleFeedback').style.display = 'none';
        }

        // Validate email
        if (!mailInput.value || !mailInput.checkValidity()) {
            document.getElementById('emailFeedback').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailFeedback').style.display = 'none';
        }

        // Validate password
        if (!passwordInput.value) {
            document.getElementById('passwordFeedback').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('passwordFeedback').style.display = 'none';
        }

        // Enable or disable the submit button based on form validity
        btnsignin.disabled = !isValid;
    }

    function resetValidation() {
        mailInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-invalid");
        errorMessage.style.display = "none";
    }

    mailInput.addEventListener('input', () => {
        resetValidation();
        validateForm();
    });

    passwordInput.addEventListener('input', () => {
        resetValidation();
        validateForm();
    });

    userRole.addEventListener('change', () => {
        validateForm();
    });

btnsignin.addEventListener('click', checkCredentials);

function checkCredentials(){
        
    if(mailInput.value === "test@mail.com" && passwordInput.value === "123"){

        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie
        setCookie(RoleCookieName, "admin", 7);

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    
        // Afficher un message d'erreur
        errorMessage.textContent = "Adresse e-mail ou mot de passe incorrect.";
        errorMessage.style.display = "block"; // Assurez-vous que l'élément est visible
    }
} 


// Fonction pour définir un token
function setToken(token) {
    // Stocker le token dans le local storage
    localStorage.setItem("authToken", token);
}

// Réinitialiser les messages d'erreur et les classes de validation lors de la modification des champs
mailInput.addEventListener('input', resetValidation);
passwordInput.addEventListener('input', resetValidation);

function resetValidation() {
    mailInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-invalid");
    errorMessage.style.display = "none";
}
});
