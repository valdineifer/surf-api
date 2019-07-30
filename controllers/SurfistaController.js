const sequelize = require("../database");
const Surfista = sequelize.import("../models/surfista");

function paginate(page, pageSize) {
  const offset = (page - 1) * pageSize; // Decremento para cálculo
  const limit = offset + pageSize;

  return { offset, limit };
}

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const pageSize = 10;

    if (page < 1) {
      res.status(400).json({
        erro: "Número de página inválido."
      });
    }

    const surfistas = await Surfista.findAll({
      attributes: ['numero', 'nome', 'pais'], // Omite campos timestamp
      ...paginate(page, pageSize)
    });

    res.json(surfistas);
  }
};
