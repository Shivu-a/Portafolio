const canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let mouse = {
  x: null,
  y: null,
  radio: (canvas.height / 80) * (canvas.width / 80),
};

let arrayParticulas;

addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particula {
  constructor(x, y, direccionY, direccionX, tamaño, color) {
    this.radio = Math.random() * 200 + 20;
    this.x = x;
    this.y = y;
    this.direccionY = direccionY;
    this.direccionX = direccionX;
    this.tamaño = tamaño;
    this.color = color;
  }

  crear() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.tamaño, 0, Math.PI * 2, false);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }

  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.direccionX = -this.direccionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.direccionY = -this.direccionY;
    }

    //deteccion de colision

    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distancia = Math.sqrt(dx * dx + dy * dy);
    if (distancia < mouse.radio + this.tamaño) {
      if (mouse.x < this.x && this.x < canvas.width - this.tamaño * 10) {
        this.direccionX = -this.direccionX;
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.tamaño * 10) {
        this.direccionX = -this.direccionX;
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.tamaño * 10) {
        this.direccionY = -this.direccionY;
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.tamaño * 10) {
        this.direccionY = -this.direccionY;
        this.y -= 10;
      }
    }

    this.x += this.direccionX;
    this.y += this.direccionY;
    this.crear();
  }
}

function poblarCanvas() {
  arrayParticulas = [];

  let numeroDeParticulas = (canvas.height * canvas.width) / 9000;

  for (let i = 0; i < numeroDeParticulas; i++) {
    let tamaño = Math.random() * 5 + 1;
    let x = Math.random() * (innerWidth - tamaño * 2 - tamaño * 2) + tamaño * 2;
    let y =
      Math.random() * (innerHeight - tamaño * 2 - tamaño * 2) + tamaño * 2;
    let direccionX = Math.random() * 5 - 2.5;
    let direccionY = Math.random() * 5 - 2.5;
    let color = "#ffffff";

    arrayParticulas.push(
      new Particula(x, y, direccionX, direccionY, tamaño, color)
    );
  }
}

function conectarPuntos() {
  let opacidad = 1;
  for (let i = 0; i < arrayParticulas.length; i++) {
    for (let k = i; k < arrayParticulas.length; k++) {
      let da = arrayParticulas[i].x - arrayParticulas[k].x;
      let dk = arrayParticulas[i].y - arrayParticulas[k].y;

      let distancia = da * da + dk * dk;
      if (distancia < (canvas.width / 7) * (canvas.height / 7)) {
        opacidad = 1 - distancia / 20000;
        ctx.strokeStyle = `rgba(176, 40, 94, ${opacidad})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(arrayParticulas[i].x, arrayParticulas[i].y);
        ctx.lineTo(arrayParticulas[k].x, arrayParticulas[k].y);
        ctx.stroke();
      }
    }
  }
}

function animar() {
  requestAnimationFrame(animar);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < arrayParticulas.length; i++) {
    arrayParticulas[i].update();
  }
  conectarPuntos();
}

addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  mouse.radio = (canvas.height / 80) * (canvas.height / 80);
  poblarCanvas();
});

addEventListener("mouseout", () => {
  mouse.x = null;
  mouse.y = null;
});

poblarCanvas();
animar();
