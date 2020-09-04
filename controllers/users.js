var User = require('../models/users'); 

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
 
  //otra lógica
  return users;
}

/*  db.users.find(
   { $text: { $search: "operating" } },
   { score: { $meta: "textScore" }}        // Optional starting in MongoDB 4.4
).sort({ score: { $meta: "textScore" } })

var users = await User.find(
    {$text:{ $search:"operating"}  },
    {score:{ $meta:"lastname"}}
  ).sort({score: {$meta: "lastname  "}  })*/