// Sélectionnez tous les éléments de habitat
const habitat = document.querySelectorAll('.habitat');

// Ajoutez un écouteur d'événement à chaque habitat
habitats.forEach(habitat => {
    habitat.addEventListener('click', function() {
        // Masquez tous les détails des animaux au départ
        document.querySelectorAll('.animal-details').forEach(detail => {
            detail.classList.add('hidden');
        });

        // Affichez les animaux de cet habitat
        const animals = this.querySelectorAll('.animal-card');
        animals.forEach(animal => {
            animal.style.display = 'block'; // ou 'flex', 'grid', etc., selon votre mise en page
        });
    });
});

// Sélectionnez tous les éléments de carte d'animal
const animalCards = document.querySelectorAll('.animal-card');

// Ajoutez un écouteur d'événement à chaque carte d'animal
animalCards.forEach(animalCard => {
    animalCard.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêche la propagation à l'élément parent (l'habitat)
        
        // Récupérez le détail de l'animal correspondant
        const animalDetails = this.querySelector('.animal-details');
        
        // Affichez ou masquez les détails de l'animal
        animalDetails.classList.toggle('hidden');
    });
});

