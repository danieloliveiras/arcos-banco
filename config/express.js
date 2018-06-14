let express = require('express');
let bodyParser = require('body-parser');
const path = require('path');

let professorRouter = require('../app/routes/professor');
let sessaoRouter = require('../app/routes/sessao');

module.exports = function(){
    let app = express();
    app.set('port', 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(express.static('./public'));
    professorRouter(app);
    sessaoRouter(app);
    app.get('*', (req, res) => {
        res.sendFile(path.join(_dirname, '../public/index.html'));
    })
    return app;
}