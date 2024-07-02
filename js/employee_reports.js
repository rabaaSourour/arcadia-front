
document.getElementById('addFoodLogForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const animal_id = document.getElementById('foodAnimalId').value;
    const date_check = document.getElementById('foodDate').value;
    const food = document.getElementById('food').value;
    const grammage = document.getElementById('foodQuantity').value;

    fetch('http://localhost/api.php/employee_reports', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            animal_id,
            date_check,
            food,
            grammage
        })
    }).then(response => response.json())
        .then(data => {
            alert(data.message);
        });
});
