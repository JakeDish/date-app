import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register(
    $name: String!
    $email: String!
    $password: String!
    $bio: String!
    $photo: String!
  ) {
    register(
      name: $name
      email: $email
      password: $password
      bio: $bio
      photo: $photo
    ) {
      token
      user {
        _id
        name
        email
        bio
        photo
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;
