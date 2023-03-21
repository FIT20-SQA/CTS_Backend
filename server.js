const express = require('express')
const mysql = require('mysql')
const app = express()

// middleware
app.use(express.json())



// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_database'
  });
  
  // Middleware
  app.use(express.json());
  
  // Routes
  app.post('/register', (req, res) => {
    // Register logic
  });
  
  app.post('/login', (req, res) => {
    // Login logic
  });
  
  // Start the server
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
