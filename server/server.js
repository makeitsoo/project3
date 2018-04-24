const express = require('express');
const bodyParser = require('body-parser');
// Require Mongoose
const mongoose = require('mongoose');

//Set up default for Mongoose connection
const db = process.env.MONGODB_URI || 'mongodb://localhost/workout_db';

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

