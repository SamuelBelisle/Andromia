const SERVICE_URL = "https://synthese-fredzx.c9users.io/units"

$(document).ready(function(){
    // Regarde si l'utilisateur est connecté
    if(sessionStorage.getItem("token") !== null){
        setListeUnits();
    }
});

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
