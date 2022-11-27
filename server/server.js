const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

//updated auth middleware function to work with GraphQL API
const { authMiddleware } = require("./utils/auth");

//import ApolloServer class

const { ApolloServer } = require("apollo-server-express");

// Importing the two parts of a GraphQL schema
// is this correct path?

const { typeDefs, resolvers } = require("./schemas");
const app = express();

//updated auth middleware function to work with GraphQL API

const PORT = process.env.PORT || 3002;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//creating new instance of Apollo server with graphSQL Schema

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Calling the async function to start the server
startApolloServer(typeDefs, resolvers);

app.use(routes);
