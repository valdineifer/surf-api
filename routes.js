var express = require("express");
var router = express.Router();

const SurfistaController = require('./controllers/SurfistaController');
const BateriaController = require('./controllers/BateriaController');

router.get("/", (req, res) => {
  res.json("Access the documentation to use the API correctly");
});

router.get("/surfistas", SurfistaController.index);
router.post("/surfistas", SurfistaController.store);

router.get("/baterias", BateriaController.index);

module.exports = router;
