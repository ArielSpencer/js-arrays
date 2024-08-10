const notas = [10, 6, 8]; // array:

notas.push(7); // adicionar ao final do array:

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// Nota: Mesmo que um array seja declarado com 'const', os índices podem ser alterados.
// Isso porque o 'const' garante que a referência ao array não será alterada, mas permite a modificação dos elementos dentro do array.