document.getElementById('uploadImageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', document.getElementById('imageFile').files[0]);

    fetch('http://localhost/upload_image.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                loadImages();
            } else {
                alert(data.message);
            }
        });
});

function loadImages() {
    fetch('http://localhost/list_images.php')
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById('imagesContainer');
            imagesContainer.innerHTML = '';
            data.images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.url;
                imgElement.alt = image.name;
                imgElement.width = 100;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = function () {
                    deleteImage(image.name);
                };

                const div = document.createElement('div');
                div.appendChild(imgElement);
                div.appendChild(deleteButton);

                imagesContainer.appendChild(div);
            });
        });
}

function deleteImage(imageName) {
    fetch(`http://localhost/delete_image.php?name=${imageName}`, {
        method: 'DELETE'
    }).then(response => response.json())
        .then(data => {
            alert(data.message);
            loadImages();
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadImages();
});
