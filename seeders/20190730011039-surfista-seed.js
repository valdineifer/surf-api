"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Surfista",
      [
        {
          nome: "Cadu Maverick",
          pais: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "João Frango",
          pais: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Surfista", null, {});
  }
};
