$(document).ready(function(){
    // Regarde si l'utilisateur est connecté
    if(sessionStorage.getItem("token") === null){
        // L'utilisateur n'est pas connecté, on affiche Connexion
        setLogin();
        setMenu(false);
        setMessage();
    }
    else{
        // L'utilisateur est connecté, on affiche Déconnexion
        setHeader();
        setLogout();
        setLocation();
        setInox();
        setMenu(true);
    }

     // Déconnexion
    $("#logout").click(function(){
        sessionStorage.clear();
    })
});

function setHeader() {
  var header = '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-map-marker-alt"></i><span id="userLocation"></span></a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-gem"></i><span id="totalInox"></span></a></li>';

  var login = document.getElementById("menuHeader").innerHTML;
  document.getElementById("menuHeader").innerHTML = header + login;
}

function setMenu(isConnected) {
  let carteHref = document.getElementById("index").href;
  let carte = '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Carte"><a class="nav-link" id="carte" href="./index.html"><i class="fa fa-fw fa-globe"></i><span class="nav-link-text"> Carte</span></a></li>';
  if(isConnected) {
    let unitsHref = document.getElementById("units").href;
    let runesHref = document.getElementById("runes").href;
    document.getElementById("exampleAccordion").innerHTML = carte + '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Units"><a id="units" class="nav-link" href="' + unitsHref + '"><i class="fa fa-fw fa-users"></i><span class="nav-link-text"> Mes Units</span></a></li><li class="nav-item" data-toggle="tooltip" data-placement="right" title="Runes"><a class="nav-link" id="runes" href="' + runesHref + '"><i class="fab fa-fw fa-gripfire"></i><span class="nav-link-text"> Mes Runes</span></a></li>';
  } else {
      document.getElementById("exampleAccordion").innerHTML = carte
  }
  document.getElementById("carte").href = carteHref;
}

// Met en forme la page pour l'utilisateur connecté
function setLogout(){
    var nom = JSON.parse(sessionStorage.getItem("explorateur"));
    nom = nom.explorateur.nom;

    document.getElementById("wlcmessage").innerHTML="Bonjour Explorateur " + nom + " !";
    document.getElementById("StatusLink").href="#";
    document.getElementById("StatusLink").innerHTML='<i id="ConnectStatus" class="fas fa-fw fa-sign-out-alt"></i>   Déconnexion';
    $("#StatusLink").attr("data-toggle", 'modal');
    $("#StatusLink").attr("data-target", '#logoutModal');
};

// Met en forme la page pour un utilisateur non connecté
function setLogin(){
    document.getElementById("wlcmessage").innerHTML="Bonjour Visiteur!";
    document.getElementById("StatusLink").innerHTML='<i id="ConnectStatus" class="fas fa-fw fa-sign-in-alt"></i>    Connexion';
};

// Affiche la location
function setLocation(){
    var location = JSON.parse(sessionStorage.getItem("explorateur"));
    location = " " + location.explorateur.location;
    if(location == "")
      document.getElementById("userLocation").innerHTML= "Indéfinie";
    else
      document.getElementById("userLocation").innerHTML= location;
};

// Affiche le nombre d'inox
function setInox(){
    var inox = JSON.parse(sessionStorage.getItem("explorateur"));
    inox = " " + inox.explorateur.inox;
    document.getElementById("totalInox").innerHTML=inox;
};

// Affiche un message d'erreur
function setMessage(){
    let erreur = "<div class='alert alert-warning mx-auto mt-5 col-md-6 text-center'><p>";
    erreur += "Vous devez être connecté pour voir cette page";
    erreur += "</p></div>";

    $("#ListeRunes").html(erreur);

};
