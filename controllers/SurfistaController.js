const { Surfista } = require("../models");

function paginate(page, pageSize) {
  const offset = (page - 1) * pageSize; // Decremento para cálculo
  const limit = offset + pageSize;

  return { offset, limit };
}

module.exports = {
  async index(req, res) {
    const { page = 1, pais } = req.query;
    const pageSize = 10;

    if (page < 1) {
      res.status(400).json({
        erro: "Número de página inválido."
      });
    }

    const surfistas = await Surfista.findAll({
      where: pais ? { pais: pais } : undefined,
      attributes: {
        exclude: ["createdAt", "updatedAt"] // Omite campos timestamp
      },
      ...paginate(page, pageSize)
    });

    res.json(surfistas);
  },

  async store(req, res) {
    const surfista = await Surfista.findOrCreate({ where: { ...req.body } });

    // surfista[1] -> se 'false', não foi criado porque já existe
    if (surfista[1]) res.json(surfista);

    res.status(409).json({ erro: "Este surfista já foi criado anteriormente" });
  },

  async update(req, res) {
    const { nome, pais } = req.body;

    if (nome === pais) {
      res.status(400).json({
        erro: "Dados inválidos. Serão aceitos: nome, país"
      });
    }

    const wasUpdated = await Surfista.update(
      { nome, pais },
      {
        where: { numero: req.params.num }
      }
    );

    const surfista = await Surfista.findOne({
      where: { numero: req.params.num }
    });

    if (surfista) res.json(surfista);

    res.status(404).json({ erro: "Este surfista não está cadastrado" });
  },

  async destroy(req, res) {
    const wasDestroyed = await Surfista.destroy({
      where: { numero: req.params.num }
    });

    if (wasDestroyed !== 0) res.sendStatus(204);

    res.status(404).json({ erro: "Este surfista não está cadastrado." });
  }
};
