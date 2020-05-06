const CREATE_USER = require('./actions/CreateUser');
const AUTHENTICATE = require('./actions/authenticateUser');
const ACTIVATE_USER = require('./actions/activateUser');
const PASSWORD_TOKEN = require('./actions/generatePasswordToken');
const CHANGE_USER_PASSWORD = require('./actions/changeUserPassword');

module.exports = {
  createUser: async (
    root,
    { firstName, lastName, userName, dob, gender, email, phone, password }
  ) => {
    return await CREATE_USER(
      firstName,
      lastName,
      userName,
      dob,
      gender,
      email,
      phone,
      password
    );
  },
  authenticateUser: async (root, { userName, password }) => {
    return await AUTHENTICATE(userName, password);
  },
  activateUser: async (root, { token }) => {
    return await ACTIVATE_USER(token);
  },
  generatePasswordToken: async (root, { email }) => {
    return await PASSWORD_TOKEN(email);
  },
  changeUserPassword: async (root, { token, password }) => {
    return await CHANGE_USER_PASSWORD(token, password);
  },
};
