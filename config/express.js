let express = require('express');
let bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5000


let professorRouter = require('../app/routes/professor');
let sessaoRouter = require('../app/routes/sessao');

module.exports = function(){
    let app = express();
    app.set('port', port);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(express.static('./public'));
    professorRouter(app);
    sessaoRouter(app);
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
    return app;
}