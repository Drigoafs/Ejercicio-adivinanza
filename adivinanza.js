const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) {
    console.log("¡Felicitaciones! Adivinaste el número secreto");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("Casi, el número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("Casi, el número secreto es mayor. ¡Sigue intentando!");
  }
};

module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
