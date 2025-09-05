// --------- GALERÍA CARRUSEL INFINITO + AUTO-PLAY ---------
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// duplicar imágenes para simular loop infinito
track.innerHTML += track.innerHTML;

// ancho dinámico
let slideWidth = track.children[0].getBoundingClientRect().width + 20;
let index = 0;

function moverCarrusel(direccion) {
    if (direccion === "next") {
        index++;
    } else {
        index--;
        if (index < 0) index = track.children.length / 2;
    }

    // resetear cuando llega al final de la primera tanda
    if (index >= track.children.length / 2) {
        index = 0;
        track.style.transition = "none";
        track.style.transform = `translateX(0px)`;
        setTimeout(() => {
            track.style.transition = "transform 0.5s ease-in-out";
        }, 50);
    } else {
        track.style.transform = `translateX(${-slideWidth * index}px)`;
    }
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
