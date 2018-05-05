//Using this Schema for MVP.
//require Mongoose
const mongoose = require('mongoose');
//require Moment
// const moment = require('moment');
// Define schema
const Schema = mongoose.Schema;

const NewWorkout = new Schema({
  date: String,
  exercise: String,
  // sets: Number,
  weight: Number,
  reps: Number
});

// Compile model from schema
const Workout = mongoose.model('NewWorkout', NewWorkout);

//Export the Workout
module.exports = Workout;
