document.getElementById('addReportForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const animal_id = document.getElementById('animalId').value;
    const animal_description= document.getElementById('animal_description').value;
    const animal_state = document.getElementById('animal_state').value;
    const food = document.getElementById('food').value;
    const food_quantity = document.getElementById('food_quantity').value;
    const last_check = document.getElementById('last_check').value;
    const animal_details = document.getElementById('animal_details').value;

    fetch('http://localhost/api.php/reports', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            animal_id,
            animal_description,
            animal_state,
            food,
            food_quantity,
            last_check,
            animal_details
        })
    }).then(response => response.json())
        .then(data => {
            alert(data.message);
        });
});
