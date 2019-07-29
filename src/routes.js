var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("Access the documentation to use the API correctly");
});

// router.post("/surfist", );

module.exports = router;
