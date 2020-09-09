var User = require('../models/users'); 
const { db } = require('../models/users');

exports.user_create = function(req, res, next) {
  //
  if (req.body) {
    let items = req.body
    User.create(items, function(err, newUsers){
      if(err) return res.json({ error: err });
       // res.json(newUsers) 
       res.redirect("/");
    });
  } 
  else {
    res.json({status: 'ERROR', message: 'Debe completar todos los campos'}); //opcional mandar un mensaje de error
  }
}

exports.user_get = async function(req, res, next) {
var users = await User.find({}).sort({lastname:1})
//var newUsers=users.map((user) => {
 // user.lastname=user.lastname.replace("Ñ","nn");
  return users
//});
//return newUsers.sort()
}
