const { Nota } = require("../models");

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

    const notas = await Nota.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      ...paginate(page, pageSize)
    });

    res.json(notas);
  },

  async store(req, res) {
    const nota = await Nota.findOrCreate({ where: { ...req.body } });

    // nota[1] -> se 'false', não foi criado porque já existe
    if (nota[1]) res.json(nota);

    res.status(400).json({ erro: "Esta nota já foi criada anteriormente" });
  },

  async destroy(req, res) {
    const wasDestroyed = await Nota.destroy({
      where: { id: req.params.id }
    });

    if (wasDestroyed !== 0) res.sendStatus(204);

    res.status(404).json({ erro: "A Nota informada não está cadastrada." });
  }
};
