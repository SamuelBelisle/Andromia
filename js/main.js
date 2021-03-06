$(document).ready(function(){
    // Regarde si l'utilisateur est connecté
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

    // Déconnexion
    $("#logout").click(function(){
        sessionStorage.clear();
    })
});

// Met en forme la page pour l'utilisateur connecté
function setLogout(){
    var nom = JSON.parse(sessionStorage.getItem("explorateur"));
    nom = nom.explorateur.nom;

    document.getElementById("wlcmessage").innerHTML="Bonjour Explorateur " + nom + " !";
    document.getElementById("StatusLink").href="";
    document.getElementById("StatusLink").innerHTML='<i id="ConnectStatus" class="fas fa-fw fa-sign-out-alt"></i>   Déconnexion';
    $("#StatusLink").attr("data-toggle", 'modal');
    $("#StatusLink").attr("data-target", '#logoutModal');
};

// Met en forme la page pour un utilisateur non connecté
function setLogin(){
    document.getElementById("wlcmessage").innerHTML="Bonjour Visiteur!";
    document.getElementById("StatusLink").href="pages/login.html";
    document.getElementById("StatusLink").innerHTML='<i id="ConnectStatus" class="fas fa-fw fa-sign-in-alt"></i>    Connexion';
};

// Affiche la location
function setLocation(logged){

    // utilisateurnon connecté
    if(logged == 0){
        document.getElementById("userLocation").innerHTML= "Inconnue";
    }
    // utilisateur connecté
    else{
        var location = JSON.parse(sessionStorage.getItem("explorateur"));
        location = " " + location.explorateur.location;
        document.getElementById("userLocation").innerHTML= location;
    }
};

// Affiche le nombre d'inox
function setInox(logged){
    //utilisateur non connecté
    if(logged == 0){
        document.getElementById("totalInox").innerHTML= "Inconnu";    
    }
    // utilisateur connecté
    else{   
        var inox = JSON.parse(sessionStorage.getItem("explorateur"));
        inox = " " + inox.explorateur.inox;
        document.getElementById("totalInox").innerHTML=inox;
    }
};
