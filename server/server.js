const express = require('express');
const bodyParser = require('body-parser');
// Require Mongoose
const mongoose = require('mongoose');

//Set up default for Mongo connection
const db = process.env.MONGODB_URI || 'mongodb://localhost/workout_db';

const Workout = require('./mongoose_Schemas/workout_Schema.js');
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

app.get('/logit', (req, res) => {
  db.workout_db
    .find({})
    .then((workout_db) => {
      res.json(workout_db);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post('/logit', (req, res) => {
  const workout = new Workout;
  workout.date = req.body.date;
  workout.what = req.body.what;
  workout.sets = req.body.sets;
  workout.reps = req.body.reps;
  workout.weight = req.body.weight;

  workout.save(function(err) {
    if(err) {
      res.send(err);
    } else {
      res.json({message: 'workout logged!'})
    }
  })

});

app.use(express.static(`${__dirname}/public`));

module.exports = app;

