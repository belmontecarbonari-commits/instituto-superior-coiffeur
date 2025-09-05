// --------- GALERÍA CARRUSEL ---------
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const slideWidth = 320; // ancho img + margen

nextBtn.addEventListener("click", () => {
    if (index < track.children.length - 1) {
        index++;
        track.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        track.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

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
