document.addEventListener("DOMContentLoaded", function() {
   
    // Obtiene el elemento donde se mostrará el nombre
    var nombreUsuarioElement = document.getElementById("nombreUsuario");
    var correoUsuarioElement = document.getElementById("correoUsuario");

    // Obtiene el objeto 'currentUser' del localStorage y lo convierte a JSON
    var currentUserJSON = localStorage.getItem("currentUser");
    
    // Parsea el JSON para obtener el objeto JavaScript
    var currentUser = JSON.parse(currentUserJSON);

    // Muestra el nombre de usuario y su correo en el elemento HTML
    nombreUsuarioElement.textContent = "Hola, " + currentUser.nombre + "!";
    correoUsuarioElement.textContent = currentUser.email;
    
});