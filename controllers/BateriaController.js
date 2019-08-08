const { Bateria, Nota, Surfista } = require("../models");

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

  async getWinner(req, res) {
    const bateria = await Bateria.findOne({
      where: { id: req.params.id }
    });

    if (!bateria) res.status(404).json({ erro: "Bateria não cadastrada" });

    const ondas = await bateria.getOndas({
      include: [{ model: Nota, as: "Notas" }]
    });

    let surfistas = [];

    if (!ondas) res.status(404).json({ erro: "Nenhuma onda encontrada" });

    ondas.map(onda => {
      let surfista = {
        num: onda.surfistaId
      };

      if (onda.Notas === undefined)
        res.status(404).json({ erro: "Nenhuma nota cadastrada para a onda" });

      onda.Notas.map(nota => {
        let soma = nota.notaParcial1 + nota.notaParcial2 + nota.notaParcial3;
        surfista.nota = soma /= 3;
      });

      surfistas.push(surfista);
    });

    let vencedor = {};
    if (surfistas[0].nota > surfistas[1].nota)
      vencedor = await Surfista.findOne({ where: { numero: surfistas[0].num } });
    else if (surfistas[0].nota < surfistas[1].nota)
      vencedor = await Surfista.findOne({ where: { numero: surfistas[1].num } });
    else res.json({ erro: "Empate!" });

    res.json(vencedor);
  },

  async store(req, res) {
    const bateria = await Bateria.findOrCreate({ where: { ...req.body } });

    // bateria[1] -> se 'false', não foi criado porque já existe
    if (bateria[1]) res.json(bateria);

    res.status(400).json({ erro: "Esta bateria já foi criada anteriormente" });
  }
};
