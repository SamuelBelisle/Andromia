$(document).ready(function(){
    // Regarde si l'utilisateur est connecté
    if(localStorage.getItem("Token") === null){
        // L'utilisateur n'est pas connecté, on affiche Connexion
        setLogin();
    }
    else{
        // L'utilisateur est connecté, on affiche Déconnexion
        setLogout();
    }
});

function setLogout(){
    document.getElementById("wlcmessage").innerHTML="Bonjour Explorateur!";
    document.getElementById("StatusLink").href="#";
    document.getElementByID("StatusLink").innerHTML="Déconnection";
};

function setLogin(){
    document.getElementById("wlcmessage").innerHTML="Bonjour Visiteur!";
    document.getElementById("StatusLink").href="pages/login.html";
    document.getElementById("StatusLink").innerHTML="Connexion";
};