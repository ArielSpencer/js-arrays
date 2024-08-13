// Crie um programa em Node.js que inicie com um array cinco elementos e
// atribua um novo valor para a primeira posição (índice 0) desse array.
// Em seguida, exiba o array antes e depois da alteração.

const array = [0, 2, 3, 4, 5];
console.log(`antes: ${array}.`) // antes: 0,2,3,4,5.

array[0] = 1;
console.log(`depois: ${array}.`) // depois: 1,2,3,4,5.
