import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import { useLoginMutation } from '../container/LoginMutation'
import { FormUser } from '../components/FormUser'

export const NotRegisteredUser = () => {
  const { loginMutation } = useLoginMutation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { activateAuth } = useContext(Context)

  const onSubmit = ({ email, password }) => {
    setLoading(true)
    const input = { email, password }
    const variables = { input }
    // registerMutation({ variables }).then(activateAuth)
    loginMutation({ variables }).then(
      ({ data }) => {
        // console.log(response)
        const { login } = data
        activateAuth(login)
        setLoading(false)
      },
      (error) => {
        setError(' ' + error)
        setLoading(false)
      }
    )
  }
  // Iniciar Sesión -- Registrarse
  // console.log('antes de llamar el formulario: ' + loading)
  return <FormUser disabled={loading} error={error} onSubmit={onSubmit} title='Iniciar Sesión' />
}
