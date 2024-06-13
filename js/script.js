const tokenCookieName = "accesstoken";
const signoutBtn = document.getElementById("signout-btn");
const RoleCookieName = "role";

signoutBtn.addEventListener("click", signout);

function getRole() {
    return getCookie(RoleCookieName);
}

function signout() {
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}

function setToken(token) {
    setCookie(tokenCookieName, token, 7);
}

function getToken() {
    return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    setCookie(name, "", -1);
}

function isConnected() {
    const token = getToken();
    return token !== null && token !== undefined && token !== "";
}

if (isConnected()) {
    console.log("User is connected");
} else {
    console.log("User is not connected");
}

function showAndHideElementsForRoles() {
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    allElementsToEdit.forEach(element => {
        switch (element.dataset.show) {
            case 'disconnected':
                if (userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if (!userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if (!userConnected || role !== "admin") {
                    element.classList.add("d-none");
                }
                break;
            case 'vétérinaire':
                if (!userConnected || role !== "vétérinaire") {
                    element.classList.add("d-none");
                }
                break;
            case 'employé':
                if (!userConnected || role !== "employé") {
                    element.classList.add("d-none");
                }
                break;
        }
    });
}

window.onload = function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    showAndHideElementsForRoles().then(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    });
};


