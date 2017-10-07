const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/foo', function(req, res) {
  res.send('bar!');
});

app.post("/api", (req, res) => {
  res.send("NOPE");
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
