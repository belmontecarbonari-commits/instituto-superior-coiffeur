// Mostrar la sección contacto solo al hacer click
document.getElementById("mostrar-contacto").addEventListener("click", function() {
    const contacto = document.getElementById("contacto");
    contacto.style.display = "block";
    this.style.display = "none"; // ocultar el botón después
});

// Evitar que el formulario haga refresh y mostrar alerta
document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensaje enviado ✅");
    this.reset();
});
