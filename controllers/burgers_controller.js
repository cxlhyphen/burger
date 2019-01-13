//Stores all routes
//Dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//favicon :(
router.get("/favicon.ico", function(req, res) {
  res.status(204);
});

//Base route
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

//update
router.put("/burgers/updateOne", function(req, res) {
  burger.updateOne(req.body.burger_id, function(results) {
    console.log(results);
    res.redirect("/");
  });
});

//post
router.post("/burgers/insertOne", function(req, res) {
  burger.insertOne(req.body.burger_name, function(results) {
    console.log(results);
    res.redirect("/");
  });
});

// Export routes for server
module.exports = router;
