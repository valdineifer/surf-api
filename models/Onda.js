"use strict";

module.exports = (sequelize, DataTypes) => {
  const Surfista = sequelize.import("./Surfista");
  const Bateria = sequelize.import("./Bateria");

  const Onda = sequelize.define(
    "Onda",
    {
      bateriaId: {
        type: DataTypes.INTEGER,
        references: {
          model: Bateria,
          key: "id"
        }
      },
      surfistaId: {
        type: DataTypes.INTEGER,
        references: {
          model: Surfista,
          key: "id"
        }
      }
    },
    { sequelize, modelName: "Onda" }
  );
  Onda.associate = function(models) {
    Onda.belongsTo(Bateria, { foreignKey: "bateriaId" });
    Onda.belongsTo(Surfista, { foreignKey: "surfistaId" });
  };
  return Onda;
};
