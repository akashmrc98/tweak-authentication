const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSession = require('./login-session');

const encrypt = require('../utils/encrypt').encryptString;
const generateToken = require('../utils/encrypt').generateSessionToken;

const userSchema = new Schema({
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
  image_url: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
    expires: '2h',
  },
  salt: String,
  loginSession: [{ type: Schema.ObjectId, ref: 'LoginSession' }],
});

userSchema.methods.generatePasswordToken = async function () {
  this.token = encrypt(this.userName);
  this.save();
  return this.token;
};

userSchema.methods.changePassword = async function (password) {
  this.password = encrypt(password);
  this.token = null;
  return this.save();
};

userSchema.methods.authenticate = async function (password) {
  if (encrypt(password) === this.password) {
    var token = {
      userName: this.userName,
      email: this.email,
      phone: this.phone,
      loginAt: Date.now(),
    };
    token = generateToken(token);
    const createSession = await new LoginSession({
      userName: this.userName,
      loginAt: Date.now(),
      location: '',
      loginToken: token,
    });
    var session = await createSession.save();
    await this.loginSession.push(session);
    await this.save();
    return { token: token };
  } else {
    return await { message: 'Invalid Password!' };
  }
};

module.exports = mongoose.model('User', userSchema);
