const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * @Description mongoose model that is enforced for movie data<br>
 * {<br>
  Title: {type: String, required: true},<br>
  Description: String,<br>
  Genre: {<br>
    Name: String,<br>
    Description: String<br>
  },<br>
  Director: {<br>
    Name: String,<br>
    Bio: String<br>
  },<br>
  ImagePath: String,<br>
  Featured: Boolean<br>
}
 * @method movieSchema
 */
let movieSchema = mongoose.Schema({
  Title: {type: String, required: true},
  Description: String,
  Genre: {
    Name: String,
    Description: String
  },
  Director: {
    Name: String,
    Bio: String
  },
  ImagePath: String,
  Featured: Boolean
});

/**
 * @Description mongoose model that is enforced for user data<br>
 * {<br>
  Username: {type: String, required: true},<br>
  Password: {type: String, required: true},<br>
  Email: {type: String, required: true},<br>
  Birthday: Date,<br>
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]<br>
}
 * @method userSchema
 */
let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

/**
 * @method hashPassword
 * @description hashes the user's password. This is called before operating on 
 * the password given by the user.
 * @param {string} password 
 * @returns {string} hashed password
 */
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

/**
 * @method validatePassword
 * @description hashes a password and compares it with the saved hash
 * @param {string} password 
 * @returns {boolean} true if passwords match. Otherwise false.
 */
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.Password);
}

let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

module.exports.Movie = Movie;
module.exports.User = User;