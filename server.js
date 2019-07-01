/***********************************************
 * Project: Burger (The Sequel)
 * Developer: Sean Bryan
 * Date: 2019-07-01
 ***********************************************/
//Dependencies
var express = require("express");

var db = require("./models");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTER
// var routes = require("./controllers/burgers_controller.js");
// app.use(routes);
require("./routes/api-routes.js")(app);

// Listener
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});