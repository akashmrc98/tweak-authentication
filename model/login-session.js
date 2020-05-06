const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSessionSchema = new Schema({
  userName: String,
  loginAt: Date,
  location: String,
  loginToken: String,
  logoutAt: Date,
});

loginSessionSchema.methods.updateLogout = function () {
  this.logoutAt = Date.now();
  return this.save();
};

module.exports = mongoose.model('LoginSession', loginSessionSchema);
