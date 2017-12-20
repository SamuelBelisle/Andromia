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
    let myToken = sessionStorage.getItem("token");

    $.ajax({
        url: SERVICE_URL,
        type: 'GET',
        headers: { 'Authorization': 'bearer ' + myToken},
        dataType: 'json',
        complete: function(result, status){
            units = result.responseJSON.items;

            // Construit le tableau
            buildTable();

            // Remplir le tableau
            fillTable(units);
        }
    });
};

// Construit le tableau de units
function buildTable(){
    // Construction du tableau
    let table = "<table id='tabUnits' class='table table-bordered'>";
    table += "<thead><tr><th>Nom</th><th>Armes</th><th>Aptitudes</th><th>Attaque Ultime</th><th>Kernel</th><th>Détails</th></thead>";
    table += "<tbody></tbody></table>";

    $("#ListeUnits").html(table);
};

// Rempli le tableau de units
function fillTable(units){
    let chaineUnits;

    for(let i = 0; i < units.length; i++){
        let unit = units[i];
        let span = Math.max(unit.weapons.length, unit.abilities.length);

        //chaineUnits = "<tr><td rowspan='" + span + "'>" + unit.name + "</td>";
        chaineUnits = "<tr><td>TODO</td>";

        // Ajoute les weapons
        chaineUnits += "<td>";
        for(let j = 0; j < unit.weapons.length; j++){
            chaineUnits += "<img src='../images/runes/weapons/" + unit.weapons[j] + ".png' style='height:40px'> " + unit.weapons[j] + "</br>";
        }
        chaineUnits += "</td>";


        // Ajoute les abilities
        chaineUnits += "<td>";
        for(let k = 0; k < unit.abilities.length; k++){
            chaineUnits += "<img src='../images/runes/" + unit.abilities[k] + ".png'>   " + unit.abilities[k] + "</br>";
        }
        chaineUnits += "</td>";

        // ultimate
        chaineUnits += "<td>" + unit.ultimate + "</td>";

        // kernel
        chaineUnits += "<td>" + unit.kernel + "</td>";

        // Détails
        chaineUnits += "<td><a href='./unit.html?uuid=" + unit.href.substring(41) + "'>Détails</a></td>";

        $("#tabUnits tbody").append(chaineUnits);
    }
};
