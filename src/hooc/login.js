import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
