const
  express = require('express'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  path = require('path'),
  port = 3000,
  app = express();

app.use(express.static("public"))

app.use(bodyParser.urlencoded({
  extended: false
}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);;
