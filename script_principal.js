document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const heart = document.querySelector('.heart');
    const cardText = document.querySelector('.card-text');
    const arrow = document.querySelector('.arrow');

    // Verificar carga de imágenes
    const flowerImages = ['rose.png', 'white_flower.png', 'tulip.png'];
    const heartImage = 'heart.png';
    flowerImages.forEach(img => {
        const testImg = new Image();
        testImg.src = img;
        testImg.onload = () => console.log(`Imagen ${img} cargada correctamente`);
        testImg.onerror = () => console.error(`Error al cargar imagen ${img}`);
    });
    const testHeart = new Image();
    testHeart.src = heartImage;
    testHeart.onload = () => console.log(`Imagen ${heartImage} cargada correctamente`);
    testHeart.onerror = () => console.error(`Error al cargar imagen ${heartImage}`);

    card.addEventListener('click', () => {
        console.log('Clic en la carta, creando flores...');

        // Romper el corazón
        heart.classList.add('broken');

        // Crear partículas para el corazón roto
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.classList.add('heart-particle');
            particle.style.left = `${card.offsetWidth / 2}px`;
            particle.style.top = `${card.offsetHeight / 2}px`;
            const dx = (Math.random() - 0.5) * 200; // Dirección aleatoria
            const dy = (Math.random() - 0.5) * 200;
            particle.style.setProperty('--dx', `${dx}px`);
            particle.style.setProperty('--dy', `${dy}px`);
            console.log(`Creando partícula ${i + 1} en (${particle.style.left}, ${particle.style.top})`);
            card.appendChild(particle);
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }

        // Mostrar el texto
        cardText.style.display = 'block';

        // Mostrar la flecha
        // Mostrar el botón Continuar
	document.querySelector('.continue-container').style.display = 'block';


        // Crear flores que crecen desde abajo (25 flores)
        for (let i = 0; i < 25; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.style.left = `${Math.random() * 90 + 5}vw`; // Posición horizontal aleatoria
            flower.style.backgroundImage = `url('${flowerImages[Math.floor(Math.random() * flowerImages.length)]}')`;
            flower.style.animationDelay = `${i * 0.08}s`; // Retraso suave
            flower.style.width = `${Math.random() * 20 + 40}px`; // Tamaños variados (40-60px)
            flower.style.height = flower.style.width;
            console.log(`Creando flor que crece ${i + 1} en ${flower.style.left}`);
            document.body.appendChild(flower);
            // No eliminamos las flores para que permanezcan
        }

        // Crear flores alrededor de la carta (marco)
        const cardRect = card.getBoundingClientRect();
        const cardLeft = cardRect.left;
        const cardTop = cardRect.top;
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        const flowerCount = 20; // Número de flores en el marco
        const positions = [];

        // Posiciones en los bordes de la carta
        for (let i = 0; i < 8; i++) {
            positions.push({ x: cardLeft + (i + 1) * cardWidth / 9, y: cardTop - 25 }); // Arriba
            positions.push({ x: cardLeft + (i + 1) * cardWidth / 9, y: cardTop + cardHeight - 25 }); // Abajo
        }
        for (let i = 0; i < 6; i++) {
            positions.push({ x: cardLeft - 25, y: cardTop + (i + 1) * cardHeight / 7 }); // Izquierda
            positions.push({ x: cardLeft + cardWidth - 25, y: cardTop + (i + 1) * cardHeight / 7 }); // Derecha
        }

        positions.forEach((pos, index) => {
            const borderFlower = document.createElement('div');
            borderFlower.classList.add('border-flower');
            borderFlower.style.left = `${pos.x}px`;
            borderFlower.style.top = `${pos.y}px`;
            borderFlower.style.backgroundImage = `url('${flowerImages[Math.floor(Math.random() * flowerImages.length)]}')`;
            borderFlower.style.animationDelay = `${index * 0.05}s`; // Retraso suave
            borderFlower.style.width = `${Math.random() * 10 + 40}px`; // Tamaños variados (40-50px)
            borderFlower.style.height = borderFlower.style.width;
            console.log(`Creando flor de marco ${index + 1} en (${pos.x}, ${pos.y})`);
            document.body.appendChild(borderFlower);
            // No eliminamos las flores para que permanezcan
        });

        // Deshabilitar clics adicionales
        card.style.cursor = 'default';
        card.onclick = null;
    });
});