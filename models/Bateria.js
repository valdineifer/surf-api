"use strict";

module.exports = (sequelize, DataTypes) => {
  const Surfista = sequelize.import("./Surfista");

  const Bateria = sequelize.define(
    "Bateria",
    {
      surfista1_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Surfista,
          key: "numero"
        }
      },
      surfista2_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Surfista,
          key: "numero"
        }
      }
    },
    { sequelize, modelName: "Bateria" }
  );

  Bateria.associate = function(models) {
    Bateria.belongsTo(models.Surfista, {
      foreignKey: "surfista1_id",
      targetKey: "numero",
      as: "surfista1"
    });
    Bateria.belongsTo(models.Surfista, {
      foreignKey: "surfista2_id",
      targetKey: "numero",
      as: "surfista2"
    });

    Bateria.hasMany(models.Onda, {
      foreignKey: "bateriaId",
      sourceKey: "id"
      as: "Ondas"
    });
  };
  return Bateria;
};
