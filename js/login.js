$(document).ready(function(){
    $('#login').click(function(){

        var user = document.getElementById("user").value.toString();
        var pass = document.getElementById("pass").value;
        
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
                console.log(data);
                alert(data.statusText);
            }
        });
    });
});
