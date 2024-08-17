// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somaInt(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  } return total;
}

console.log(somaInt(array));