const express = require('express')
const mysql = require('mysql')
const app = express()

// middleware
app.use(express.json())



app.listen(8080, () => {
    console.log("Server is running on port 8080");
})