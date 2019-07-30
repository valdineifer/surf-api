"use strict";

module.exports = (sequelize, DataTypes) => {
  const Surfista = sequelize.define(
    "Surfista",
    {
      nome: DataTypes.STRING,
      pais: DataTypes.STRING
    },
    {}
  );
  Surfista.associate = function(models) {
    // associations can be defined here
  };
  return Surfista;
};
