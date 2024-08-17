// O map é um método callback

const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function (nota) {
//   return nota + 1; // O return tira a função do callback para ser utilizada fora
// })

// console.log(notasAtualizadas); // Retorna [ 11, 10.5, 9, 8, 7 ]

// Refatoração:
// É comum em funções callback utilizar a arrow function

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);
// Em arrow functions com apenas uma instrução (uma linha), podemos suprimir as chaves {} e o return, nesse caso remover o ";" da instrução;
// Para continuar a intrução em uma linha sem abrir um if, podemos utilizar o operador ternario que retorna true ou false.

console.log(notasAtualizadas);

// Nota:
// Diferente do forEach que não retorna nada (undefined), o retorno do map sempre será um array com os resultados (com cada retorno de função).