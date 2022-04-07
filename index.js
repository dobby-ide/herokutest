const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
var mysql = require('sql');
const db = [{ name: 'tiina' }, { name: 'jack' }];
var dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
  multipleStatements: true,
});
app.get('/names', (req, res) => {
  res.send(db);
});

var connection = mysql.createConnection(dbConnection);
app.get('/', (req, res) => {
  connection.query('SELECT * from location', (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
