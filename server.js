var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function(){
	console.log("app is started on port %s", 3000);
});