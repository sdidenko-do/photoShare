var db = require("../models");
var exports = module.exports = {}

exports.signup = function(req, res) {

    res.render('signup');

}

exports.signin = function(req, res) {

    res.render('signin');

}

exports.profile = function(req, res) {

    console.log("USER_ID: " + JSON.stringify(req.user));
    console.log('------------------------------------');

    db.contributors.findAll({
        where: {
            contributorId: req.user.id
        },
        include: {
            model: db.album
        }
    }).then(allAlbums => {
        let albumArray = []
        for (let value of allAlbums) {
            albumArray.push(value.dataValues)
        }
        let hbs = {
            userId: req.user.id,
            username: req.user.username,
            albums: albumArray
        }
        console.log(hbs)
        res.render('profile', hbs);
        //need second query to get all albums for each album that this user has access to 
    })


}

exports.album = function(req, res) {
    let hbs = {}
        // console.log("isAuth: " + req.isAuthenticated());
        // console.log('------------------------------------');
    console.log("USER_ID: " + JSON.stringify(req.user));
    console.log('------------------------------------');
}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/signin');

    });

}