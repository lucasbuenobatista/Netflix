const email_erick = "Erick@Metflix.com.br"
const senha_erick = "Erick123"
const email_lucas = "Lucas@Metflix.com.br"
const senha_lucas = "Lucas123"

function go{
    var emailvalidação = document.getElementById("Email").value;
    var senhavalidação = document.getElementById("senha").value;


    if(emailvalidação == email_erick && senhavalidação == senha_erick){
        location.href = "home.html";
    }
    else if(emailvalidação == email_lucas && senhavalidação == senha_lucas){
        location.href = "home.html";
    }
    else{
        window.alert("Senha ou E-mail incorreto...")
    }
}
