let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let Professor = require('../models/professor');
let Sessao = require('../models/sessao');

module.exports.criarSessao = function(req, res){
    cod = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    let payload = jwt.decode(req.query.token);
    let sessao = new Sessao({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        data: req.body.data,
        codigo: cod,
        profid: payload.userId
    });
    let promise = Sessao.create(sessao);
    promise.then(
        function(sessao){
            res.status(201).json(sessao);
        },
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.modificarSessao = function(req, res){
    let payload = jwt.decode(req.query.token);
    let id = req.params.id;
    let promise = Sessao.findById(id);

    promise.then(
        function(sessao){
            if(sessao.profid == payload.userId){
                let promise2 = Sessao.findByIdAndUpdate(id, req.body);
                promise2.then(
                    (sessao) => {
                        res.status(201).json(sessao);
                    },
                    (erro) => {
                        res.status(500).json(erro);
                    }
                )
            } else{
                res.status(500).json(erro);
            }
        }
    )
}

module.exports.deletarSessao = function(req, res){
    let payload = jwt.decode(req.query.token);
    let id = req.params.id;
    let promise = Sessao.findById(id);
    promise.then(
        function(sessao){
            if(essao.profid == payload.userId){
                let promise2 = Sessao.findByIdAndRemove(id, req.body);
                promise2.then(
                    (sessao) => {
                        res.status(201).json(sessao);
                    },
                    (erro) => {
                        res.status(500).json(erro);
                    }
                )
            } else{
                res.status(500).json(erro);
            }
        }
    )
}

module.exports.obterSessao = function(req, res){
    var id = req.params.id;
    Sessao.findById(id).exec()
    .then(
        (sessao) => {
            if (sessao){
                res.json(sessao);
            } else{
                res.status(404).send("Sessão não encontrada");
            }
        },
        (erro) => {
            res.status(500).json(erro);
        }
    )
}