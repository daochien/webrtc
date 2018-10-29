var express = require('express');
var router = express.Router();

// Require controller modules.
var userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register',  userController.register);
router.post('/register',  userController.create);

module.exports = router;
