document.addEventListener("DOMContentLoaded", function() {
   
    // Obtiene el elemento donde se mostrará el nombre
    var nombreUsuarioElement = document.getElementById("nombre");
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
});



class User {
    constructor(email, password, nombre) {
      this.email = email;
      this.password = password;
      this.nombre = nombre;
    }
}