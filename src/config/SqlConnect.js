const mysql = require('mysql');
const express = require('express');

function dbconnect() {
    const db = mysql.createConnection({
        host : 'localhost',
        user: 'root',
        password: 'root',
        database: 'test'
    });

    db.connect((err) => {
        if (err) {
            throw new Error('fail to connect');
        }


        console.log("connect success");
    });

};
module.exports = {dbconnect};
