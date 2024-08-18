// Para clonar o mesmo tipo/dados primitivos (seja string, number, boolean,...) podemos utilizar a forma mais simples:

let nota = 9.75;
let novaNota = nota;

console.log(nota); // 9.75
console.log(novaNota); // 9.75

nota = 8; // Com let o elemento também pode ser alterado de forma simples.

console.log(nota); // 8
console.log(novaNota); // 9.75

const notas = [7, 7, 8, 9];
const listaNotas = notas; // Em vez de um novo clone, criamos uma referência ao array anterior

listaNotas.push(10); // Por causa da ligação de referência, ambos os arrays são alterados.

console.log(notas); // [ 7, 7, 8, 9, 10 ]
console.log(listaNotas); // [ 7, 7, 8, 9, 10 ]

// Para resolver isso podemos utilizar o spread operator atribuindo [...notas] em vez de apenas notas;

// const novaListaNotas = [...notas];

// novaListaNotas.push(6.5);
// console.log(novaListaNotas); // [ 7, 7, 8, 9, 10, 6.5 ]

// outra forma seria em vez de utilizar o push(), passar diretamente o elemento que queremos adicionar ao spread operator:

const novaListaNotas = [...notas, 9.7];
console.log(novaListaNotas); // [ 7, 7, 8, 9, 10, 9.7 ]