const numeros = document.querySelector(".numeros");
const operadores = document.querySelector(".operadores");
const sinalOperador = document.querySelector(".sinalOperador");
const resultado = document.querySelector("#resultado");
const zerar = document.querySelector("#zerar");

const caixaTexto = document.querySelector("#telaNumeros");

let isFirstInput = true;

let primeiroInput = 0;
let segundoInput = 0;
let operadorCalculo = "";

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function subtracao(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2;
}

function divisao(numero1, numero2) {
  return numero1 / numero2;
}


numeros.addEventListener("click", function(event) {
  const valorInputado = event.target.textContent;
  caixaTexto.value += valorInputado;

  if (isFirstInput) {
    primeiroInput = parseInt(valorInputado);
  } else {
    segundoInput = parseInt(valorInputado);
  }
});

operadores.addEventListener("click", function(event) {
  const operadorInputado = event.target.textContent;
  sinalOperador.textContent = operadorInputado;
  caixaTexto.value = "";
  if (operadorInputado != "=") {
    operadorCalculo = operadorInputado;
  }  

  if (isFirstInput) {
    isFirstInput = false;
  } else {
    isFirstInput = true;
  }
});

resultado.addEventListener("click", function(event) {
  sinalOperador.textContent = "="

  switch(operadorCalculo) {
    case "x":
      caixaTexto.value = multiplicacao(primeiroInput, segundoInput);
      break;

    case "/":
      caixaTexto.value = divisao(primeiroInput, segundoInput);
      break;

    case "+":
      caixaTexto.value = soma(primeiroInput, segundoInput);
      break;

    case "-":
      caixaTexto.value = subtracao(primeiroInput, segundoInput);
      break;

    default:
      console.log("Erro de operador!");
  }
});


zerar.addEventListener("click", function(event) {
  isFirstInput = true;
  primeiroInput = 0;
  segundoInput = 0;
  operadorCalculo = "";
});