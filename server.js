const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('./database');
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 8080;
// Route requires
const user = require('./routes/user');
const product = require('./routes/product');




var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cors = require('cors');
var api = require('./routes/api');



app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET,PUT,PATCH,POST,DELETE,OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	next();
});
// MIDDLEWARE
app.use(morgan('dev'));

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());



// Routes
app.use('/api', api);
app.use('/posts', product);

// Starting Server
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
