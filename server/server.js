const express = require('express');
const bodyParser = require('body-parser');
// Require Mongoose
const mongoose = require('mongoose');

//Set up default for Mongo connection
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

// db.workout_db
//   .create({workout_id: 1 })
//   .then((workout) => {
//     console.log(workout);
//   })
//   .catch( (err) => {
//     console.log(err.message);
//   });


app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/workout', (req, res) => {
  db.workout_db
    .find({})
    .then((workout_db) => {
      res.json(workout_db);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post('/workout', (req, res) => {
  db.workout_db
    .create(req.body)
    .then((workout_db) => {
      return db.workout_db.findOneAndUpdate({}, {$push: { workout:
      workout_db._id}} , { new:true });
    })
    .then((workout_db) => {
      res.json(workout_db);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.use(express.static(`${__dirname}/public`));

module.exports = app;

