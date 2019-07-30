"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Bateria", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      surfista1_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Surfista",
          key: "numero"
        }
      },
      surfista2_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("Bateria");
  }
};
