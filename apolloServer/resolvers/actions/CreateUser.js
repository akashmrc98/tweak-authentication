const TempUser = require('../../../model/tempUser');
const encrypt = require('../../../utils/encrypt').encryptString;
const { sendMail } = require('../../../utils/email');

module.exports = async (
  firstName,
  lastName,
  userName,
  dob,
  gender,
  email,
  phone,
  password
) => {
  try {
    const token = encrypt(userName);
    const newUser = await new TempUser({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      dob: dob,
      gender: gender,
      email: email,
      phone: phone,
      password: encrypt(password),
      token: token,
      isActivate: false,
    });
    try {
      const subject = 'Activate account.';
      const text = 'Activate account by clicking the link below.';
      const html = `<html><body><button>
                <a href='http://localhost:8080/activate-user/${token}'>Activate</a>
              </button></body></html>`;
      await newUser.save();
      sendMail(email, subject, text, html);
      return { message: 'User Created.' };
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
