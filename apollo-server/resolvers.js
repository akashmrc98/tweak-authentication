const { users } = require('./resolvers/queryResolvers');
const {
  createUser,
  activateUser,
  authenticateUser,
  generatePasswordToken,
  changeUserPassword,
} = require('./resolvers/mutationResolver');
const { Authenticate } = require('./resolvers/unionResolver');

module.exports = {
  Authenticate: Authenticate,
  Query: { users },
  Mutation: {
    createUser,
    activateUser,
    authenticateUser,
    generatePasswordToken,
    changeUserPassword,
  },
};
