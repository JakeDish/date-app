const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    photo: String
    bio: String
    interests: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
      bio: String!
      photo: String!
      interests: [String!]
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
