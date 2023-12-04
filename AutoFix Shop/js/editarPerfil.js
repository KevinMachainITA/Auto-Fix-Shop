document.addEventListener("DOMContentLoaded", function() {
   
    // Obtiene el elemento donde se mostrará el nombre
    var nombreUsuarioElement = document.getElementById("nombre");
    var direccionUsuarioElement = document.getElementById("direccion");
    var correoUsuarioElement = document.getElementById("correo");
    var passwordUsuarioElement = document.getElementById("password");

    // Obtiene el objeto 'currentUser' del localStorage y lo convierte a JSON
    var currentUserJSON = localStorage.getItem("currentUser");
    
    // Parsea el JSON para obtener el objeto JavaScript
    var currentUser = JSON.parse(currentUserJSON);

    console.log(currentUser)
    // Muestra el nombre de usuario, correo y contraseña en el elemento HTML
    nombreUsuarioElement.value = currentUser.nombre;
    correoUsuarioElement.value = currentUser.email;
    passwordUsuarioElement.value = currentUser.password;
    direccionUsuarioElement.value = currentUser.direccion;
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
    // Se establecen las credenciales del usuario (clase de usuario)
    var user = new User(email, password, nombre, direccion);

    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirige a otra página o realiza otras acciones después de iniciar sesión
    window.location.href = 'perfil.html';
}


class User {
    constructor(email, password, nombre, direccion) {
      this.email = email;
      this.password = password;
      this.nombre = nombre;
      this.direccion = direccion;
    }
}