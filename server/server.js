const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/hi', (req, res) => {
  res.json({ message: 'hello world' });
});

app.post('/echo', (req, res) => {
  res.json(req.body);
});

app.use(express.static(`${__dirname}/public`));

module.exports = app;
