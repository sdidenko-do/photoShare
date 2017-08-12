var express = require("express");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var db = require("./models");
var port = process.env.PORT || 3000;
var app = express();

// set exphbs
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + '/public'));
app.use("/public", express.static(__dirname + '/public'));


// set bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// For Passport
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
        // cookie: { secure: true }
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

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