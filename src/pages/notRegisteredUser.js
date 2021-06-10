import React, { useState } from 'react'
import Context from '../Context'
import { useRegisterMutation } from '../container/RegisterMutation'
import { FormUser } from '../components/FormUser'

export const NotRegisteredUser = () => {
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
              setError('El usuario ya existe o hay algún problema.' + error)
              setLoading(false)
            }
          )
        }
        return <FormUser disabled={loading} error={error} onSubmit={onSubmit} title='Registrarse' />
      }}
    </Context.Consumer>
  )
}
