let trigrama = document.getElementById("trigram");
let navegador = document.querySelector("nav");

trigrama.addEventListener("click", () => {
  if (navegador.className === "navbar") {
    navegador.className += " responsiveNavbar";
    trigrama.innerHTML = "&#708;";
  } else {
    navegador.className = "navbar";
    trigrama.innerHTML = "&#709;";
  }
});
