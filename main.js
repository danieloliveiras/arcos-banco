var http = require ('http');

var app = require('./config/express')();
var db = require('./config/database');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server escutando na porta ' + app.get('port'));
});

db('mongodb://jaynecrvlh:jayne1997@ds163410.mlab.com:63410/arcos');