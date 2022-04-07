const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

const db = [{ name: 'tiina' }, { name: 'jack' }];

app.get('/names', (req, res) => {
  res.send(db);
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
