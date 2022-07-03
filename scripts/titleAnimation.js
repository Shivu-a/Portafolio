const titleElement = document.querySelectorAll(".animatedTitle");

titleElement.forEach((element) => {
  element.addEventListener("mouseover", (element) => {
    element.target.className += " animationTitle";
    setTimeout(() => {
      element.target.className = "animatedTitle";
    }, 450);
  });
});
