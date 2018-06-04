var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        itemA: {
            type: String,
            required: true
        },
        itemB: {
            type: String,
            required: true
        },
        itemC: {
            type: String,
            required: true
        },
        itemD: {
            type: String,
            required: true
        },
        respostaCorreta: {
            type: Number,
            required: true
        },
        sessaoid: {
            type: mongoose.Schema.ObjectId,
            ref: 'Sessao'
        }
    });
    return mongoose.model('Palpite', schema);
}