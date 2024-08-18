// O reduce é uma função de array que reduz todos os elementos de um array a um único valor.
// Ele recebe uma função callback, onde o primeiro parâmetro é o acumulador e o segundo é o valor atual do elemento sendo iterado.
// Opcionalmente, o reduce também pode receber um valor inicial para o acumulador.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Para calcular a média geral de cada um dos arrays acima, o ideal é criar uma função que receba cada um dos arrays:

// function calculaMedia(listaDeNotas) {
//   const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
//     return acumulador + nota;
//   }, 0); // 0 é o valor inicial a ser acumulado

//   const media = somaDasNotas / listaDeNotas.length;
//   return media;
// }

function calculaMedia(listaDeNotas) {
  const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

  const media = somaDasNotas / listaDeNotas.length;
  return media;
}

console.log(calculaMedia(salaJS));  // 7.5
console.log(calculaMedia(salaJava));  // 6.5
console.log(calculaMedia(salaPython));  // 7
