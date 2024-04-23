// VALIDACAO DA PAGINA DE LOGIN

function validateFields(){
    const email = document.getElementById("email").value;
    if(!email){
        document.getElementById('recover-password-button').disable = true;
    } else if (validateEmail(email)){
        document.getElementById('recover-password-button').disable = false;
    } else {
        document.getElementById('recover-password-button').disable = true;
    }

    function
    // pegar o valor do campo de e mail
    // verificar se o email nao é vazio e se é válido
    //se verdadeiro, habilitar o botao de recuperar senha 
    // se falto,desabilitar o botao de recuperar senha 
}