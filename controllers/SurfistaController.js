const sequelize = require("../database");
const Surfista = sequelize.import("../models/surfista");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    if (page < 1) {
      res.status(400).json({
        erro: "Número de página inválido."
      });
    }

    const pageSize = 10;
    const offset = (page - 1) * pageSize; // Decremento para cálculo
    const limit = offset + pageSize;

    const surfistas = await Surfista.findAll({ offset: offset, limit: limit });

    res.json(surfistas);
  }
};
