const sequelize = require("../database");
const Surfista = sequelize.import("../models/Surfista");

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
      attributes: { exclude: ['createdAt', 'updatedAt'] }, // Omite campos timestamp
      ...paginate(page, pageSize)
    });

    res.json(surfistas);
  },

  async store(req, res) {
    const surfista = await Surfista.findOrCreate({ where: { ...req.body } });

    // surfista[1] -> se 'false', não foi criado porque já existe
    if (surfista[1]) res.json(surfista);

    res.status(400).json({ erro: "Este surfista já foi criado anteriormente" });
  }
};
