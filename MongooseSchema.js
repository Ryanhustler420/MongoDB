var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:String,
  username:{type:String, require: true, unique:true},
  password:{type:String, require:true},
  admin:Boolean,
  location:String,
  meta:{
    age:Number,
    website:String
  },
  created_at:Date,
  updated_at:Date
});

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users

userSchema.methods.addNameToExistName = function() {
  // add some stuff to the users name
  this.name = this.name + '_SuperUser';

  return this.name;
};

// Run a Function Before Saving

// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  // here we have to call next() function it's must!
  next();
});

// Now on every save, we will add our dates.
// This is also a great place to hash passwords to be sure that
// we never save plaintext passwords.

var User = mongoose.model('User',userSchema);

module.exports = User;


// The allowed SchemaTypes are:
//
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
