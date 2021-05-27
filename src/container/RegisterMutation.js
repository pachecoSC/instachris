// import React from 'react'
// import { Mutation } from ‘react-apollo’
import { useMutation } from '@apollo/client'
import { REGISTER } from '../hooc/register'

// export const RegisterMutation = ({ children }) => {
//   return <Mutation mutation={REGISTER}>{children}</Mutation>
// }

export const useRegisterMutation = () => {
  const [registerMutation] = useMutation(REGISTER)

  return { registerMutation }
}
