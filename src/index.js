const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const mongodb = require('./config/MongoConnect');
const cookie = require('cookie-parser');


const app = express();

mongodb.connect();

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const router = require('./routes/index');


app.use(morgan('combined'));
app.use(cookie());


// Create a MySQL connection pool
const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'my_database'
});


router(app);



// Start the server
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
