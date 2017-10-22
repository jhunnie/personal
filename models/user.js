var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  email: { // TODO: Need to add email validation
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 99
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 99
  }
});

// THIS IS AN OVERRIDE OF A SEQUELIZE METHOD. NEED TO CHECK TO SEE
// IF ITS NECESSARY FOR MONGOOSE
// Removes password from user object before returning to client
// userSchema.methods.toJSON = function() {
//   // get the user's JSON data
//   var jsonUser = this.get();
//   // delete the password from the JSON data, and return
//   delete jsonUser.password;
//   return jsonUser;
// }

// Mongoose's version of a beforeCreate hook
userSchema.pre('save', function(next) {
  var hash = bcrypt.hashSync(this.password, 10);
  // store the hash as the user's password
  this.password = hash;
  next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;
