var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
  };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  var burgerName = req.body.burger_name;

  burger.create(burgerName, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var burgerID = req.params.id;
  var eatenBool = req.body.devour;
  
  burger.update(eatenBool, burgerID, function() {
    res.redirect("/");
  });
});

module.exports = router;