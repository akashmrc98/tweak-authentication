const mongoose = require('mongoose');
const { dbUri } = require('./config');

module.exports = mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log('Connection to database established!');
  })
  .catch((err) => {
    console.log('Connection failed!');
    console.log(err);
  });
