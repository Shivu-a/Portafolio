const popUp = document.createElement("div");
popUp.className = "popUp";

const blackBackground = document.createElement("div");
blackBackground.className = "blackBackground";
blackBackground.appendChild(popUp);

const closeX = document.createElement("button");
closeX.className = "closeX";
closeX.innerHTML = '<i class="fa-solid fa-xmark"></i>';
popUp.appendChild(closeX);

const trigger = document.querySelectorAll(".activatePopUp");

// Event Listener

trigger.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector("body").appendChild(blackBackground);

    let titulo = document.createElement("h2");
    titulo.innerHTML = element.dataset.titulo;

    let description = document.createElement("p");
    description.innerText = element.dataset.description;

    let imagen = new Image();
    imagen.src = element.dataset.image;

    let linkedButton = document.createElement("a");
    linkedButton.innerHTML = `Go to ${element.dataset.type}`;
    linkedButton.href = element.dataset.link;
    linkedButton.target = "_blank";

    let leftDiv = document.createElement("div");
    leftDiv.className = "leftDiv";
    leftDiv.appendChild(titulo);
    leftDiv.appendChild(imagen);

    let rightDiv = document.createElement("div");
    rightDiv.className = "rightDiv";
    rightDiv.appendChild(description);
    rightDiv.appendChild(linkedButton);

    popUp.appendChild(leftDiv);
    popUp.appendChild(rightDiv);
    setTimeout(() => {
      blackBackground.style.opacity = "1";
      popUp.style.transform = "translateY(0vh)";
    }, 30);
  });
});

// Close PopUp

closeX.addEventListener("click", () => {
  popUp.style.transform = "translateY(-90vh)";
  blackBackground.style.opacity = "0";
  setTimeout(() => {
    popUp.removeChild(document.querySelector(".leftDiv"));
    popUp.removeChild(document.querySelector(".rightDiv"));

    blackBackground.parentElement.removeChild(blackBackground);
  }, 450);
});
