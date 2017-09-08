// requiring packages n stuff
const
  express = require('express'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  path = require('path'),
  port = process.env.PORT || 3000,
  app = express();

// route to static files in public folder
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

app.listen(port);
