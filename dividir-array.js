// Para dividirmos uma lista podemos utilizar o slice, copiando a divisão para outro array,
// passando o parametro de inicio do corte e opcionalmente o final.

const listaEstudantes = ['João', 'Livia', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2); // inicio = indice 0 / final = metade da lista.
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2); // inicio = metade da lista.

console.log('Estudantes:');
console.log(listaEstudantes); // Lista com 20 estudantes

console.log('Sala 1:');
console.log(sala1);  // Lista com 10 primeiros estudantes

console.log('Sala 2:');
console.log(sala2); // Lista com 10 últimos estudantes

// o parametro inicial é incluido, porém o final não, por isso o parametro não se repeta em ambas as listas.