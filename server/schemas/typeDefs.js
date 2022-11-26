const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int!
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: Int!
    link: String
  }

  type Auth {
    token
   user: [User]
  }

  type Query {
    me: [User]
  }

  type Mutation {
    login(email: String!, password: String!): [Auth]
    addUser(username: String!, email: String!, password: String!): [User]
    removeBook(bookId: Int!): [User]
  }
`;

module.exports = typeDefs;
