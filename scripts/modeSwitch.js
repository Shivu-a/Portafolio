let body = document.querySelector("body");
let botonSwitch = document.querySelector("#botonSwitch");
let h3 = document.querySelectorAll("h3");
let curso = document.querySelectorAll(".curso");
let proyecto = document.querySelectorAll(".proyecto");
let espanol = document.querySelectorAll(".espanol");
let ingles = document.querySelectorAll(".ingles");
let medio = document.querySelectorAll(".medio");
let iMedio = document.querySelectorAll(".iMedio");
let formContacto = document.querySelectorAll(".formContacto");

const arrayDivs = [curso, proyecto, espanol, ingles, formContacto, medio];

function cambiarFondo() {
  if (body.className === "dark-mode") {
    body.style.backgroundColor = "#dee4e7";
    body.style.color = "black";

    h3.forEach((element) => {
      element.style.color = "black";
    });

    for (let i = 0; i < arrayDivs.length; i++) {
      arrayDivs[i].forEach((element) => {
        element.id = "borderBoxWhite";
      });
    }

    iMedio.forEach((element) => {
      element.style.color = "black";
    });

    body.className = "light-mode";
  } else {
    body.style.backgroundColor = "#1e1e1e";
    body.style.color = "white";

    h3.forEach((element) => {
      element.style.color = "white";
    });

    iMedio.forEach((element) => {
      element.style.color = "white";
    });

    for (let i = 0; i < arrayDivs.length; i++) {
      arrayDivs[i].forEach((element) => {
        element.id = "";
      });
    }

    body.className = "dark-mode";
  }
}

botonSwitch.addEventListener("click", () => {
  cambiarFondo();
});
