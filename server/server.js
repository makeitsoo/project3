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
    console.log('  🗂  Database Connected.');
  }
});

const app = express();
app.use(bodyParser.json());

//Routes

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/', (req, res) => {
  Workout.find(function (err) {
    if (err)
      res.send(err);
    res.json(req.workout);
  });
});

//In the future if we want some type of filtering
// app.get('/:id', (req, res) => {
//   Workout.findById(req.params.workout_id, function (err, workout) {
//     if (err)
//       res.send(err);
//     res.json(workout);
//   });
// });

app.post('/logit', (req, res) => {
  const workout = new Workout;
  workout.workout_id = req.body.workout_id;
  workout.date = req.body.date;
  workout.what = req.body.what;
  workout.sets = req.body.sets;
  workout.reps = req.body.reps;
  workout.weight = req.body.weight;

  workout.save(function(err) {
    if(err) {
      res.send(err);
    } else {
      res.json({message: 'workout logged!'});
    }
  });
});

app.delete((req, res) => {
  Workout.remove({
    workout_id: req.params.workout_id
  }, function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'Successfully deleted' });
  });
});


app.use(express.static(`${__dirname}/public`));

module.exports = app;
