"use strict";
module.exports = (sequelize, DataTypes) => {
  const Onda = sequelize.import("./Onda");

  const Nota = sequelize.define(
    "Nota",
    {
      ondaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Onda,
          key: "id"
        }
      },
      notaParcial1: {
        defaultValue: false,
        type: DataTypes.FLOAT,
        allowNull: false
      },
      notaParcial2: {
        defaultValue: false,
        type: DataTypes.FLOAT,
        allowNull: false
      },
      notaParcial3: {
        defaultValue: false,
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {}
  );
  Nota.associate = function(models) {
    // associations can be defined here
  };
  return Nota;
};
