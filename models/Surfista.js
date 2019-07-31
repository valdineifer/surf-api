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
    { sequelize, modelName: "Surfista" }
  );

  Surfista.associate = function(models) {
    Surfista.hasMany(models.Bateria, {
      foreignKey: "surfista1_id",
      sourceKey: "numero",
      as: "surfista1"
    });
    Surfista.hasMany(models.Bateria, {
      foreignKey: "surfista2_id",
      sourceKey: "numero",
      as: "surfista2"
    });
  };
  return Surfista;
};