const alunos = ['João', 'Fernanda', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(lista);

// Diferente do método concat, que combina os arrays em um único array, a atribuição como no exemplo acima cria um array contendo dois arrays separados como índice/elementos.
// Assim a 'lista' é um único array com dois elementos: o primeiro, no índice 0 é o array 'alunos' e o segundo no índice 1 é o array 'medias'.

// Para acessar os valores desses arrays podemos utilizar o seguinte método:

console.log(
  `a aluna da posição 1 da lista é ${lista[0][1]}
  a nota dessa aluna é ${lista[1][1]}`
);

// Notas:
// O primeiro [] se refere ao indice da lista;
// O segundo [] se refere ao indice do array selecionado na lista;
// Utilizar esse método sempre de fora para dentro;
// Algumas das utilidades podem ser para operações matemáticas que envolvem matrizes, organizar dados de forma lógica e para representar grids.


// Terminologia:
// Variável simples = armazena apenas uma informação;
// Variável composta = armazena mais de uma informação (por exemplo, arrays e objetos);
// Variável de variáveis = armazena variáveis dentro de outra variável, permitindo organizar várias informações dentro de uma única variável (por exemplo, arrays de arrays ou objetos contendo outras variáveis).