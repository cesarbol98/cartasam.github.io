document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "fondo1.jpg", "fondo2.jpg", "fondo3.jpg",
    "fondo4.jpg", "fondo5.jpg", "fondo6.jpg",
    "fondo7.jpg", "fondo8.jpg", "fondo9.jpg"
  ];

  // Crear dos capas para el efecto fade
  const slideA = document.createElement("div");
  const slideB = document.createElement("div");
  slideA.className = "slideshow active";
  slideB.className = "slideshow";
  document.body.appendChild(slideA);
  document.body.appendChild(slideB);

  let current = slideA;
  let next = slideB;
  let idx = 0;
  let timer = null;

  function changeBackground() {
    next.style.backgroundImage = `url('${images[idx]}')`;
    next.classList.add("active");
    current.classList.remove("active");
    [current, next] = [next, current];
    idx = (idx + 1) % images.length;
  }

  // 🎵 Botón de inicio
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("startButton");
  const startScreen = document.getElementById("startScreen");
  const overlay = document.querySelector(".overlay");

  btn.addEventListener("click", () => {
    // Iniciar música (después del gesto del usuario)
    music.play().catch(() => {});

    // Mostrar contenido y ocultar pantalla inicial
    overlay.style.display = "flex";
    startScreen.style.display = "none";

    // Iniciar slideshow
    current.style.backgroundImage = `url('${images[idx]}')`;
    idx = (idx + 1) % images.length;
    timer = setInterval(changeBackground, 5000);
  });
});

