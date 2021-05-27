import { gql } from '@apollo/client'

export const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
