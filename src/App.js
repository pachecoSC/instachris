/* eslint-disable multiline-ternary */

import React, { Fragment } from 'react'

import { GlobalStyle } from './styles/GlobalStyle'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { Favs } from './pages/favs'
import { User } from './pages/user'
import { NotRegisteredUser } from './pages/notRegisteredUser'
import { SingUp } from './pages/singUp'

import { Router } from '@reach/router'

import Context from './Context'
// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ textAlign: 'center' }}>
        <Logo />
      </div>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        <SingUp path='/singUp' />
      </Router>
      {/* rutas protegidas con autenticacion de usuario */}
      {/* <UserLogged> */}
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </Router>
          )}
      </Context.Consumer>
      {/* </UserLogged> */}
      <NavBar />
    </>
  )
}
// ejemplo de trabajar con dos formas de ruteo una normal y otra con reach
/* {detailId
  ? <PhotoCardWithQuery id={detailId} />
  : <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
    </Router>}
*/
