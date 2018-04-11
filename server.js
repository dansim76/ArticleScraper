var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require("morgan");
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var request = require("request");

var cheerio = require("cheerio");
var axios = require("axios");
// Require all models
var db = require("./models");

var databaseUrl = "mongodb://localhost/articlescraper"

var PORT = process.envPORT || 3000;

// Initialize Express
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

app.use(logger("dev"));
//app.use(method("_method"));
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine","handlebars")
//require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);
// Start the server
// require("./controllers/fetch.js")(app);
// require("./controllers/headline.js")(app);
// require("./controllers/note.js")(app);

var route1 = require("./controllers/fetch.js");
var route2 = require("./controllers/headline.js");
var route3 = require("./controllers/note.js");

app.use(route1)
app.use(route2)
app.use(route3)




app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
