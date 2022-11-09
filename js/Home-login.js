
function logar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "admin@admin.com" && senha == "admin"){
        location.href = "../html/Home-produtos.html";
        
    }else{
        alert("Usuario ou senha incorretos.")
    }
}

