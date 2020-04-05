var User = require ('../models/User');
configure = require('../configure')
conig = configure()


function checkIfUserExists(username){
  User.findOne({username: username}, function(err, data) {
    if (data !== null) return true;
    return false;
  });
};

module.exports = {
  //Create user
  create: (user, callback) => {
    const { username, firstname, lastname, team } = user;
    if (!username || !firstname || !lastname || !team ) return callback(new Error('Wrong user parameter'), null);

    // Check if user already exists
    User.findOne({username: username}, function(err, data) {
      if (err || checkIfUserExists(username)) return callback(new Error('The username already exists'), null);
    
      // Create an instance of model User and save it passing a callback
      var newUser = new User({ username: username, firstname: firstname, lastname: lastname, team: team });
      newUser.save(function (err) {
        if (err) return callback(new Error(`Error while trying to save user ${username} in the database`), null);
        callback(null, user.username);
      });
    });
  },

  //Get user by username
  get: (username, callback) => {
    User.findOne({username: username}, function(err, data) {
      if (err) return callback(new Error(`Error while trying to find user ${username} in the database`), null);
      callback(null, data);
    });
  },

  //Delete user by username
  delete: (username, callback) => {
    checkIfUserExists(username);
    User.deleteOne({username: username}, function(err, data) {
      if (err) return callback(new Error(`Error while trying to delete user ${username} in the database`), null);
      User.findOne({username: username}, function(err, data) {
        console.log(data);
        if (data) return callback(new Error(`Error while trying to find user ${username} in the database`), null);
      });
      callback(null, data);
    });
  }
}
