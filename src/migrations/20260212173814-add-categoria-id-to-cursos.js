'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cursos', 'categoria_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'categorias', key: 'id' }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('cursos', 'categoria_id');
  }
};