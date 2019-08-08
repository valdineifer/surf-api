"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Nota",
      [
        {
          ondaId: 2,
          notaParcial1: 8,
          notaParcial2: 7,
          notaParcial3: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ondaId: 1,
          notaParcial1: 8,
          notaParcial2: 8,
          notaParcial3: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Nota", null, {});
  }
};
