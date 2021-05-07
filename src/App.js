/* eslint-disable react/jsx-indent */

import React, { Fragment } from 'react'

import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'
// import { PhotoCard } from "./components/PhotoCard";
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <>
      <GlobalStyle />
      <div style={{ textAlign: 'center' }}>
        <Logo />
      </div>
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <>
            <ListOfCategories />
            <ListOfPhotoCard />
          </>}
    </>
  )
}
