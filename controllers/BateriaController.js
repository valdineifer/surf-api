const sequelize = require("../database");
// const Bateria = sequelize.import("../models/Bateria");
// const Surfista = sequelize.import("../models/Surfista");

const { Bateria, Surfista } = require("../models");

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

    const baterias = await Bateria.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      ...paginate(page, pageSize)
      // Código para futuras necessidades de fazer includes (join)
      // include: [
      //   {
      //     model: Surfista,
      //     as: "surfista1"
      //   },
      //   {
      //     model: Surfista,
      //     as: "surfista2"
      //   }
      // ],
    });

    res.json(baterias);
  },

  async store(req, res) {
    const bateria = await Bateria.findOrCreate({ where: { ...req.body } });

    // bateria[1] -> se 'false', não foi criado porque já existe
    if (bateria[1]) res.json(bateria);

    res.status(400).json({ erro: "Esta bateria já foi criada anteriormente" });
  }
};
