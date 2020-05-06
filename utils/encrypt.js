const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { passowordKey, sessionKey } = require('./config');

module.exports.generateSessionToken = function (user) {
  return jwt.sign({ user: user }, sessionKey, { expiresIn: '1h' });
};

module.exports.verifySessionToken = async function (token) {
  try {
    return await jwt.verify(token, sessionKey);
  } catch (error) {
    console.log(error);
  }
};

module.exports.encryptString = function (string) {
  const encrypted = crypto
    .pbkdf2Sync(string, passowordKey, 1000, 64, `sha512`)
    .toString(`hex`);
  return encrypted;
};
