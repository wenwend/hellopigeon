const express = require('express');
const app = express();
var mysql=require('mysql');
var http = require('http');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors')


var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))


//get ClearDB with server
var con=mysql.createConnection({
	//CLEARDB_DATABASE_URL = mysql://bfbb416be2add3:333fa482@us-cdbr-iron-east-01.cleardb.net/heroku_a68062f9c8baf13?reconnect=true;
	host:"us-cdbr-iron-east-01.cleardb.net",
	user:"bfbb416be2add3",
	password:"333fa482",
	database:"heroku_a68062f9c8baf13"
})

con.connect(function(err){
	if (err) throw err;
	con.query("SELECT * FROM pigeons", function (err, result, fields) {
	if (err) throw err;
	console.log(result);
  });
	//console.log("You are connected with DB!");
})


//get all 
app.route('/api/pigeons').get((req, res) => {
	res.send({
		Pigeons:[{name:"lily",age:4},{name:"lucy",age:5}]
	});
});
//get one
app.route('/api/pigeons/:name').get((req, res) => {
	const requestedPigeonName=req.params['name'];
	 
	res.send({name:requestedPigeonName});
});

//post one
app.route('/api/pigeons').post((req, res) => {
  res.send(201, req.body);
});

//update one
app.route('/api/pigeons/:name').put((req, res) => {
	res.send(200,req.body);
});

//delete one
app.route('/api/pigeons/:name').delete((req, res) => {
	res.sendStatus(204);
});

//start listening
app.listen(8080, function() {
	console.log("Server running");
});