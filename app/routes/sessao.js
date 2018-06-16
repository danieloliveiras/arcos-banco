let controller = require('../controllers/sessao');
let auth = require('../controllers/auth');

module.exports = function(app){
    app.use('/api/sessao', auth.checar);
    app.post('/api/sessao', controller.criarSessao);
    app.put('/api/sessao', controller.modificarSessao);
    app.delete('/api/sessao/:id', controller.deletarSessao);
    app.get('/api/sessao/:id', controller.obterSessao);
    app.get('/api/sessao/:id/dicas', controller.getDicas);
    app.get('/api/sessao/:id/palpite', controller.getPalpite);
    app.get('/api/sessao/:id/correta', controller.getCorreta);
}