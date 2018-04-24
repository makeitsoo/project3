const express = require('express');
const bodyParser = require('body-parser');
// Require Mongoose
const mongoose = require('mongoose');

//Set up default for Mongo connection
const db = process.env.MONGODB_URI || 'mongodb://heroku_cd5pc5v6:53008qq13n4f6qutnvftqaom5g@ds255889.mlab.com:55889/heroku_cd5pc5v6';

//Set up default mongoose connection and error handler
mongoose.connect(db, function (error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('mongoose connection is successful');
  }
});

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

