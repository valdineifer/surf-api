const { Onda } = require("../models");

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

    const ondas = await Onda.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      ...paginate(page, pageSize)
    });

    res.json(ondas);
  },

  async store(req, res) {
    const onda = await Onda.findOrCreate({ where: { ...req.body } });

    // onda[1] -> se 'false', não foi criado porque já existe
    if (onda[1]) res.json(onda);

    res.status(400).json({ erro: "Esta onda já foi criada anteriormente" });
  },

  async destroy(req, res) {
    const wasDestroyed = await Onda.destroy({
      where: { id: req.params.id }
    });

    if (wasDestroyed !== 0) res.sendStatus(204);

    res.status(404).json({ erro: "A Onda informada não está cadastrada." });
  }
};
