document.getElementById('registroButton').addEventListener('click', function () {
    registroUser();
});

function registroUser() {
    // Obtén los valores de correo electrónico y contraseña 
    var nombre = document.getElementById('nombre').value;
    var direccion = document.getElementById('direccion').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Valida los campos (puedes agregar más validaciones según tus requisitos)
    if (email === '' || password === '' || nombre === '' || direccion === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Se establecen las credenciales del usuario (clase de usuario)
    var user = new User(email, password, nombre, direccion);

    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirige a otra página o realiza otras acciones después de iniciar sesión
    window.location.href = 'home.html';
}

class User {
    constructor(email, password, nombre, direccion) {
      this.email = email;
      this.password = password;
      this.nombre = nombre;
      this.direccion = direccion;
    }
}