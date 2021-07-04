import React from 'react'
import { GetFavsWithQuery } from '../container/GetFavsWithQuery'

// import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout title='favoritos' subtitle='muestra las imagenes favoritas'>
    {/* <Helmet>
      <title>InstaChris - favoritos</title>
      <meta name='description' content='muestra las imagenes favoritas' />
    </Helmet> */}
    <GetFavsWithQuery />
  </Layout>
)
