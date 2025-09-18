var usu = document.getElementById("iusuario")
var sen = document.getElementById("isenha")

function cadastrar(event) {
    event.preventDefault()
    var usuario = usu.value
    var senha = sen.value
    window.alert(`Seu Usuário é: ${usuario} e sua Senha é: ${senha}`)
    return false
}
    