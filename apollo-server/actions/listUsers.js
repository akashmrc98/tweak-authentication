const User = require('../../model/user');

module.exports = async () => {
  return await User.find();
};
