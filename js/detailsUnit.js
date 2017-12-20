const SERVICE_URL = "https://synthese-fredzx.c9users.io/units/";

$(document).ready(function(){
  //var uuid = 'YjZlNWVmNGEtNDg4NC00MmFmLWFiNzktYmQ3ZDkxM2IzN2Vi';

  let temp = getUrlVars();
  //.searchParams.get("uuid");
  //if(temp.uuid === null);
  //  displayError("Ce unit n'existe pas", "alert-warning");
    // Regarde si l'utilisateur est connecté
    if(sessionStorage.getItem("token") !== null){
      $.ajax({
          type: 'GET',
          url: SERVICE_URL + temp.uuid,
          dataType: 'json',
          headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") },
          success: function(data){
              printData(data);
          },
          // Gestion des erreurs
          error: function(data){
            switch(data.status) {
              case 403:
                displayError("Vous devez être connecté pour avoir accès à cette page", "alert-warning");
                break;
              default:
                displayError("Erreur de serveur (" + data.status + ")", "alert-danger");
              break;
            }
          }
      });
    }
});

// Stack overflow
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }
// -------------------

function setWeapons(data) {
  let weapons = "<table class='table'>";

  for(let i = 0; i < data.length; i++) {
    weapons += "<tr><th>";
    weapons += data[i];
    weapons += "</th><td><img src='../images/runes/weapons/" + data[i] + ".png'>";
    weapons += "</img></td></tr>"
  }
  weapons += "</table>"
  document.getElementById("weapons").innerHTML = weapons;
}

function setAbilities(data) {
  let abilities = "<table class='table'>";

  for(let i = 0; i < data.length; i++) {
    abilities += "<tr><td><img src='../images/runes/" + data[i] + ".png'> " + data[i];
    abilities += "</img></td></tr>"
  }
  abilities += "</table>"
  document.getElementById("abilities").innerHTML = abilities;
}

function setAffinity(data) {
  document.getElementById("affinity").innerHTML = "<img src='../images/runes/" + data + ".png'>";
}

function printData(data) {
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("life").innerHTML = data.life;
  document.getElementById("speed").innerHTML = data.speed;
  document.getElementById("number").innerHTML = data.number;
  document.getElementById("set").innerHTML = data.set;
  document.getElementById("ultimate").innerHTML = data.ultimate;
  setWeapons(data.weapons);
  setAbilities(data.abilities);
  setAffinity(data.affinity);
  document.getElementById("image").src = data.imageUrl;
}

// Afficher les erreurs
function displayError(error, niveau) {
  let errorB = "<div class='alert " + niveau +" mx-auto col-md-12'><p>";
  let errorE = "</p></div>";
  document.getElementById("erreur").innerHTML = errorB + error + errorE;
}
