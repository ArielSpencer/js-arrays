// Para remover duplicatas de uma lista, uma solução é utilizar o set

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const nomesAtualizados = new Set(nomes);

console.log(nomesAtualizados);

// O Set é um conjunto que armazena valores únicos;
// É um array-like (parece, mas não é um array), não respondendo como um array (por não ter acesso aos métodos de array).

// nomesAtualizados.push('Ariel');
// console.log(nomesAtualizados); // TypeError.

// Para utilizar como um array, podemos transformar esse conjunto em um array:

const listaNomesAtualizados = [...nomesAtualizados];
console.log(listaNomesAtualizados);

// De forma refatorada fica:

const novaListaNomesAtualizados = [...new Set(nomes)];
console.log(novaListaNomesAtualizados);