$(document).ready(function(){
    // Regarde si l'utilisateur est connecté
    if(sessionStorage.getItem("token") === null){
        // L'utilisateur n'est pas connecté, on affiche Connexion
        setLogin();
       // setLocation();
    }
    else{
        // L'utilisateur est connecté, on affiche Déconnexion
        setLogout();
        setLocation();
        setInox();
    }
});

function setLogout(){
    var nom = JSON.parse(sessionStorage.getItem("explorateur"));
    nom = nom.explorateur.nom;

    document.getElementById("wlcmessage").innerHTML="Bonjour Explorateur " + nom + " !";
    document.getElementById("StatusLink").href="#";
    document.getElementById("StatusLink").innerHTML='<i id="ConnectStatus" class="fas fa-fw fa-sign-out-alt"></i>Déconnexion';
};

function setLogin(){
    document.getElementById("wlcmessage").innerHTML="Bonjour Visiteur!";
    document.getElementById("StatusLink").href="pages/login.html";
    document.getElementById("StatusLink").innerHTML='<i id="ConnectStatus" class="fas fa-fw fa-sign-out-alt"></i>Connexion';
};

function setLocation(){
    var location = JSON.parse(sessionStorage.getItem("explorateur"));
    location = location.explorateur.location;
    document.getElementById("userLocation").innerHTML= location;
};

function setInox(){
    var inox = JSON.parse(sessionStorage.getItem("explorateur"));
    inox = inox.explorateur.inox;
    document.getElementById("totalInox").innerHTML=inox;
};