import React, { useContext, Suspense } from 'react'

import { GlobalStyle } from './styles/GlobalStyle'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/home'
// import { Detail } from './pages/detail'
// import { Favs } from './pages/favs'
// import { User } from './pages/user'
// import { NotRegisteredUser } from './pages/notRegisteredUser'
// import { SingUp } from './pages/singUp'
// import { NotFound } from './pages/notFound'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'
// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }
// lazy es para que no se carguen todas las paginas desde el inicio solo cuando es necesario.
const Favs = React.lazy(() => import('./pages/favs'))
const User = React.lazy(() => import('./pages/user'))
const SingUp = React.lazy(() => import('./pages/singUp'))
const NotRegisteredUser = React.lazy(() => import('./pages/notRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/notFound'))
const Detail = React.lazy(() => import('./pages/detail'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
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
