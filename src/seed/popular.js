const sequelize = require('../config/database');
const { Cliente } = require('../models');

// async function populate() {
//   try {
//     await sequelize.sync(); // ou { force: true } para recriar as tabelas
//     await Cliente.create({
//       nome: 'Jhonatta',
//       cpf: '12345678900',
//       email: 'jhonatta@hotmail.com',
//       nascimento: '2000-01-01'
//     });

//     console.log('Cliente inserido com sucesso!');
//   } catch (err) {
//     console.error('Erro ao popular:', err);
//   } finally {
//     await sequelize.close();
//   }
// }

populate();
