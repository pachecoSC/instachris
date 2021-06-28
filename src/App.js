/* eslint-disable multiline-ternary */

import React, { useContext } from 'react'

import { GlobalStyle } from './styles/GlobalStyle'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { Favs } from './pages/favs'
import { User } from './pages/user'
import { NotRegisteredUser } from './pages/notRegisteredUser'
import { SingUp } from './pages/singUp'
import { NotFound } from './pages/notFound'

import { Router, Redirect } from '@reach/router'

import { Context } from './Context'
// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <div style={{ textAlign: 'center' }}>
        <Logo />
      </div>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        <SingUp path='/singUp' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

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
