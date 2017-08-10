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

    res.render('profile', req.user);

}

exports.album = function(req, res) {
    // console.log("isAuth: " + req.isAuthenticated());
    // console.log('------------------------------------');
    console.log("USER_ID: " + JSON.stringify(req.user));
    console.log('------------------------------------');

    res.render('album', req.user);

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/signin');

    });

}