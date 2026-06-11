const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let msg = 'Hello.'
  res.send(msg);
});

module.exports = app;
