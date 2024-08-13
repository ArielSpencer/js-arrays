// e1 = Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

// e2 = Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

// e3 = Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

// Dicas:
// Comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// Você pode resolver usando um for dentro de outro for.

// 1e:
const matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}
console.log('Matriz:')
console.log(matriz);

console.log('3 linhas e 3 colunas:')
matriz.forEach(row => console.log(row));

// 2e:
console.log('Elemento na segunda linha e terceira coluna:');
console.log(matriz[1][2]);

// 3e:
matriz[2][1] = 15;
console.log('Adicionar 15 na terceira linha e segunda coluna:');
matriz.forEach(row => console.log(row))