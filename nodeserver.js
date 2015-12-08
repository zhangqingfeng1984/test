var express = require('express');

var app = express();

var data = [
	{id:1, name:'user 1', age: 10},
	{id:2, name:'user 2', age: 20},
	{id:3, name:'user 3', age: 30}
];

app.use(express.static('.'));

app.get('/', function(req, res){
	res.send('hello express');
});

app.get('/api/users', function(req, res){
	res.send(JSON.stringify(data));
});

app.get('/api/users/:id', function(req, res){
	var user = null;
	for (var i=0; i<data.length; i++){
		if (data[i].id == req.params.id){
			user = data[i];
			break;
		}
	}
	res.writeHead(200, {'Content-Type':'application/json'});
	res.write(JSON.stringify(user));
	res.end();
});

app.get('/download', function(req, res){
	res.download('./config.rb');
});

var server = app.listen(8888, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('server listening at http://%s:%s', host, port);
});