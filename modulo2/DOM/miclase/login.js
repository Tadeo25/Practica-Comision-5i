const formLogin = document.getElementById(`formLogin`)
const inputUsuario = document.getElementById(`usuario`)
const inputContrasenia = document.getElementById(`contrasenia`)
const alerta = document.getElementById(`alerta`)
const persona = {
    usuario: `tadeo` ,
    contrasenia: `lol` ,
}

formLogin.onsubmit = function (e) {
    e.preventDefault();
    const usuario = inputUsuario.value;
    const contrasenia = inputContrasenia.value;
    const usuarioValido = usuario == persona.usuario && contrasenia == persona.document ;
    if (usuarioValido) {
        alert('logueo exitoso')
        window.location.href = 'index.html' ;
    } else {
        alert(`datos invalidos`)
        alerta.classList.remove(`d-none`);
    }
}

