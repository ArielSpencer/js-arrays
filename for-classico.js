// para percorrer uma lista utilizamos o for() que criar laços de repetição

const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// A primeira expressão é executada apenas uma vez: (let indice = 0);
// A segunda expressão é a condição de execução, que se repete enquanto for true: (indice < notas.length);
// A terceira expressão é executada sempre ao final do bloco de código/instruções: (indice++);
for (let indice = 0; indice < notas.length; indice++) {
  console.log(indice, notas[indice]);
}

// retorno:
// 0 10
// 1 8.5
// 2 5
// 3 6.5
// 4 8
// 5 7.5

// Nota: parametros são separados por ";" no método for.