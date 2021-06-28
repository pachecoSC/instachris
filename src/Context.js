import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  // const [isAuth, setIsAuth] = useState(false)
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: (token) => {
      window.sessionStorage.setItem('token', token)
      setIsAuth(true)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
      // client.resetStore()
      __APOLLO_CLIENT__.resetStore()
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

// export default Context
export default {
  Provider,
  Consumer: Context.Consumer
}
