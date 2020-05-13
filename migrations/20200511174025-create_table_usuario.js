'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable(
      'usuario', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING(60),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(60),
          allowNull: false
        },
        senha: {
          type: Sequelize.STRING(256),
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('usuario');
  }
};