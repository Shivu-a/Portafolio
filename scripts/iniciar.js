const boton = document.querySelector("#boton");
const inicioContainer = document.querySelector(".inicioContainer");
const html = document.querySelector("html");
const sonido = new Audio();
sonido.src = "media/Audios/inicio.mp3";

boton.addEventListener("click", () => {
  sonido.play();
  inicioContainer.className += " desaparecer";
  setTimeout(() => {
    inicioContainer.parentElement.removeChild(inicioContainer);
    // html.style.overflow = "auto";
  }, 1250);
});
