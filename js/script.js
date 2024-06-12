const tokenCookieName = "accesstoken";
const signoutBtn = document.getElementById("signout-btn");
const RoleCookieName = "role";

signoutBtn.addEventListener("click", signout);


function signout(){
    eraseCookie(tokenCookieName);
    window.location.reload();
}

function getRole(){
    return getCookie(RoleCookieName);
}

function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}




function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    setCookie(name, "", -1); // Utilisation de setCookie pour effacer le cookie
}

function isConnected() {
    const token = getToken();
    return token !== null && token !== undefined && token !== ""; // Vérification de la valeur du token
}

// Appel à isConnected pour vérifier l'état de la connexion
if (isConnected()) {
    console.log("User is connected");
} else {
    console.log("User is not connected");
}

