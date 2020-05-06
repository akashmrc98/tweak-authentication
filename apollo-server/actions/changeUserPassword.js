const User = require('../../model/user');

module.exports = async (token, password) => {
  const user = await User.findOne({ token: token });
  await user.changePassword(password);
  return { message: 'password changed.' };
};
