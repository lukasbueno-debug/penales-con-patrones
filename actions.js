const tiros = [
  {
    serie: "3, 6, 12, 24, ___",
    opciones: [27, 36, 48],
    respuesta: 48,
    regla: "Se multiplica por 2. Entonces 24 × 2 = 48."
  },
  {
    serie: "4, 9, 14, 19, ___",
    opciones: [24, 23, 29],
    respuesta: 24,
    regla: "Se suma 5. Entonces 19 + 5 = 24."
  },
  {
    serie: "81, 27, 9, 3, ___",
    opciones: [0, 1, 2],
    respuesta: 1,
    regla: "Se divide entre 3. Entonces 3 ÷ 3 = 1."
  },
  {
    serie: "18, 14, 10, 6, ___",
    opciones: [4, 0, 2],
    respuesta: 2,
    regla: "Se resta 4. Entonces 6 − 4 = 2."
  },
  {
    serie: "2, 6, 18, 54, ___",
    opciones: [162, 108, 72],
    respuesta: 162,
    regla: "Se multiplica por 3. Entonces 54 × 3 = 162."
  }
];

const botones = document.querySelectorAll(".arco button");
const mensaje = document.querySelector("#mensaje");
const siguiente = document.querySelector("#siguiente");

let indice = 0;
let goles = 0;

function mostrarTiro() {
  const tiro = tiros[indice];
  document.querySelector("#tiro").textContent = indice + 1;
  document.querySelector("#sucesion").textContent = tiro.serie;
  mensaje.textContent = "";
  siguiente.hidden = true;

  botones.forEach((boton, posicion) => {
    boton.textContent = tiro.opciones[posicion];
    boton.disabled = false;
  });
}

function responder(posicion) {
  const tiro = tiros[indice];
  const acierto = tiro.opciones[posicion] === tiro.respuesta;

  botones.forEach(boton => {
    boton.disabled = true;
  });

  if (acierto) {
    goles += 1;
    mensaje.textContent = "¡Gol! " + tiro.regla;
  } else {
    mensaje.textContent = "¡Atajado! La respuesta era " + tiro.respuesta + ". " + tiro.regla;
  }

  document.querySelector("#goles").textContent = goles;
  siguiente.hidden = indice === tiros.length - 1;
}

botones.forEach((boton, posicion) => {
  boton.addEventListener("click", () => responder(posicion));
});

siguiente.addEventListener("click", () => {
  indice += 1;
  mostrarTiro();
});

mostrarTiro();