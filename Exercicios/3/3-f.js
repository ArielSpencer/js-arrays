// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const notas = [9, 4.3, 7, 10, 3.5, 8.30, 6.7, 5, 7, 2];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;
console.log(`Notas: ${notas}`);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);
