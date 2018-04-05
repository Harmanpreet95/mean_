var express = require('express'),
path = require('path'),
//rootPath = path.normalize(__dirname + '/../'),
apiRouter = express.Router(),
router = express.Router(),      
dateNow = Date.now();
var passport = require('passport');

module.exports = function(app,passport) {

app.use('/', router);
   
// home route
router.get('/', function(req, res) {
  
    console.log("hiii");
    res.render('index');

});

app.use(function(req, res, next) {
        res.status(404);

        res.render('404');
        return;
    });

};


router.get('/admin', function(req, res) {   // Admin login
        res.render('admin/login');
});

router.get('/admin/register', function(req, res) {   // Admin Register
        res.render('admin/register');
});


//Admin Login
router.post('/login', passport.authenticate('local'), function(req, res){
        console.log(req.body);
        console.log(res.body);
        res.redirect('/admin/dashboard');
});

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.email === 'harmanpreet.3ginfo@gmail.com') {
        console.log('cool you are an admin, carry on your way');
        next();
    } else {
        console.log('You are not an admin');
        res.redirect('/admin');
    }
}