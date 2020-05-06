const { gql } = require('apollo-server-express');
const definitionType = require('./types/definitionType');
const MutationType = require('./types/mutationType');
const QueryType = require('./types/queryType');
const Union = require('./types/unionType');

module.exports = gql`
  ${definitionType}
  ${QueryType}
  ${MutationType}
  ${Union}
`;
