// A instrução JavaScript for ofpercorre os valores de um objeto iterável.
// Ele permite que você faça um loop em estruturas de dados iteráveis, como matrizes, strings, mapas, listas de nós e etc.

// Diferença do for clássico:
// O for clássico percorre os índices, permitindo adicionar condições personalizadas,
// enquanto o for of percorre diretamente os itens da lista sem precisar lidar com índices.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) { // nota chama todos os elementos dentro do array notas [10, 6.5...]
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);