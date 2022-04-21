// var http = require('http');
// var url = require('url');

// http.createServer(function(req, res) {
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.write(txt);
//     res.end();
// }).listen(8080);

var express = require('express');
var app = express();
app.set('view-engine', 'jade');
app.get('/', function(req, res)
{  
    res.send(app.get('view-engine'));
});
var sever = app.listen(3000, function()
{  
    console.log('Server is fucking with port 3000 so you keep your mouth shut.') ;
});