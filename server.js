const express = require('express');
const app = express();
var http = require('http');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))


//get all 
app.route('/api/pigeons').get((req, res) => {
	res.send({
		Pigeons:[{name:"lily",age:4},{name:"lucy",age:5}]
	});
});
//get one
app.route('/api/pigeons/:name').get((req, res) => {
	const requestedCatName=req.params['name'];
	res.send({name:requestedCatName});
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