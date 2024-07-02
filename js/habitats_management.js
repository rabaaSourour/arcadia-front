document.getElementById('updateHabitatForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const habitats_id = document.getElementById('habitatId').value;
    const habitat_comments = document.getElementById('habitatComments').value;

    fetch(`http://localhost/api.php/habitats/${habitats_id}/habitat_comments`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            habitat_comments
        })
    }).then(response => response.json())
        .then(data => {
            alert(data.message);
        });
});
