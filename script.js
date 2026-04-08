document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');

    if (leadForm) {
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const course = document.getElementById('interest').value;

            // This would normally be the academy's real WhatsApp number.
            const phoneNumber = "3517487208";

            const message = `¡Hola Instituto Superior del Coiffeur! Soy ${name}. Estoy interesado en transformar mi futuro con el curso de ${course}. Me gustaría recibir la informacion completa y conocer el costo de los cursos. ¡Gracias!`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // Add smooth reveal animations for section elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial styles for animations
    const animatedElements = document.querySelectorAll('.feature-card, .course-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
});
