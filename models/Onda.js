"use strict";

module.exports = (sequelize, DataTypes) => {
  const Surfista = sequelize.import("./Surfista");
  const Bateria = sequelize.import("./Bateria");

  const Onda = sequelize.define(
    "Onda",
    {
      bateriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Bateria,
          key: "id"
        }
      },
      surfistaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Surfista,
          key: "id"
        }
      }
    },
    { sequelize, modelName: "Onda", freezeTableName: true }
  );
  Onda.associate = function(models) {
    Onda.belongsTo(Bateria, { foreignKey: "bateriaId" });
    Onda.belongsTo(Surfista, { foreignKey: "surfistaId" });

    Onda.hasMany(models.Nota, {
      as: "Notas",
      foreignKey: "ondaId"
    });
  };
  return Onda;
};
