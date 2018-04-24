//Using this Schema for MVP. 
//require Mongoose
const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

const NewWorkout = new Schema({
  workout_id: { type: Number, default: 0 },
  date: Date,
  what: String,
  sets: Number,
  reps: Number,
  weight: Number,
});

// Compile model from schema
const Workout = mongoose.model('NewWorkout', NewWorkout);

//Export the Workout
module.exports = Workout;