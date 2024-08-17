const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// Para filtrar elementos, podemos utilizar o método filter()

// const tamanhoNome = alunos.filter((aluno) => {
//   return aluno.length < 4; // O filter se baseia em true ou false para seu retorno, não retorna o número/string/dado original, mas sim um array com os elementos que atenderam à condição, neste caso, 'Ana'.
// });

// console.log(tamanhoNome);

// Nota: lenght funciona para arrays e strings.

const reprovados = alunos.filter((_, indice) => { // O callback não utiliza o primeiro parâmetro (aluno). Como as funções chamam os parâmetros por ordem, não podemos simplesmente remover o parâmetro não utilizado. Uma boa prática é usar _ para marcar o parâmetro não utilizado e assim poder acessar o próximo parâmetro (indice).
  return medias[indice] < 7;
});

console.log(reprovados);