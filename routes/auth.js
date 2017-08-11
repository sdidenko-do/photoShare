var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/profile',
            failureRedirect: '/signup'
        }

    ));

    app.get('/album', isLoggedIn, authController.album);

    app.get('/profile', isLoggedIn, authController.profile);

    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin'
    }));

    // middleware to protect album route
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        console.log('------------------------------------');
        console.log("Sorry, you can not access this page since you are currently logged out");
        console.log('------------------------------------');
        res.redirect('/signin');

    }
}