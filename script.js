// ---------------- SCROLL SUAVE Y MOSTRAR CONTACTO ----------------
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        // Mostrar la sección si estaba oculta (ej: Contacto)
        if(target.classList.contains('hidden')){
            target.classList.remove('hidden');
        }

        // Scroll suave hacia la sección
        target.scrollIntoView({behavior: 'smooth'});
    });
});

// ---------------- SLIDESHOW AUTOMÁTICO ----------------
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Cambia cada 3 segundos
}

showSlides();
