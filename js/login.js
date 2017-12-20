$(document).ready(function(){
    $('#login').click(function(){
        let user = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        
        let estValide = true;

        // Vérifier que les champs ont bien été entré
        if(user.length < 1){
            estValide = false;
            displayError("Vous devez entrer votre adresse courriel", "alert-danger");
        }
        else if(pass < 1){
            estValide = false;        
            displayError("Vous devez entrer votre mot de passe", "alert-danger");
        }
        if(estValide){
            $.ajax({
                url: "https://synthese-fredzx.c9users.io/connexion",
                dataType: 'json',
                type: 'POST',
                data: JSON.stringify({ "username": user, "password": pass }),
                contentType: "application/json",
                success: function(data){
                    sessionStorage.token = data.token;
                    sessionStorage.explorateur = JSON.stringify(data);
                    window.location.href="../index.html";
                },
                error: function(data){
                    switch(data.status){
                        case 401:
                            displayError("Adresse courriel ou mot de passe invalide", "alert-warning");
                            break;
                        default:
                            displayError("Erreur de serveur (" + data.status + ")", "alert-danger");
                            break;
                    }
                }
            });
        }
    });
    // Afficher les erreurs
    function displayError(error, niveau) {
      let errorB = "<div class='alert " + niveau +" mx-auto mt-5 col-md-7'><p>";
      let errorE = "</p></div>";
      document.getElementById("erreur").innerHTML = errorB + error + errorE;
    }
});
