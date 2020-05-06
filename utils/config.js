require('dotenv').config();

module.exports = {
  dbUri: process.env.DB_URI,
  passowordKey: process.env.PASSWORD_KEY,
  sessionKey: process.env.SESSION_KEY,
  port: process.env.PORT,
  tweakEmail: process.env.EMAIL,
  tweakPassword: process.env.EMAIL_PASSWORD,
};
