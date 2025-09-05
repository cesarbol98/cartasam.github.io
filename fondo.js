document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "fondo1.jpg", "fondo2.jpg", "fondo3.jpg",
    "fondo4.jpg", "fondo5.jpg", "fondo6.jpg",
    "fondo7.jpg", "fondo8.jpg", "fondo9.jpg"
  ];

  let index = 0;

  // Crear capa de slideshow
  const slideshow = document.createElement("div");
  slideshow.classList.add("slideshow");
  document.body.appendChild(slideshow);

  // Función para cambiar imagen
  function changeBackground() {
    slideshow.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  // Iniciar slideshow
  changeBackground();
  setInterval(changeBackground, 5000);

  // 🎵 Botón para iniciar
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("startButton");
  const startScreen = document.getElementById("startScreen");
  const overlay = document.querySelector(".overlay");

  btn.addEventListener("click", () => {
    music.play();
    overlay.style.display = "flex";
    startScreen.style.display = "none";
  });
});
