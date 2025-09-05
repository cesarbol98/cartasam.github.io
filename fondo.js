document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "fondo1.jpg", "fondo2.jpg", "fondo3.jpg",
    "fondo4.jpg", "fondo5.jpg", "fondo6.jpg",
    "fondo7.jpg", "fondo8.jpg", "fondo9.jpg"
  ];

  let index = 0;

 // Crear dos capas para el efecto de transición
const slideshow1 = document.createElement("div");
const slideshow2 = document.createElement("div");

slideshow1.classList.add("slideshow", "active");
slideshow2.classList.add("slideshow");

document.body.appendChild(slideshow1);
document.body.appendChild(slideshow2);

let current = slideshow1;
let next = slideshow2;


  // Función para cambiar imagen
  function changeBackground() {
    slideshow.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  let index = 0;

function changeBackground() {
  next.style.backgroundImage = `url('${images[index]}')`;

  // Cambiar clases para animar transición
  next.classList.add("active");
  current.classList.remove("active");

  // Intercambiar referencias
  const temp = current;
  current = next;
  next = temp;

  index = (index + 1) % images.length;
}
 // Iniciar con la primera imagen
current.style.backgroundImage = `url('${images[index]}')`;
index++;
setInterval(changeBackground, 5000); // cambia cada 5s


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
