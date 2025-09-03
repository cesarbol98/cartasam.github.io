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
const photos = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg'
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

// Crear fotos en mosaico 2x3
function createPhotos() {
    photos.forEach((photoUrl, index) => {
        const photo = document.createElement('div');
        photo.classList.add('photo');
        photo.style.backgroundImage = `url('${photoUrl}')`;
        // Posición inicial en la parte inferior
        photo.style.left = `${photoPositions[index].x}vw`;
        photo.style.top = `100vh`;
        // Posición final en el mosaico
        const finalX = `${photoPositions[index].x}vw`;
        const finalY = `${photoPositions[index].y}vh`;
        photo.style.animation = `riseToPosition 2s ease-out forwards ${index * 0.2}s`; // Retraso incremental
        photo.style.setProperty('--final-x', finalX);
        photo.style.setProperty('--final-y', finalY);
        document.body.appendChild(photo);

        // Mantener la posición final después de la animación
        photo.addEventListener('animationend', () => {
            photo.style.transform = 'translate(0, 0)';
            photo.style.left = finalX;
            photo.style.top = finalY;
        });
    });
}

// Crear corazones automáticos
function createAutoHeart() {
    const heart = document.createElement('div');
    heart.classList.add('auto-heart');
    heart.style.left = `${Math.random() * 90}vw`; // Posición aleatoria
    heart.style.animationDuration = `${Math.random() * 3 + 5}s`; // Duración entre 5 y 8 segundos
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
    phrase.style.left = `${Math.random() * 80 + 10}vw`;
    phrase.style.top = `${Math.random() * 80 + 10}vh`;
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



