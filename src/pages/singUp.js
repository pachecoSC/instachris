import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import { FormUser } from '../components/FormUser'
import { useRegisterMutation } from '../container/RegisterMutation'
import { navigate } from '@reach/router'

// const activateAuth = () => {}
export const SingUp = () => {
  const { registerMutation } = useRegisterMutation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { activateAuth } = useContext(Context)

  const onSubmit = ({ email, password }) => {
    setLoading(true)
    const input = { email, password }
    const variables = { input }
    // registerMutation({ variables }).then(activateAuth)
    registerMutation({ variables }).then(
      ({ data }) => {
        const { signup } = data
        activateAuth(signup)
        setLoading(false)
        // window.location.href = "/"
        navigate('/user')
      },
      (error) => {
        setError(' ' + error) // El usuario ya existe o hay algún problema.
        setLoading(false)
      }
    )
  }
  return <FormUser disabled={loading} error={error} onSubmit={onSubmit} title='Registrarse' />
}
