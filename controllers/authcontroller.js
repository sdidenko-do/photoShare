var exports = module.exports = {}

exports.signup = function(req, res) {

    res.render('signup');

}

exports.signin = function(req, res) {

    res.render('signin');

}

exports.album = function(req, res) {

    res.render('album');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/signin');

    });

}