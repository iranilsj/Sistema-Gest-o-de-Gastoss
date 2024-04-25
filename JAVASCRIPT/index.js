
//CHAMAR A FUNCAO TOGGLE LIGADO/DESLIGADO
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErro();
}
function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErro();
}
//VERIFICAR SE O EMAIL É VÁLIDO
function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

// VALIDACAO DE EMAIL PARA RECUPERAR SENHA - TOGGLE LIGADO/DESLIGADO
function toggleButtonsDisable() {
    //constante para validar e mail
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;
    //constante para validar senha
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;

}

// MENSASGEM DE ERRO PARA VALIDACAO DE EMAIL
function toggleEmailErro() {
    const email = document.getElementById('email').value;
    //mensagen para campo email em branco
    if (!email) {
        form.emailRequiredErro().style.display = "block";
    } else {
        form.emailRequiredErro().style.display = "none";
    } // mensagem de email invalido
    if (validateEmail(email)) {
        form.emailInvalidErro().style.display = "none";
    } else {
        form.emailInvalidErro().style.display = "block";
    }
}

// VERIFICAR SE A SENHA É VÁLIDA
function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

// MENSASGEM DE ERRO PARA VALIDACAO DE EMAIL E SENHA
function togglePasswordErro() {
    const password = form.password().value;
    if (!password) {
        form.passwordRequiredErro().style.display = "block";
    } else {
        form.passwordRequiredErro().style.display = "none";
    }
}
const form = {
    email: () => document.getElementById('email'),
    emailRequiredErro: () => document.getElementById('email-required-erro'),
    emailInvalidErro: () => document.getElementById('email-invalid-erro'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequiredErro: () => document.getElementById('password-required-erro'),
    recoverPassword: () => document.getElementById('recover-password-button')
}
function  login(){
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response =>{
        window.location.href = "HTML/inicio.html";
    }).catch(error =>{
        alert(getErrorMessage(error))
    });
}

function getErrorMessage(error){
    if (error.code == "auth/invalid-credential"){
        return "Usuário não Encontrado";
    }
    return error.message;
}

function registro(){
    window.location.href = "HTML/registro.html";
}