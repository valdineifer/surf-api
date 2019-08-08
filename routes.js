var express = require("express");
var router = express.Router();

const SurfistaController = require('./controllers/SurfistaController');
const BateriaController = require('./controllers/BateriaController');
const OndaController = require('./controllers/OndaController');
const NotaController = require('./controllers/NotaController');

router.get("/", (req, res) => {
  res.json("Access the documentation to use the API correctly");
});

router.get("/surfistas", SurfistaController.index);
router.post("/surfistas", SurfistaController.store);
router.put("/surfistas/:num", SurfistaController.update);
router.delete("/surfistas/:num", SurfistaController.destroy);

router.get("/baterias", BateriaController.index);
router.get("/baterias/:id/vencedor", BateriaController.getWinner);
router.post("/baterias", BateriaController.store);

router.get("/ondas", OndaController.index);
router.post("/ondas", OndaController.store);
router.delete("/ondas/:id", OndaController.destroy);

router.get("/notas", NotaController.index);
router.post("/notas", NotaController.store);
router.delete("/notas/:id", NotaController.destroy);

module.exports = router;
