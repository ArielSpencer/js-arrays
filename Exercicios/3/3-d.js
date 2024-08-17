// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array,
// no seguinte formato: 'o menor número é X e o maior número é Y'.

const numeros = [17, 3, 42, 8, 29, 56, -3, 14, 63, 91, 25];

function menorEMaiorValor(array) {

  let menor = array[0];
  let maior = array[0];

  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    if (number < menor) {
      menor = number;
    }

    if (number > maior) {
      maior = number;
    }

  } return `O menor número é ${menor} e o maior número é ${maior}.`;
}

console.log(menorEMaiorValor(numeros));
