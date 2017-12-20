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
        
        setListeRunes();
    }

     // Déconnexion
    $("#logout").click(function(){
        sessionStorage.clear();
    })
});

// Met en forme la page pour l'utilisateur connecté
function setLogout(){
    let nom = JSON.parse(sessionStorage.getItem("explorateur"));
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
        let location = JSON.parse(sessionStorage.getItem("explorateur"));
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
        let inox = JSON.parse(sessionStorage.getItem("explorateur"));
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

// Affiche la liste des Runes
function setListeRunes(){
    let runes = JSON.parse(sessionStorage.getItem("explorateur"));
    runes = runes.explorateur.runes;
    
    // Construction du tableau
    buildTable();
    
    // Contenu du tableau
    fillTable(runes);
    
};

// Construit le tableau de runes
function buildTable(){
    // Construction du tableau
    let table = "<table id='tabRunes' class='table table-bordered'>";
    table += "<thead><tr><th>Type</th><th>Quantité</th></tr></thead>";
    table += "<tbody></tbody></table>";

    $("#ListeRunes").html(table);
};

// Rempli le tableau de runes
function fillTable(runes){
    let chaineRunes;

    for(let i = 0; i < runes.length; i++){
        let rune = runes[i];
        var img;

        chaineRunes = "<tr><td>" + "<img src='../images/runes/" + rune.type + ".png' alt='" + rune.type + "'>   " + rune.type + "</td>";
        chaineRunes += "<td>" + rune.quantite + "</td>";
        chaineRunes += "</tr>";
        $("#tabRunes tbody").append(chaineRunes);
    }
};