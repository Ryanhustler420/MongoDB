var mongoose = require('./mongoDB');
var User = require('./MongooseSchema');
var _dbFunctions = require('./model');

//this file has few function of Mongodb

// create a new user called chris
var Gaurav = new User({
  name:"GauravGupta",
  username:'Gupta.Gaurav142',
  password:'simplePassword'
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude

Gaurav.addNameToExistName(function(err,name){
  if(err) throw err;
  console.log("Your new Name is " + name);
});


// call the built-in save method of Mongodb to save to the database
Gaurav.save((err) => {
  if(err) throw err;
  console.log("User has been Saved successfully!");
})
