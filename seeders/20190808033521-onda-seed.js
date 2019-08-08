"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Onda",
      [
        {
          bateriaId: 1,
          surfistaId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          bateriaId: 1,
          surfistaId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Onda", null, {});
  }
};
