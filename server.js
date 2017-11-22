//Node and express requirements
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;

//Parse incoming request bodies in middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Static file serving for images in public/img
app.use('/static', express.static(path.join(__dirname, 'app/public')));

//Routing access for api link
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Server connection confirmation in node
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});