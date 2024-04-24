    // VALIDACAO DE EMAIL PARA RECUPERAR SENHA
    function validateFields() {
        //constante para validar e mail
        const emailValid = isEmailValid();
        document.getElementById('recover-password-button').disabled = !emailValid;
        //constante para validar senha
        const passwordValid = isPasswordValid();
        document.getElementById('login-button').disabled = !emailValid || !passwordValid;

    }
//VERIFICAR SE O EMAIL É VÁLIDO
    function isEmailValid(){
        const email = document.getElementById("email").value;
        if(!email) {
            return false;
        } 
        return validateEmail(email);
    }

    // VALIDACAO DA SENHA 
    function isPasswordValid(){
        const password = document.getElementById('password').value;
        if(!password){
            return false;
        }
        return true;
    }

    // VERIFICAR SE O EMAIL É VÁLIDO
    function validateEmail(email) {
        return /\S+@\S+\.\S/.test(email);
    }





/*// VALIDACAO DA PAGINA DE LOGIN
function onChageEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChagePasword() {
    toggleButtonsDisable();
    togglePasswordErros();
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

//MOSTRAR OU ESCONDER OS ERRO DE EMAIL QUANDO FOR NECESSARIO
function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredErro().style.display = email ? "none" : "block";

    form.emailRequiredErro().style.display = validateEmail(email) ? "none" : "block";
    
}

//MOSTRAR OU ESCONDER OS ERRO DE SENHA
function togglePasswordErros() {
    const password = form.password().value;
  
        form.passwordRequiredErro().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = form.password().value
    if (!password) {
        return false;
    }
    return true;
}

const form = {
    email: () => document.getElementById('email'),
    emailRequiredErro: () => document.getElementById('email-required-error'),
    emailInvalidErro: () => document.getElementById('email-invalid-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequiredErro: () => document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button')
} */
