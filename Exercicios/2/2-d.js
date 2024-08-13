// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante.
// Utilize o método concat para criar um novo array menuCompleto contendo
// todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = [
  'Feijão Tropeiro',
  'Lasanha de Berinjela',
  'Curry de Grão-de-Bico',
  'Quibe de Abóbora',
  'Quinoa com Legumes Assados',
  'Chili, Guacamole e Nachos'
];

const menuDeSobremesas = [
  'Brownie de Chocolate',
  'Mousse de Maracujá',
  'Sorvete de Banana',
  'Pudim de Chia com Frutas',
  'Bolo de Cenoura com Cobertura de Chocolate',
  'Cookies de Chocolate'
];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);