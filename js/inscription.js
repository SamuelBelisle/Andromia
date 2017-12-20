$(document).ready(function(){
    $('#login').click(function(){
        let nom = document.getElementById("inscription").elements.namedItem("nom").value;
        let courriel = document.getElementById("inscription").elements.namedItem("courriel").value;
        let password = document.getElementById("inscription").elements.namedItem("password").value;
        let confirmPassword = document.getElementById("inscription").elements.namedItem("confirmPassword").value;

        // Vérifier que les champs ont bien été entré
        if(nom == null)
          displayError("Vous devez entrer votre nom", "alert-danger");
        else if(courriel == null)
          displayError("Vous devez entrer votre courriel", "alert-danger");
        else if(password == null)
          displayError("Vous devez entrer un mot de passe", "alert-danger");


        // Vérifier que les mots de passes sont identique
        if(password !== confirmPassword) {
            displayError("Les mots de passes doivent être identique", "alert-danger");
          } else {
            // Tenter de créer l'explorateur
            $.ajax({
                type: 'POST',
                url: 'https://synthese-fredzx.c9users.io/inscription',
                dataType: 'json',
                headers: { "content-type": "application/json" },
                data: JSON.stringify({ "nom": nom, "courriel": courriel, "password": password }),
                success: function(data){
                    $(location).attr('href', './login.html');
                },
                // Gestion des erreurs
                error: function(data){
                  switch(data.status) {
                    case 409:
                      displayError("Ce courriel est déjà utilisé", "alert-warning");
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
