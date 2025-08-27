body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: white;
    color: black;
}

header {
    background-color: violet;
    color: white;
    padding: 20px;
    text-align: center;
}

/* MENÚ DESPLEGABLE */
nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: violet;
}

nav ul li {
    position: relative;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
}

nav ul li:hover {
    background-color: darkviolet;
    border-radius: 5px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: violet;
    min-width: 150px;
    z-index: 1;
    border-radius: 5px;
}

.dropdown-content a {
    padding: 10px;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}

nav ul li a:hover {
    background-color: darkviolet;
}

/* BOTONES */
button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background-color: darkgray;
}

main {
    padding: 20px;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: black;
    color: white;
}

/* CARRUSEL */
.carousel-container {
    position: relative;
    overflow: hidden;
    max-width: 90%;
    margin: 20px auto;
    border-radius: 10px;
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-track img {
    width: 200px;
    margin-right: 10px;
    border-radius: 8px;
    object-fit: cover;
}

.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,0.5);
    color: white;
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
}

.prev { left: 10px; }
.next { right: 10px; }

.carousel-dots {
    text-align: center;
    margin-top: 10px;
}

.carousel-dots span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: gray;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.carousel-dots .active {
    background: black;
}

/* CONTACTO OCULTO */
.hidden {
    display: none;
}
