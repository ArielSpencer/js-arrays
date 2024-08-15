const alunos = ['João', 'Fernanda', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) { // O método includes() aqui dentro da lista (no indice 0 que se refere aos alunos), o aluno.
    const indice = lista[0].indexOf(aluno) // O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array.
    const mediaAluno = lista[1][indice]; // O Valor média aqui é atribuido pelo array medias [1] do indice do aluno.
    console.log(`${aluno} tem a média ${mediaAluno}.`);
  } else {
    console.log('Estudante não existe na lista.')
  }
}

exibeNomeENota('João'); // João tem a média 10.
exibeNomeENota('Larissa'); // Estudante não existe na lista.

// Notas:
// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente;
// O método indexOf() retorna -1 caso o indice não seja encontrado (como arrays em Javascript não possuem índices negativos, é como retornar false).