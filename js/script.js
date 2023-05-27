console.log('Super Calculadora LanSoft v1.0');

//() pegar os elementos HTML pelo DOM
let resultadoSoma = document.getElementById('resultadoSoma');
let resultadoSubtracaoAB = document.getElementById('resultadoSubtracaoAB');
let resultadoSubtracaoBA = document.getElementById('resultadoSubtracaoBA');
let resultadoMultiplicacao = document.getElementById('resultadoMultiplicacao');
let resultadoDivisaoAB = document.getElementById('resultadoDivisaoAB');
let resultadoDivisaoBA = document.getElementById('resultadoDivisaoBA');
let resultadoPotenciacaoAB = document.getElementById('resultadoPotenciacaoAB');
let resultadoPotenciacaoBA = document.getElementById('resultadoPotenciacaoBA');
let resultadoRaizA = document.getElementById('resultadoRaizA');
let resultadoRaizB = document.getElementById('resultadoRaizB');
let resultadoFatorialA = document.getElementById('resultadoFatorialA');
let resultadoFatorialB = document.getElementById('resultadoFatorialB');
let resultadoPorcentagemAB = document.getElementById('resultadoPorcentagemAB');
let resultadoPorcentagemBA = document.getElementById('resultadoPorcentagemBA');
let resultadoMedia = document.getElementById('resultadoMedia');

resultadoSoma.innerHTML = 0;
resultadoSubtracaoAB.innerHTML = 0;
resultadoSubtracaoBA.innerHTML = 0;
resultadoDivisaoAB.innerHTML = 0;
resultadoDivisaoBA.innerHTML = 0;
resultadoMultiplicacao.innerHTML = 0;
resultadoPotenciacaoAB.innerHTML = 0;
resultadoPotenciacaoBA.innerHTML = 0;
resultadoRaizA.innerHTML = 0;
resultadoRaizB.innerHTML = 0;
resultadoFatorialA.innerHTML = 0;
resultadoFatorialB.innerHTML = 0;
resultadoPorcentagemAB.innerHTML = 0;
resultadoPorcentagemBA.innerHTML = 0;
resultadoMedia.innerHTML = 0;

//(x) fazer os calculos
function calcularSoma(a, b) {
  return a + b;
}
/* Exemple of arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
const calcularSubtracaoAB = (a, b) => a - b;

const calcularSubtracaoBA = (a, b) => b - a;

const calcularMultiplicacao = (a, b) => a * b;

const calcularDivisaoAB = (a, b) => (a / b).toFixed(2);

const calcularDivisaoBA = (a, b) => (b / a).toFixed(2);

const calcularPotenciacaoAB = (a, b) => Math.pow(a, b);

const calcularPotenciacaoBA = (a, b) => b ** a;

const calcularRaizA = a => Math.sqrt(a).toFixed(2);
/*arrow function acima é o mesmo do que uma função clássica como abaixo:
  function calcularRaiz(a) {
    return Math.sqrt(a).toFixed(2);
}*/
const calcularRaizB = b => Math.sqrt(b).toFixed(2);

function calcularFatorialA(a) {
  var fatA = 1;
  for (var i = a; i > 0; i--) {
    fatA *= i;
  }
  return fatA;
}

function calcularFatorialB(b) {
  var fatB = 1;
  for (var i = b; i > 0; i--) {
    fatB *= i;
  }
  return fatB;
}

const calcularPorcentagemAB = (a, b) => ((a * 100) / b).toFixed(2) + '%';
//poderia usar `${(a * 100) / b.toFixed(2)}%`

const calcularPorcentagemBA = (a, b) => ((b * 100) / a).toFixed(2) + '%';

const calcularMedia = (a, b) => ((a + b) / 2).toFixed(2);

//() criar a funcao para executar os calculos
function calcular() {
  //let inputA = document.getElementById('primeiroNumero');
  //let inputB = document.getElementById('segundoNumero');
  let inputA = document.getElementById('primeiroNumero').value;
  let inputB = document.getElementById('segundoNumero').value;

  /*console.log('input A: ', typeof inputA);
  console.log('input B: ', inputB);
  console.log(calcularSoma('soma: ', inputA, inputB));
  console.log(calcularSoma(inputA.value, inputB.value)); //da NaN*/

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);
  /*console.log('soma: ', calcularSoma(a, b));*/

  resultadoSoma.innerHTML = calcularSoma(a, b);
  /*console.log('resultado A + B = ', resultadoSoma);*/

  resultadoSubtracaoAB.innerHTML = calcularSubtracaoAB(a, b);

  resultadoSubtracaoBA.innerHTML = calcularSubtracaoBA(a, b);

  resultadoMultiplicacao.innerHTML = calcularMultiplicacao(a, b);

  resultadoDivisaoAB.innerHTML = calcularDivisaoAB(a, b);

  resultadoDivisaoBA.innerHTML = calcularDivisaoBA(a, b);

  resultadoPotenciacaoAB.innerHTML = calcularPotenciacaoAB(a, b);

  resultadoPotenciacaoBA.innerHTML = calcularPotenciacaoBA(a, b);

  resultadoRaizA.innerHTML = calcularRaizA(a);

  resultadoRaizB.innerHTML = calcularRaizB(b);

  resultadoFatorialA.innerHTML = calcularFatorialA(a);

  resultadoFatorialB.innerHTML = calcularFatorialB(b);

  resultadoPorcentagemAB.innerHTML = calcularPorcentagemAB(a, b);

  resultadoPorcentagemBA.innerHTML = calcularPorcentagemBA(a, b);

  resultadoMedia.innerHTML = calcularMedia(a, b);
}
