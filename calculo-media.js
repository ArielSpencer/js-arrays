// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

const notas = [10, 6.5, 8, 7.5];

// const media = (nota1 + nota2 + nota3 + nota4) / 4;

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// Nota: Um array pode armazenar diferentes tipos de dados, como strings, números, booleanos, outros arrays e objetos...
// Porém, o mais utilizado é manter um padrão dos tipos de dados dentro de um array, usando um único tipo de dado.