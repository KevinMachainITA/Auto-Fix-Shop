document.addEventListener("DOMContentLoaded", function() {
   
    // Obtiene el elemento donde se mostrará el nombre
    var nombreUsuarioElement = document.getElementById("nombre");
    var direccionUsuarioElement = document.getElementById("direccion");
    var correoUsuarioElement = document.getElementById("correo");
    var passwordUsuarioElement = document.getElementById("password");

    // Muestra el nombre de usuario, correo y contraseña en el elemento HTML
    nombreUsuarioElement.value = usuario.nombre;
    correoUsuarioElement.value = usuario.email;
    passwordUsuarioElement.value = usuario.password;
    direccionUsuarioElement.value = usuario.direccion;
});

document.getElementById('botonGuardar').addEventListener('click', function () {
    guardarUser();
});

function guardarUser() {
    // Obtén los valores de correo electrónico y contraseña y en este caso un nombre por default
    var email = document.getElementById('correo').value;
    var direccion = document.getElementById('direccion').value;
    var password = document.getElementById('password').value;
    var nombre = document.getElementById('nombre').value;
    // Valida los campos (puedes agregar más validaciones según tus requisitos)
    if (email === '' || password === '' || nombre === '' | direccion === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Redirige a otra página o realiza otras acciones después de iniciar sesión
    window.location.href = 'perfil.html';
}
