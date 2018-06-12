var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        data: {
            type: Date,
            required: true
        },
        dicas: {
            type: [String],
            required: true
        },
        palpite: {
            type: [String],
            required: true
        },
        correta: {
            type: Number,
            required: true
        },
        codigo: {
            type: Number,
            required: true,
            index: {
                unique: true
            }
        },
        profid: {
            type: mongoose.Schema.ObjectId,
            ref: 'Professor'
        },
    });
    return mongoose.model('Sessao', schema);
}();