// SCROLL SUAVE Y MOSTRAR SECCIONES
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        let target = document.getElementById(targetId);

        // Crear sección contacto dinámicamente si no existe
        if(targetId === "contacto" && !target) {
            target = document.createElement('section');
            target.id = "contacto";
            target.innerHTML = `
                <h2>Contacto</h2>
                <p>Teléfono: +54 35117487208</p>
                <p>Email: institutosuperior18@gmail.com</p>
                <p>Dirección: Av. Colon 118, Córdoba, Argentina</p>
                <h3>Redes sociales</h3>
                <ul>
                    <li><a href="https://www.facebook.com/Academiadepeluqueriacba/" target="_blank">Facebook</a></li>
                    <li><a href="https://www.instagram.com/institutosuperiordecoiffeur/?hl=es" target="_blank">Instagram</a></li>
                    <li><a href="https://wa.me/54123456789" target="_blank">WhatsApp</a></li>
                </ul>
                <h3>Formulario de contacto</h3>
                <form action="#" method="post">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            `;
            document.querySelector('main').appendChild(target);
        }

        // Scroll suave hacia la sección
        target.scrollIntoView({behavior: 'smooth'});
    });
});
