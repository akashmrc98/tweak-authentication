const User = require('../../../model/users');

module.exports = async () => {
  return await User.find();
};
