var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/album',
            failureRedirect: '/signup'
        }

    ));

    app.get('/album', isLoggedIn, authController.album);

    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/album',
        failureRedirect: '/signin'
    }));

    // middleware to protect album route
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();
        console.log('------------------------------------');
        console.log("logging out");
        console.log('------------------------------------');
        res.redirect('/signin');

    }
}