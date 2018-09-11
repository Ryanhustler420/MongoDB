

//Read
// There are many reasons for us to query our database of users. We'll need one
// specific user, all users, similar users, and many more scenarios. Here are
// a few examples:


//Find All

// get all the users
var findAll = function(Obj){
  // User.find(); as a refrence
  Obj.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
  });
}

// Find One

// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});


//Find By ID

// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});

//Querying

// get any admin that was created in the past month

// get the date 1 month ago
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past month
  console.log(users);
});


// Update
// Here we will find a specific user, change some attributes, and then re-save // them


//Get a User, Then Update
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

// Remember that since we created the function to change the updated_at date, // this will also happen on save.

});


// Find and Update
// An even easier method to use since we dont have to grab the user, modify,
// and then save. We are just issuing a mongodb findAndModify command.


// find the user starlord55
// update him to starlord 88
User.findOneAndUpdate({ username: 'starlord55' }, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});


//Find By ID and Update

// find the user with id 4
// update username to starlord 88
User.findByIdAndUpdate(4, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});


//Delete

// Get a User, Then Remove
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});

//Find and Remove

// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});

//Find By ID and Remove
// find the user with id 4
User.findByIdAndRemove(4, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});

// thanks Chris Sevilleja from scotch.io
// more resources on https://scotch.io/
