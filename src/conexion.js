const mysql = require('mysql');

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'abitbid',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});



module.exports = connection;