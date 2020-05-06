const User = require('../../model/user');

module.exports = async function (userName, password) {
  try {
    const foundUser = await User.findOne({
      userName: userName,
    });
    try {
      return await foundUser.authenticate(password);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
