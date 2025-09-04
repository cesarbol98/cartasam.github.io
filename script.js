document.getElementById("startButton").addEventListener("click", () => {
    // Reproducir música
    const audio = document.getElementById("miAudio");
audio.volume = 0.2; // 30% de volumen;

    // Mostrar fotos y animaciones
    createPhotos();
    setInterval(createAutoHeart, 500);
    setInterval(createAutoPhrase, 1000);
    setInterval(createBlinkHeart, 1500);
	setInterval(createUpSticker, 1000); // cada segundo cae un sticker


    // Quitar pantalla inicial
    document.getElementById("startScreen").style.display = "none";
});

// Lista de imágenes personalizadas
// Lista de imágenes personalizadas con frases
const photos = [
    { src: 'foto1.jpg', frase: 'Cuando estoy contigo, no quiero regresar a casa 💕' },
    { src: 'foto2.jpg', frase: 'Aparte de gustarme, te admiro 😘' },
    { src: 'foto3.jpg', frase: 'Eres mi primer pensamiento por la mañana y el ultimo al dormir✨' },
    { src: 'foto4.jpg', frase: 'Tú eres unica como la luna 🚀' },
    { src: 'foto5.jpg', frase: 'Tengo pensado quererte por lo menos otras mil vidas más ❤️' },
    { src: 'foto6.jpg', frase: 'Nose como, pero mi mundo se volvio loco con tu sonrisa🌹' }
];


// Lista de frases románticas
const phrases = [
    'Te quiero muchísimo 💌',
    'Gracias por estar en mi vida ⭐',
    'Tu sonrisa me ilumina 🌠',
    'Siempre pienso en ti 💭',
    'Cada momento contigo es mágico 🥺',
    'Solo somos tú y yo 💞',
    'A tu lado soy feliz 🤩',
    'Contigo el tiempo se detiene ⏰'
];

// Posiciones para el mosaico 2x3, ordenadas de derecha a izquierda por fila
const photoPositions = [
    { x: 76, y: 15 }, // Fila 1, Columna 3 (más a la derecha)
    { x: 55, y: 70 }, // Fila 1, Columna 2
    { x: 10, y: 15 }, // Fila 1, Columna 1 (más a la izquierda)
    { x: 70, y: 48 }, // Fila 2, Columna 3 (más a la derecha)
    { x: 35, y: 70 }, // Fila 2, Columna 2
    { x: 20, y: 48 }  // Fila 2, Columna 1 (más a la izquierda)
];

function createPhotos() {
    const container = document.querySelector(".photos-container");

    if (window.innerWidth > 800) {
        // 🖥️ Versión PC → Mosaico (absolute)
        photos.forEach((item, index) => {
            const photo = document.createElement('div');
            photo.classList.add('photo');
            photo.style.backgroundImage = `url('${item.src}')`;

            // Posición del mosaico
            const finalX = `${photoPositions[index].x}vw`;
            const finalY = `${photoPositions[index].y}vh`;
            photo.style.position = "absolute";
            photo.style.left = finalX;
            photo.style.top = finalY;

            // Abrir modal al hacer click
            photo.addEventListener("click", () => {
                openModal(item.src, item.frase);
            });

            document.body.appendChild(photo);
        });
    } else {
        // 📱 Versión móvil → debajo del texto (en contenedor)
        photos.forEach(item => {
            const photo = document.createElement('div');
            photo.classList.add('photo');
            photo.style.backgroundImage = `url('${item.src}')`;

            // Abrir modal al hacer click
            photo.addEventListener("click", () => {
                openModal(item.src, item.frase);
            });

            container.appendChild(photo);
        });
    }
}



// Crear corazones automáticos
function createAutoHeart() {
    const heart = document.createElement('div');
heart.classList.add('auto-heart');

const H = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);
heart.style.top  = `${Math.random() * (H - 120)}px`;   // NUEVO
heart.style.left = `${Math.random() * 90}vw`;
heart.style.animationDuration = `${Math.random() * 3 + 5}s`;

document.body.appendChild(heart);


    // Eliminar corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Crear frases automáticas como mensajes de texto
function createAutoPhrase() {
    const phrase = document.createElement('div');
    phrase.classList.add('auto-phrase');
    phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    // Posición aleatoria en toda la pantalla (pueden encimarse)
    const H = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);
const W = Math.max(document.body.scrollWidth,  document.documentElement.scrollWidth,  window.innerWidth);

phrase.style.left = `${Math.random() * (W - 160) + 20}px`;
phrase.style.top  = `${Math.random() * (H - 160) + 20}px`;

    document.body.appendChild(phrase);

    // Eliminar frase después de la animación (20 segundos)
    setTimeout(() => {
        phrase.remove();
    }, 20000); // Ajustado a 20 segundos para coincidir con CSS
}

// Crear corazones y frases al hacer clic
document.addEventListener('click', (event) => {
    // Crear corazón
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${event.clientX - 20}px`; // Centrar en el clic
    heart.style.top = `${event.clientY - 20}px`;
    document.body.appendChild(heart);

    // Eliminar corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 3000);

    // Crear frase romántica
    const phrase = document.createElement('div');
    phrase.classList.add('phrase');
    phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    phrase.style.left = `${event.clientX - 50}px`; // Ajustar posición
    phrase.style.top = `${event.clientY + 20}px`; // Debajo del corazón
    document.body.appendChild(phrase);

    // Eliminar frase después de la animación (20 segundos)
    setTimeout(() => {
        phrase.remove();
    }, 20000); // Ajustado a 20 segundos para coincidir con CSS
});


// Crear corazones que destellan en posiciones aleatorias
function createBlinkHeart() {
    const heart = document.createElement('div');
    heart.classList.add('blink-heart');
    heart.style.left = `${Math.random() * 90}vw`;
    heart.style.top = `${Math.random() * 80}vh`;
    document.body.appendChild(heart);

    // Después del destello → aparece la silueta del corazón
    setTimeout(() => {
        const rect = heart.getBoundingClientRect();
        createHeartShape(rect.left, rect.top);
        heart.remove();
    }, 1200);
}

// Crear explosión de corazones desde una posición
function createHeartExplosion(x, y) {
    const numHearts = 8; // cantidad de corazoncitos
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('explosion-heart');
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Dirección aleatoria (en px)
        const dx = (Math.random() - 0.5) * 200; 
        const dy = (Math.random() - 0.5) * 200;

        heart.style.setProperty('--dx', `${dx}px`);
        heart.style.setProperty('--dy', `${dy}px`);

        // Colores variados
        const colors = ["red", "deeppink", "violet", "hotpink", "crimson"];
        heart.style.filter = `drop-shadow(0 0 5px ${colors[Math.floor(Math.random() * colors.length)]})`;

        document.body.appendChild(heart);

        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// Crear silueta de corazón
function createHeartShape(x, y) {
    const numHearts = 30; // partículas para dibujar el corazón
    for (let i = 0; i < numHearts; i++) {
        const t = Math.PI * 2 * (i / numHearts);
        const posX = 16 * Math.pow(Math.sin(t), 3);
        const posY = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);

        const heart = document.createElement('div');
        heart.classList.add('explosion-heart');
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Escalamos y movemos la forma
        const dx = posX * 8; // tamaño
        const dy = -posY * 8;

        heart.style.setProperty('--dx', `${dx}px`);
        heart.style.setProperty('--dy', `${dy}px`);

        // Colores variados
        const colors = ["red", "deeppink", "violet", "hotpink", "crimson"];
        heart.style.filter = `drop-shadow(0 0 5px ${colors[Math.floor(Math.random() * colors.length)]})`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}

// Crear corazones que destellan cada 1500ms
setInterval(createBlinkHeart, 1500);


// Lista de stickers de UP (usa PNGs con fondo transparente)
const upStickers = [
    "globos.png",   // 🎈 globos
    "casita.png",   // 🏠 casa con globos
    "carl.png",     // 👴 Carl
    "ellie.png",    // 👵 Ellie
    "dug.png"       // 🐶 Dug
];

// Crear stickers que caen
function createUpSticker() {
    const sticker = document.createElement('div');
    sticker.classList.add('auto-sticker');
    sticker.style.left = `${Math.random() * 90}vw`; // posición horizontal aleatoria
    sticker.style.backgroundImage = `url('${upStickers[Math.floor(Math.random() * upStickers.length)]}')`;
    document.body.appendChild(sticker);

    // Eliminar después de la animación
    setTimeout(() => {
        sticker.remove();
    }, 7000);
}




// Función para abrir modal
function openModal(src, frase) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("modalCaption");

    modal.style.display = "flex";
    modalImg.src = src;
    caption.textContent = frase;
}

// Cerrar modal con botón X
document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.querySelector(".close");
    if (closeBtn) {
        closeBtn.onclick = function() {
            document.getElementById("photoModal").style.display = "none";
        };
    }
});








