import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      name
      email
      photo
      bio
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      photo
      bio
    }
  }
`;
