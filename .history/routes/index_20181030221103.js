var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// Require controller modules.
var userController = require('../controllers/userController');
var streamController = require('../controllers/streamController');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
function(username, password, done) {
  User.getUserByEmail(username, function(err, username){
      if(err) throw err;
      if(!username){
          return done(null, false, {message: 'Tài khoản không tồn tại'});
      }
      User.comparePass(password, username.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, username);
        }
        else{
          return done(null, false, {message: 'Mật khẩu không chính xác'});
        }
      });
  });
}
));

//save user after login
passport.serializeUser(function(email, done) {
  done(null, email.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, email){
      done(err, email);
  });
});

//check login

function checkAuth(req, res, next){
  if(req.isAuthenticated()){
    next();
  }else{
    res.redirect('/login');
  }
}

//check logined

function checkLogined(req, res, next){
  if(!req.isAuthenticated()){
    next();
  }else{
    res.redirect('/');
  }
}


/* GET home page. */
router.get('/', checkAuth , function(req, res, next) {
  res.render('index', { title: 'Express' , user: req.user});
});

router.get('/register', checkLogined, userController.register);
router.post('/register', checkLogined,  userController.create);



router.get('/login', checkLogined ,userController.login);
router.post('/login', checkLogined ,passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});


router.get('/stream', checkLogined, streamController.Stream);

module.exports = router;
