var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        titulo: {
            type: String,
            required: true
        },
        text: {
            text: String,
            required: true
        },
        sessaoid: {
            type: mongoose.Schema.ObjectId,
            ref: 'Sessao'
        }
    });
    return mongoose.model('Dica', schema);
}
