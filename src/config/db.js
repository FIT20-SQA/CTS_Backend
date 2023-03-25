
const mysql = require('mysql');
function connect() {
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'my_database'
    });
    
}



module.exports = {connect}