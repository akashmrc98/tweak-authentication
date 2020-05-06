const User = require('../../model/user');
const { sendMail } = require('../../utils/email');

module.exports = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    const token = await user.generatePasswordToken();
    const subject = 'Password resetting form.';
    const text = 'Reset the account password by clicking the link below.';
    const html = `<html><body><button>
                <a href='http://localhost:8080/change-password/${token}'>Change password</a>
              </button></body></html>`;
    sendMail(email, subject, text, html);
    return { message: 'Password token generated.' };
  } catch (error) {
    console.log(error);
  }
};
