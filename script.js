document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');

    if (leadForm) {
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const course = document.getElementById('interest').value;

            // This would normally be the academy's real WhatsApp number.
            const phoneNumber = "5493517487208";

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
    const animatedElements = document.querySelectorAll('.feature-card, .course-card, .gallery-item, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });

    // Lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightbox.classList.add('active');
                }
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
            }
        });
    }

    // Particles generation for the contact section (Logo Rain)
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
        const particleCount = 20; // Número de logos
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 25 + 20; // Tamaño entre 20px y 45px
            const left = Math.random() * 100; // Posición horizontal 0% - 100%
            const duration = Math.random() * 12 + 10; // Duración de caída entre 10s y 22s
            const delay = Math.random() * 15; // Delay negativo para que estén dispersas al cargar
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `-${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Admin Login Functionality
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminModal = document.getElementById('adminModal');
    const adminClose = document.querySelector('.admin-close');
    const adminSubmit = document.getElementById('adminSubmit');
    const adminPassword = document.getElementById('adminPassword');
    const adminError = document.getElementById('adminError');

    if (adminLoginBtn && adminModal) {
        adminLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            adminModal.classList.add('active');
            adminPassword.value = '';
            adminError.style.display = 'none';
            setTimeout(() => adminPassword.focus(), 100);
        });

        adminClose.addEventListener('click', () => {
            adminModal.classList.remove('active');
        });

        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) {
                adminModal.classList.remove('active');
            }
        });

        const tryLogin = () => {
            if (adminPassword.value === 'academia2020') {
                sessionStorage.setItem('adminAuth', 'true');
                window.location.href = 'asistencias.html?v=' + new Date().getTime();
            } else {
                adminError.style.display = 'block';
                adminPassword.style.borderColor = '#ff4d4d';
            }
        };

        adminSubmit.addEventListener('click', tryLogin);

        adminPassword.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                tryLogin();
            }
        });
        
        adminPassword.addEventListener('input', () => {
            adminError.style.display = 'none';
            adminPassword.style.borderColor = '';
        });
    }
});
