document.getElementById('loginButton').addEventListener('click', function () {
    loginUser();
});

function loginUser() {
    // Obtén los valores de correo electrónico y contraseña y en este caso un nombre por default
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var nombre = 'Luis Alfonso García Machain'
    // Valida los campos (puedes agregar más validaciones según tus requisitos)
    if (email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Se establecen las credenciales del usuario (clase de usuario)
    var user = new User(email, password, nombre);

    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirige a otra página o realiza otras acciones después de iniciar sesión
    window.location.href = 'home.html';
}

class User {
    constructor(email, password, nombre) {
      this.email = email;
      this.password = password;
      this.nombre = nombre;
    }
}