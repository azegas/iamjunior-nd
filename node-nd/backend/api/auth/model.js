const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// hash password before saving to database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// custom method to check if hashed password is correct
userSchema.methods.isCorrectPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// toJSON method to remove password from user object when sending to client (frontend)
// this is used to avoid sending the password to the client (frontend)
// check api response with and without this method
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const UserModel = mongoose.model('User', userSchema);

module.exports = {
  UserModel,
};
