'user strict';

const mysql = require('mysql2');

console.log(process.env)

//local mysql db connection
const pool = mysql.createPool({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    port     : process.env.DB_PORT,
});
const connection = pool.promise();
// // connect to database
// connection.execute(function(err) {
//     if (err) throw err;
// });

module.exports = connection;