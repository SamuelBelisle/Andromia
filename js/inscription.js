$(document).ready(function(){
  /*$('#inscription').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        password1: {
            validators: {
                identical: {
                    field: 'password2',
                    message: 'The password and its confirm are not the same'
                }
            }
        }
    }
});*/
    $('#login').click(function(){
        var nom = document.getElementById("inscription").elements.namedItem("nom").value;
        var courriel = document.getElementById("inscription").elements.namedItem("courriel").value;
        var password = document.getElementById("inscription").elements.namedItem("password").value;
        var confirmPassword = document.getElementById("inscription").elements.namedItem("confirmPassword").value;

        if(password !== confirmPassword)
          alert('La confirmation du mot de passe n\'est pas valide');
          else {
            $.ajax({
                type: 'POST',
                url: 'https://synthese-fredzx.c9users.io/inscription',
                dataType: 'json',
                headers: { "content-type": "application/json" },
                data: { "nom": nom, "courriel": courriel, "password": password },
                success: function(data){
                    alert('well played');
                },
                error: function(data){
                  console.log(data);
                  alert(data.statusText);
                }
            });
          }
    });
});
