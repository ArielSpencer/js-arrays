const nomes = ["maria Clara", "Afonso Lima", "BIA silva"];

// Utilizar o método map pois precisamos salvar as alterações corrigidas.

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

// O map pode ser utilizado para qualquer tipo de alteração em qualquer tipo de dado dentro de um array.