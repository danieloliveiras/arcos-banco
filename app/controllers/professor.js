let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let Professor = require('../models/professor');
let Sessao = require('../models/sessao');

module.exports.inserirProfessor = function(req, res){
    let professor = new Professor({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    });
    let promise = Professor.create(professor);
    promise.then(
        function(professor){
            res.status(201).json(professor);
        },
        function(erro){
            res.status(500).json(erro);
        },
    );
}

module.exports.listarProfessores = function(req, res){
    let promise = Professor.find().exec();
    promise.then(
        function(professores) {
            res.json(professores)
        },
        function(erro) {
            res.status(500).end();
        }
    );
}

module.exports.modificarProfessor = function(req, res){
    let payload = jwt.decode(req.query.token);
    req.body.senha = bcrypt.hashSync(req.body.senha, 10);
    promise = Professor.findByIdAndUpdate(payload.userId, req.body);
    promise.then(
        function(professor){
            res.status(201).json(professor);
        },
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.sessoesDeProfessor = function(req, res){
    let id = req.params.id;
    let promise = Professor.findById(id);
    promise.then(
        function(professor){
            let promise1 = Sessao.find({'profid': professor._id});
            promise1.then(
                function(sessao){
                    res.json(sessao);
                },
                function(erro){
                    res.status(500).send();
                }
            )
        }
    )
}

module.exports.usuarioLogado = function(req, res){
    let payload = jwt.decode(req.query.token);
    let promise = Professor.findById(payload.userId);
    promise.then(
        function(professor){
            res.json(professor);
            console.log(professor)
        },
        function(erro){
            res.status(500).send();
        }
    )
}