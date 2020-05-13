'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.createTable(
    'editora', {
      id_categoria: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.INTEGER(110),
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.dropTable('editora');
  }
};
