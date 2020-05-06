module.exports = {
  Authenticate: {
    __resolveType: (parent) => {
      if (parent.message) {
        return 'LoginError';
      }
      if (parent.token) {
        return 'LoginToken';
      }
      return null;
    },
  },
};
