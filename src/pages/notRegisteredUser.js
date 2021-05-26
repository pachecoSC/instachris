import React from 'react'
import Context from '../Context'

export const NotRegisteredUser = () => (
  // <h1>NotRegisteredUser</h1>
  <Context.Consumer>
    {
      // dentro del consumer espera una render prop == una funcion que tiene que recibe parametros y renderiza algo
      ({ isAuth, activateAuth }) => {
        // el elemento a rederizar
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesion</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
