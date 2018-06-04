let express = require('express');
let bodyParser = require('body-parser');

let professorRouter = require('../app/routes/professor');
let sessaoRouter = require('../app/routes/sessao');

module.exports = function(){
    let app = express();
    app.set('port', 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));
    professorRouter(app);
    sessaoRouter(app);
    return app;
}