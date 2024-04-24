// VALIDACAO DA PAGINA DE LOGIN

function validateFields(){
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid
}
function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}
function isPasswordValid(){
    const password =  document.getElementById('password').value
    if (!password){
        return false; 
    }
    return true;
}
function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}
    // pegar o valor do campo de e mail
    // verificar se o email nao é vazio e se é válido
    //se verdadeiro, habilitar o botao de recuperar senha 
    // se falto,desabilitar o botao de recuperar senha 
