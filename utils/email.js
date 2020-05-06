const { tweakEmail, tweakPassword } = require('./config');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports.sendMail = function (email, subject, text, html) {
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: tweakEmail,
        pass: tweakPassword,
      },
    })
  );
  transporter
    .sendMail({
      from: tweakEmail,
      to: email,
      subject: subject,
      text: text,
      html: html,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
