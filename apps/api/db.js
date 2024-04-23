const mysql = require('mysql');
require('dotenv').config(); 

console.log(process.env.DB_HOST)

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3336,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    charset: 'utf8mb4',
    timezone: 'utc'
});

connection.connect(function (err) {
    if (err) {
        console.log("Error whilst connecting to MySQL Database!")
        console.log(err);
    } else {
        console.log("Connected to MySQL Database!");
    }
});

module.exports = connection;