// VERIFICAR SE O EMAIL É VÁLIDO
function validateEmail(email) {
    return /\S+@\S+\.\S/.test(email);
}