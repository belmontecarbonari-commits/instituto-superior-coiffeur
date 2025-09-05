// --------- GALERÍA CARRUSEL INFINITO + AUTO-PLAY ---------
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0; 
const slideWidth = 320; // ancho imagen + margen
const totalSlides = track.children.length;

// mover carrusel
function moverCarrusel(direccion) {
    if (direccion === "next") {
        index++;
        if (index >= totalSlides) index = 0; // vuelve al inicio
    } else {
        index--;
        if (index < 0) index = totalSlides - 1; // vuelve al final
    }
    track.style.transform = `translateX(${-slideWidth * index}px)`;
}

nextBtn.addEventListener("click", () => moverCarrusel("next"));
prevBtn.addEventListener("click", () => moverCarrusel("prev"));

// autoplay cada 3s
setInterval(() => moverCarrusel("next"), 3000);

// --------- MODAL CONTACTO ---------
const modal = document.getElementById("contacto-modal");
const abrirContacto = document.getElementById("abrir-contacto");
const cerrarBtn = document.querySelector(".cerrar");

abrirContacto.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "flex";
});

cerrarBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
