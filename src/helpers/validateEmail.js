/**
 * La fonction valide les emails et retourne un tableau avec les différentes parties de l'email si l'email est correct, sinon elle retourne null
 * @param {string} email
 * @returns {array|null}
 */
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

export { validateEmail };
