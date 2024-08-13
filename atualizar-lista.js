// Função Splice:
// A função splice em JavaScript é usada para adicionar ou remover elementos de um array em uma posição específica.
// Recebe os parametros: indice, se vai ser adicionado e/ou removido algum elemento.

const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leon'];

// listaEstudantes.splice(1, 2);
// 1 = start, 2 = quantos elementos vão ser deletados a partir do start (a partir do indice 1 temos 2 elementos: ana[1] e caio[2])

// isso remove os parametros enviados e retorna listaEstudantes = [ 'João', 'Lara', 'Marjorie', 'Leon' ];

listaEstudantes.splice(1, 2, 'Rodrigo'); // o terceiro parametro é o elemento que será incluido
console.log(listaEstudantes); // [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leon' ]