const TempUser = require('../../model/temp-user');

module.exports = async (token) => {
  try {
    const user = await TempUser.findOne({ token: token });
    if (user) {
      try {
        await user.activate();
        return await { message: 'Accounted activated.' };
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
