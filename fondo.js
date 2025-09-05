document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "fondo1.jpg",
    "fondo2.jpg",
    "fondo3.jpg",
    "fondo4.jpg",
    "fondo5.jpg",
    "fondo6.jpg",
    "fondo7.jpg",
    "fondo8.jpg",
    "fondo9.jpg",
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

  // Iniciar con la primera
  changeBackground();
  setInterval(changeBackground, 5000); // cambia cada 5s
});
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");

  // 🎵 Control de música con botón
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("startMusicBtn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    music.play();
    btn.style.display = "none"; // Oculta el botón después de iniciar música
  });
});
