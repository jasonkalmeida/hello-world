var express = require('express');
var app = express();
    app.use(express.static(__dirname + '/static'));
    app.use(express.bodyParser());
    app.use(app.router);
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
app.post('/test', function(req, res){

  res.sendfile(__dirname + "/" + req.body.pagename + '.html');
});
app.listen(3000);
