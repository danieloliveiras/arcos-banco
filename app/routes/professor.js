let controller = require('../controllers/professor');
let auth = require('../controllers/auth');

module.exports = function(app){
    app.post('/api/professores/login', auth.logar);
    app.post('/api/professores', controller.inserirProfessor);
    app.use('/api/professores', auth.checar);
    app.get('/api/professores', controller.listarProfessores);
    app.get('/api/professor/:id/sessoes', controller.sessoesDeProfessor);
}