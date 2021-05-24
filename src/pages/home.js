import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
// import { PhotoCard } from "./components/PhotoCard";
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
