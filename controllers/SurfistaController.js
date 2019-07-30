const sequelize = require('../database');
const Surfista = sequelize.import('../models/surfista');

module.exports = {
  async index(req, res) {
    const surfistas = await Surfista.findAll();

    res.json(surfistas);
  }
};
