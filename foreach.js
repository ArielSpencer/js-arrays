// O forEach é um método que executa uma função callback para cada elemento do array.
// Callback => Funções (passadas como argumento) que chamam outras funções dentro dela.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// Informar o array, no caso notas;
// Dentro passar outra função como parametro;
// O forEach executa a função para cada elemento do array.
notas.forEach(function (nota) { // O parametro nota guarda o dado de cada interação.
  somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// Notas:
// O forEach executa o código dentro do bloco mas não retorna nada;
// forEach retorna undefined.