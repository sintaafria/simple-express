const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysqldb',
    port: '3306',
});

module.exports = connection;