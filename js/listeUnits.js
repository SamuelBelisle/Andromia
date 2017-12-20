const SERVICE_URL = "https://synthese-fredzx.c9users.io/units"

$(document).ready(function(){
    // Regarde si l'utilisateur est connecté
    if(sessionStorage.getItem("token") === null){
        // L'utilisateur n'est pas connecté, on affiche Connexion
        setLogin();
        setLocation(0);
        setInox(0);
        
        setMessage();
    }
    else{
        // L'utilisateur est connecté, on affiche Déconnexion
        setLogout();
        setLocation(1);
        setInox(1);
        
        setListeUnits();
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
    document.getElementById("StatusLink").href="#";
    document.getElementById("StatusLink").innerHTML='<i id="ConnectStatus" class="fas fa-fw fa-sign-out-alt"></i>Déconnexion';
    $("#StatusLink").attr("data-toggle", 'modal');
    $("#StatusLink").attr("data-target", '#logoutModal');
};

// Met en forme la page pour un utilisateur non connecté
function setLogin(){
    document.getElementById("wlcmessage").innerHTML="Bonjour Visiteur!";
    document.getElementById("StatusLink").href="./login.html";
    document.getElementById("StatusLink").innerHTML='<i id="ConnectStatus" class="fas fa-fw fa-sign-in-alt"></i>Connexion';
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
        location = location.explorateur.location;
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
        inox = inox.explorateur.inox;
        document.getElementById("totalInox").innerHTML=inox;
    }
};

// Affiche un message d'erreur
function setMessage(){
    let erreur = "<div class='alert alert-warning mx-auto mt-5 col-md-6 text-center'><p>";
    erreur += "Vous devez être connecté pour voir cette page";
    erreur += "</p></div>";

    $("#ListeRunes").html(erreur);

};

// Affiche la liste des Units
function setListeUnits(){

    // Aller chercher les units sur le serveurs

    // Construit le tableau
    buildTable();

    // Remplir le tableau
    fillTable();
};

// Construit le tableau de units
function buildTable(){
    // Construction du tableau
   
};

// Rempli le tableau de units
function fillTable(units){

};