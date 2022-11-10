
function logar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "admin@admin.com" && senha == "admin"){
        location.href = "../html/Home-produtos.html";
        
    }else{
        alert("Usuario ou senha incorretos.")
    }
}

function enviarMensagem(){
    if((document.getElementById("nome").value == "") || (document.getElementById("msg").value == "")){
        alert('Todos os campos devem ser preenchidos');
        document.getElementById("nome").focus();
        return false
        }else{
            alert('Sua mensagem foi encaminhada com sucesso!');
        }
}


