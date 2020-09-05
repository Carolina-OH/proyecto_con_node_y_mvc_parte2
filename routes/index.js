var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var result = await userController.user_get(req, res, next);
  res.render('users', { result });
});

/* Post user  */
router.post('/', function(req, res, next) { 
  userController.user_create(req, res, next);
});
module.exports = router;
