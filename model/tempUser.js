const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./users');

const tempUserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
  },
  salt: String,
});

tempUserSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

tempUserSchema.methods.activate = async function () {
  const user = await new User({
    firstName: this.firstName,
    lastName: this.lastName,
    userName: this.userName,
    gender: this.gender,
    dob: this.dob,
    email: this.email,
    phone: this.phone,
    password: this.password,
  });
  await user.save();
  await mongoose.model('TempUser').findByIdAndDelete(this._id);
};

module.exports = mongoose.model('TempUser', tempUserSchema);
