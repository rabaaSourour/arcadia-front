

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("habitats-container").innerHTML =
        this.responseText;
        }
    };
    xhttp.open("GET", "habitats-container", true);
    xhttp.send();
}