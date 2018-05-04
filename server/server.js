const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

//Set up default for Mongo connection
const db = process.env.MONGODB_URI || 'mongodb://localhost/workout_db';

const Workout = require('./models/workout_Schema.js');

//Set up default mongoose connection and error handler
mongoose.connect(db, function (error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('Database Connected.');
  }
});

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ keys.cookieKey ]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);



//Routes

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// path for retreiving ALL users workout history
app.get('/workout', (req, res) => {
  Workout.find({})
    .then(function (workout) { return res.json(workout); });
});

// path for retreiving Todays Workout table data only
app.get('/todayworkout/:date', (req, res) => {
  Workout.find({ date: req.params.date})
    .then(function (workout) { return res.json(workout); });
});

//In the future if we want some type of filtering
// app.get('/:id', (req, res) => {
//   Workout.findById(req.params.workout_id, function (err, workout) {
//     if (err)
//       res.send(err);
//     res.json(workout);
//   });
// });

// app.post('/logset', (req, res) => {
//   const workout = new Workout;
//   workout.exercise = req.body.exercise;
//   workout.sets = req.body.sets;
//   workout.reps = req.body.reps;
//   workout.weight = req.body.weight;
//
//   workout.save(function(err) {
//     if(err) {
//       res.send(err);
//     } else {
//       console.log(workout);
//       res.json({message: 'workout logged!'});
//     }
//   });
// });

app.post('/logworkout', (req, res) => {

  console.log(req.body);
  const workout = new Workout;
  workout.exercise = req.body.exercise;
  workout.weight = req.body.weight;
  // workout.sets = req.body.sets;
  workout.reps = req.body.reps;

  workout.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('workout logged!');
      console.log(workout);
    }
  });

  res.json(workout);
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
