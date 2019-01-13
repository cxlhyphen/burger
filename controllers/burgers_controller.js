//Stores all routes
//Dependencies
const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

//Base route
router.get("/", function(req, res) {
    res.render("index");

    // burger.selectAll(function (data) {
    //   res.render("index", {burgers: data});
    // });
  });

// Export routes for server
module.exports = router;