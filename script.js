// ---------------- SCROLL SUAVE ----------------
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({behavior: 'smooth'});
        }
    });
});

// ---------------- CARRUSEL SLIDER ----------------
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

// Función mover slider
function goToSlide(index){
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
}

// Flechas
prevBtn.addEventListener('click', () => {
    if(currentIndex === 0) currentIndex = slides.length - 1;
    else currentIndex--;
    goToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    if(currentIndex === slides.length - 1) currentIndex = 0;
    else currentIndex++;
    goToSlide(currentIndex);
});

// Slider automático
setInterval(() => {
    nextBtn.click();
}, 4000);
