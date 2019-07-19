import gql from "graphql-tag";

export const signInUser = gql`
mutation($email: String!, $password: String!, $canExpired: Boolean) {
  signInUser(email:$email,password:$password, canExpired: $canExpired){
    user {
      id
      name
      email
    }
    token
  }
}`;
