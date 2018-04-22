//require Mongoose
const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

const NewUser = new Schema({
  user_id: Number,
  username: String,
  email: String,
  height: Number,
  weight: Number,
  age: Number,
  goal: String
}); 

// Compile model from schema
const User = mongoose.model('NewUser', NewUser);

//Export the User
module.exports = User;