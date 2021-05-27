import React from 'react'
import Context from '../Context'
import { FormUser } from '../components/FormUser'
import { useRegisterMutation } from '../container/RegisterMutation'

// const activateAuth = () => {}
export const SingUp = () => {
  const { registerMutation } = useRegisterMutation()

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password }
          const variables = { input }
          registerMutation({ variables }).then(activateAuth)
          // console.log(activateAuth)
          // pendiente redireccionar a usuario o llevar este codigo para notRegisteredUser
        }
        return <FormUser onSubmit={onSubmit} title='Registrarse' />
      }}
    </Context.Consumer>
  )
}
