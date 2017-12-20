$(document).ready(function(){
    // Regarde si l'utilisateur est connecté
    console.log(sessionStorage.getItem("token"));
    if(sessionStorage.getItem("token") === null){
        // L'utilisateur n'est pas connecté, on affiche Connexion
        setLogin();
        setLocation(0);
        setInox(0);
    }
    else{
        // L'utilisateur est connecté, on affiche Déconnexion
        setLogout();
        setLocation(1);
        setInox(1);
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

function setLocation(logged){

    if(logged == 0){
        document.getElementById("userLocation").innerHTML= "Inconnue";
    }
    else{
        var location = JSON.parse(sessionStorage.getItem("explorateur"));
        location = location.explorateur.location;
        document.getElementById("userLocation").innerHTML= location;
    }
};

function setInox(logged){

    if(logged == 0){
        document.getElementById("totalInox").innerHTML= "Inconnu";
        
    }
    else{   
        var inox = JSON.parse(sessionStorage.getItem("explorateur"));
        inox = inox.explorateur.inox;
        document.getElementById("totalInox").innerHTML=inox;
    }
};
