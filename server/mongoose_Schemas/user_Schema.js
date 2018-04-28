//require Mongoose
const mongoose = require('mongoose');
const WorkoutSchema = require('workout_Schema');
const WorkoutHistorySchema = require('workoutHistorySchema');
// Define schema
const Schema = mongoose.Schema;

const NewUser = new Schema({
  user_id: { type: Number, default: 0 },
  username: String,
  email: String,
  height: Number,
  weight: Number,
  age: Number,
  goal: String,
  todayWorkout: [WorkoutSchema],
  workoutHistory: [WorkoutHistorySchema]
}); 

// Compile model from schema
const User = mongoose.model('NewUser', NewUser);

//Export the User
module.exports = User;