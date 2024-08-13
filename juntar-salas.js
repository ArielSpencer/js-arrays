// Para juntar arrays podemos utilizar o método concat (de concatenar),
// Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.

const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Venuza', 'Leo', 'Raquel'];

const salasUnificadas = salaJS.concat(salaPython); // salaJS recebe salaPython em seu array, juntando as salas em uma só chamada SalasUnificadas

console.log(salaJS);
console.log(salaPython);
console.log(salasUnificadas);