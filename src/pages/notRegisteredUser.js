import React from 'react'
import Context from '../Context'

import { FormUser } from '../components/FormUser'

export const NotRegisteredUser = () => (
  // <h1>NotRegisteredUser</h1>
  <Context.Consumer>
    {
      // dentro del consumer espera una render prop == una funcion que tiene que recibe parametros y renderiza algo
      ({ isAuth, activateAuth }) => {
        // el elemento a rederizar
        return <FormUser onSubmit={activateAuth} title='Iniciar Sesión' />
        // (
        //   <FormUser onSubmit={activateAuth}>
        //     <button>Iniciar sesion</button>
        //   </FormUser>
        // )
      }
    }
  </Context.Consumer>
)
