import React, { useState } from 'react'
import Context from '../Context'
import { FormUser } from '../components/FormUser'
import { useRegisterMutation } from '../container/RegisterMutation'

// const activateAuth = () => {}
export const SingUp = () => {
  const { registerMutation } = useRegisterMutation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          setLoading(true)
          const input = { email, password }
          const variables = { input }
          // registerMutation({ variables }).then(activateAuth)
          registerMutation({ variables }).then(
            () => {
              activateAuth()
              setLoading(false)
            },
            (error) => {
              setError(' ' + error) // El usuario ya existe o hay algún problema.
              setLoading(false)
            }
          )
        }
        return <FormUser disabled={loading} error={error} onSubmit={onSubmit} title='Registrarse' />
      }}
    </Context.Consumer>
  )
}
