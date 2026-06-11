const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const msg = 'Hello.';
  res.send(msg);
});

module.exports = app;
