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

//Mongoose promise
mongoose.Promise = global.Promise;
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });