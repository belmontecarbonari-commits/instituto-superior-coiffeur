function abrirContacto() {
  document.getElementById("modal-contacto").style.display = "block";
}

function cerrarContacto() {
  document.getElementById("modal-contacto").style.display = "none";
}

// Cerrar modal al hacer clic afuera
window.onclick = function(event) {
  let modal = document.getElementById("modal-contacto");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
