// Crie um array chamado numeros contendo números de 1 a 10.
// Utilize o método slice para criar um novo array chamado parteNumeros
// que contenha apenas os números de índice 3 ao número 7.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 7);

console.log(parteNumeros); // [ 4, 5, 6, 7 ]