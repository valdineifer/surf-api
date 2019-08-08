'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Onda', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bateriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Bateria",
          key: "id"
        }
      },
      surfistaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Surfista",
          key: "numero"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Onda');
  }
};