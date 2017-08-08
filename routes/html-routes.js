var db = require("../models");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.render("login", {})
    })

    app.get("/signup", (req, res) => {
        res.render("signup", {})
    })


    app.get("/album", (req, res) => {
        res.render("album", {})
    })

}