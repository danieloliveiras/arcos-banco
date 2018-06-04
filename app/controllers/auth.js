let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let Professor = require('../models/professor');

module.exports.logar = function(req, res){
    function logar(user){
        if(!bcrypt.compareSync(req.body.senha, user.senha)){
            falhar();
        }else{
            let token = jwt.sign({userId: user._id}, 'secret');
            res.status(200).json({
                message:"Logado",
                token: token,
                userId: user._id
            })
        }
    }
    function falhar(){
        res.status(401).send('Invalid login');
    }

    Professor.findOne({email: req.body.email}).exec().then(logar, falhar);
}

module.exports.checar = function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if(err){
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
};
