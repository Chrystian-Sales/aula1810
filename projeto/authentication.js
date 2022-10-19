const baseURL = "http://127.0.0.1:5500"
/*
@param {String} email 
@param {String} senha 
@return {Object} 
*/
function loginFirebase(email, senha){
    firebase
    .auth()
    .signInWithEmailAndPasswor(email, senha)
    .then(result => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href = `${baseURL}/home.html`
    })
    .catch(error => {
        alert(`Erro ao efetuar o login: ${error.message}`)
    })
}