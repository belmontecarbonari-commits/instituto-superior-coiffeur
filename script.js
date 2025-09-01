// Mostrar contacto al hacer clic en el menú
document.getElementById("mostrar-contacto").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("contacto").style.display = "block";
});

// Evitar refresh en el formulario
document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensaje enviado ✅");
    this.reset();
});
