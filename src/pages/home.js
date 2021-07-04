import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
// import { PhotoCard } from "./components/PhotoCard";
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { Helmet } from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title> InstaChris 😎 | App demo vitrina mascotas</title>
        <meta name='description' content='App desarrollada para aprender funcionamiento de react' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProvs, props) => {
  return prevProvs.id === props.id
})
