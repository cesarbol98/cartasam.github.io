document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
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
