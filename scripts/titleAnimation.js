const titleElement = document.querySelectorAll(".animatedTitle");

titleElement.forEach((element) => {
  element.addEventListener("mouseover", (element) => {
    element.toElement.className += " animationTitle";
    setTimeout(() => {
      element.toElement.className = "animatedTitle";
    }, 450);
  });
});
