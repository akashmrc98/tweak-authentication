const http = require('http');
const express = require('express');
const app = express();
const server = require('./apollo-server/apollo-server');
const database = require('./utils/db');
const cors = require('cors');

const { port } = require('./utils/config');

app.use(cors());

const httpServer = http.createServer(app);
server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer);
httpServer.listen(port, () => {
  database;
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  console.log(
    `Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`
  );
});
