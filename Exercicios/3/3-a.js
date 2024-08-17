// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

// Solução 1 (de forma direta):
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of array) {
  console.log(number)
}

// Solução 2 (de forma reutilizavel):

function loopArray(list) {
  for (const elements of list) {
    console.log(elements);
  }
}

const alunos = ['Helena', 'Sofia', 'Gabriel', 'Isabella', 'Miguel', 'Laura'];

loopArray(alunos);
loopArray(array);