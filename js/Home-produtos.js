function botaoAdicionarProdutos(){
    location.href = "../html/Adicionar-produtos.html";
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
