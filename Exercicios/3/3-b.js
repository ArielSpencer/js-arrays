// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const alunos = ['Helena', 'Sofia', 'Gabriel', 'Isabella', 'Miguel', 'Laura'];
const notas = [10, 6.5, 8, 7.5, 9, 9.5];

function imprimirArray(list) {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(`Índice: ${i} / Elemento: ${element}`);
  }
}

imprimirArray(alunos);
imprimirArray(notas);