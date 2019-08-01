"use strict";

require("dotenv").config();
const { env } = process;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Bateria", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      surfista1_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Surfista",
          key: "numero"
        }
      },
      surfista2_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Surfista",
          key: "numero"
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Bateria");
  }
};
