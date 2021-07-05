// import React from 'react'
import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

import { Layout } from '../components/Layout'

// const User
export default () => {
  const { removeAuth } = useContext(Context)

  return (
    <Layout title='Usuario' subtitle='inicio de sesion autorizado'>
      {/* <h1>User</h1> */}
      <SubmitButton onClick={removeAuth}>cerrar sesion</SubmitButton>
    </Layout>
  )
}
