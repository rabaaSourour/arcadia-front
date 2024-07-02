document.getElementById('addAnimalForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('animalName').value;
    const description = document.getElementById('animalDescription').value;
    const image_url = document.getElementById('animalImage').value;

    fetch('http://localhost/api.php/animals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            description,
            image_url
        })
    }).then(response => response.json())
        .then(data => {
            alert(data.message);
        });
});

document.getElementById('deleteAnimalForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const animal_id = document.getElementById('deleteAnimalId').value;

    fetch(`http://localhost/api.php/animals/${animal_id}`, {
        method: 'DELETE'
    }).then(response => response.json())
        .then(data => {
            alert(data.message);
        });
});