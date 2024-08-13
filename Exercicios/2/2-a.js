// Crie uma função que receba dois arrays e os concatene em um único array.

const eletrodomesticos = ['Geladeira', 'Máquina de lavar roupa', 'Fogão', 'Micro-ondas', 'Liquidificador'];
const eletronicos = ['Smartphone', 'Laptop', 'Televisão', 'Tablet', 'Fones de ouvido'];

function concatenarProdutos(eletrodomesticos, eletronicos) {
  return eletrodomesticos.concat(eletronicos);
};

const listaDeProdutos = concatenarProdutos(eletrodomesticos, eletronicos);

console.log(listaDeProdutos);
