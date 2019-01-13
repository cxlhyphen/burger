//server to run our app :)
//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
require("dotenv").config();

//set up express
const app = express();

//serve content for app from public directory
app.use(express.static(__dirname + "/public"));
//set up parser
app.use(bodyParser.urlencoded({
    extended: false
}));
//set up override
app.use(methodOverride("_method"));

//set up handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//port
const port = process.env.PORT || 3000;

//import routes
const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//listener
app.listen(port, function() { console.log(`Listening on port ${port}`)});