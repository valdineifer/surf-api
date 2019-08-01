var express = require("express");
var router = express.Router();

const SurfistaController = require('./controllers/SurfistaController');
const BateriaController = require('./controllers/BateriaController');

router.get("/", (req, res) => {
  res.json("Access the documentation to use the API correctly");
});

router.get("/surfistas", SurfistaController.index);
router.post("/surfistas", SurfistaController.store);
router.put("/surfistas/:num", SurfistaController.update);
router.delete("/surfistas/:num", SurfistaController.destroy);

router.get("/baterias", BateriaController.index);
router.post("/baterias", BateriaController.store);

module.exports = router;
