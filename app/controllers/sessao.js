let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let Professor = require('../models/professor');
let Sessao = require('../models/sessao');

module.exports.criarSessao = function(req, res){
    let cod = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
    let now = new Date()
    let payload = jwt.decode(req.query.token);
    let sessao = new Sessao({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        data: now,
        dicas: req.body.dicas,
        palpite: req.body.palpite,
        correta: req.body.correta,
        codigo: cod,
        profid: payload.userId,
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

module.exports.getDicas = function(req, res){
    var id = req.params.id;
    Sessao.findById(id).exec()
    .then(
        (sessao) => {
            if (sessao){
                res.json(sessao.dicas);
            } else{
                res.status(404).send("Sessão não encontrada");
            }
        },
        (erro) => {
            res.status(500).json(erro);
        }
    )
}

module.exports.getPalpite = function(req, res){
    var id = req.params.id;
    Sessao.findById(id).exec()
    .then(
        (sessao) => {
            if (sessao){
                res.json(sessao.palpite);
            } else{
                res.status(404).send("Sessão não encontrada");
            }
        },
        (erro) => {
            res.status(500).json(erro);
        }
    )
}

module.exports.getCorreta = function(req, res){
    var id = req.params.id;
    Sessao.findById(id).exec()
    .then(
        (sessao) => {
            if (sessao){
                res.json(sessao.correta);
            } else{
                res.status(404).send("Sessão não encontrada");
            }
        },
        (erro) => {
            res.status(500).json(erro);
        }
    )
}