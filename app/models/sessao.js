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
        codigo: {
            type: String,
            required: true
        },
        profid: {
            type: mongoose.Schema.ObjectId,
            ref: 'Professor'
        }
    });
    return mongoose.model('Sessao', schema);
}