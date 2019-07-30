var express = require("express");
var router = express.Router();

const SurfistaController = require('./controllers/SurfistaController');

router.get("/", (req, res) => {
  res.json("Access the documentation to use the API correctly");
});

router.get("/surfistas", SurfistaController.index);

module.exports = router;
