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
db.collection('User').find({lastname: /ñ/gi}).toArray((err, docs) => {
  docs.forEach(doc => {
    let lastname = doc.lastname.replace('ñ', 'nn');
    db.collection('User').update({_id: doc._id}, {lastname});
  });
});
var users = await User.find({}).sort({lastname:1})
return users;
  //intento de validacion con ñ

/* if (User.find({lastname:{$in:["ñ"]}})){
   const regex=/ñ/gi;
    User.replace(regex,"nn")
  }*/
  //otra lógica
 
}

//tampoco me funciono esta
/* User.update(
  { lastname: {$in:[ "ñ"] }}, 
   { "$set": { lastname:'nn' } }
 ) */

