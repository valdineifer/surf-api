var express = require("express");
var router = express.Router();

const SurfistaController = require('./controllers/SurfistaController');
const BateriaController = require('./controllers/BateriaController');
const OndaController = require('./controllers/OndaController');

router.get("/", (req, res) => {
  res.json("Access the documentation to use the API correctly");
});

router.get("/surfistas", SurfistaController.index);
router.post("/surfistas", SurfistaController.store);
router.put("/surfistas/:num", SurfistaController.update);
router.delete("/surfistas/:num", SurfistaController.destroy);

router.get("/baterias", BateriaController.index);
router.post("/baterias", BateriaController.store);

router.get("/ondas", OndaController.index);
router.post("/ondas", OndaController.store);
router.delete("/ondas/:id", OndaController.destroy);

module.exports = router;
