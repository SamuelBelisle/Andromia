$(document).ready(function(){
    // Regarde si l'utilisateur est connecté
    if(sessionStorage.getItem("token") !== null){
        setListeRunes();
    }
});

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
