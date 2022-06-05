let bodie = document.querySelector("body");
let form = document.querySelector("form");

const fondoNegro = document.createElement("div");
fondoNegro.style.background = "rgba(0,0,0,0.7)";
fondoNegro.style.position = "fixed";
fondoNegro.style.width = "100vw";
fondoNegro.style.height = "100vh";
fondoNegro.style.top = "0";
fondoNegro.style.left = "0";

fondoNegro.style.display = "flex";
fondoNegro.style.justifyContent = "center";
fondoNegro.style.alignItems = "center";

const graciasDiv = document.createElement("div");
graciasDiv.style.background = "#1e1e1e";
graciasDiv.style.width = "20vw";
graciasDiv.style.height = "20vh";
graciasDiv.style.border = "2px solid white";
graciasDiv.style.borderRadius = "20px";
graciasDiv.style.display = "flex";
graciasDiv.style.justifyContent = "center";
graciasDiv.style.alignItems = "center";

const mensajeGracias = document.createElement("h3");
mensajeGracias.innerHTML = "¡Muchas gracias!<br> Estamos en contacto";
mensajeGracias.style.width = "100%";
mensajeGracias.style.textAlign = "center";
// mensajeGracias.style.fontSize = "5em";

graciasDiv.appendChild(mensajeGracias);
fondoNegro.appendChild(graciasDiv);

form.addEventListener("submit", () => {
  bodie.appendChild(fondoNegro);
});

fondoNegro.addEventListener("click", () => {
  bodie.removeChild(fondoNegro);
});
