let botonGoToTop = document.querySelector("#botonGoToTop");

window.onscroll = () => {
  hacerAparecerBoton();
};

function hacerAparecerBoton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonGoToTop.style.display = "block";
  } else {
    botonGoToTop.style.display = "none";
  }
}
