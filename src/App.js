/* eslint-disable react/jsx-indent */

import React, { Fragment } from 'react'

import { GlobalStyle } from './styles/GlobalStyle'

import { Logo } from './components/Logo'
import { Detail } from './pages/detail'
import { Home } from './pages/home'

import { Router } from '@reach/router'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log(detailId)

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
      </Router>
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
