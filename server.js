var express = require("express");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");
var port = process.env.PORT || 3000;
var app = express();

// console.log('------------------------------------');
// console.log(passport);
// console.log('------------------------------------');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var authRoute = require('./routes/auth.js')(app, passport);

// Import routes and give the server access to them.
require('./config/passport/passport.js')(passport, db.creator);
require("./routes/html-routes.js")(app);
require("./routes/album-routes.js")(app);
require("./routes/post-routes.js")(app);
require("./routes/creator-routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});