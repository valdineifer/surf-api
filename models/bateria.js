"use strict";

module.exports = (sequelize, DataTypes) => {
  const Bateria = sequelize.define(
    "Bateria",
    {
      surfista1_id: DataTypes.INTEGER,
      surfista2_id: DataTypes.INTEGER
    },
    {}
  );
  Bateria.associate = function(models) {
    Bateria.belongsTo(models.Surfista, { foreignKey: "surfista1_id" });
    Bateria.belongsTo(models.Surfista, { foreignKey: "surfista2_id" });
  };
  return Bateria;
};
