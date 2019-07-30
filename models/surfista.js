"use strict";

module.exports = (sequelize, DataTypes) => {
  const Surfista = sequelize.define(
    "Surfista",
    {
      numero: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nome: { 
        defaultValue: false,
        type: DataTypes.STRING
      },
      pais: { 
        defaultValue: false,
        type: DataTypes.STRING
      }
    },
    {}
  );
  Surfista.associate = function(models) {
    // associations can be defined here
  };
  return Surfista;
};
