const email = "Erickfalubay@gmail.com"
const senha = 12345

function go(){
    var emailvalidação = document.getElementById("Email").value;
    var senhavalidação = document.getElementById("senha").value;

    if(emailvalidação == email && senhavalidação == senha){
        location.href = "home.html";
    }
    else(
        console.log("Teste")
    )
}