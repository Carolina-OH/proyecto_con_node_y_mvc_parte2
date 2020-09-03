var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({status:'No se puede obtener los datos'});
});
/* Post user  */
router.post('/', function(req, res, next) { 
  userController.user_create(req, res, next);
});
module.exports = router;
