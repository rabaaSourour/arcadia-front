document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire

    let isValid = true;

    // Validation de l'email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      if (emailError) emailError.style.display = 'block';
      isValid = false;
    } else {
      if (emailError) emailError.style.display = 'none';
    }

    // Validation du titre
    const titre = document.getElementById('titre').value;
    const titreError = document.getElementById('titreError');
    if (!titre) {
      if (titreError) titreError.style.display = 'block';
      isValid = false;
    } else {
      if (titreError) titreError.style.display = 'none';
    }

    // Validation de la description
    const description = document.getElementById('description').value;
    const descriptionError = document.getElementById('descriptionError');
    if (!description) {
      if (descriptionError) descriptionError.style.display = 'block';
      isValid = false;
    } else {
      if (descriptionError) descriptionError.style.display = 'none';
    }

    // Afficher le message de succès si le formulaire est valide
    if (isValid) {
      fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, title: titre, description })
      })
      .then(response => response.json())
      .then(data => {
        if (data.msg === 'Votre email a bien été envoyé !') {
          document.getElementById('message').style.display = 'block';
        } else {
          alert('Erreur : ' + data.msg);
        }
      })
      .catch(error => {
        alert('Erreur : ' + error.message);
      });
    }
  });