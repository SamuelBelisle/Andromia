$(document).ready(function(){
    $('#login').click(function(){
        
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;

        
        $.ajax({
            type: 'POST',
            url: 'https://synthese-fredzx.c9users.io/connexion',
            headers: { "content-type": "application/json" },
            data: { "username": user, "password": pass },
            success: function(data){
                sessionStorage.token = data.token;
            },
            error: function(){
                alert("Échec de la connexion");
            }
        });
    });
});