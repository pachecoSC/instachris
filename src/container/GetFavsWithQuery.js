import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_FAVORITES } from '../hooc/getFavorites'
import { ListOfFavs } from '../components/ListOfFavs'

export const GetFavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network"
  })
  if (error) return <h2>Internal Server Error</h2>
  if (loading) return ''
  const { favs } = (data != undefined)?data:[]

  return <ListOfFavs favs={favs} />
}

/*const RenderProp = () => {
  const { loading, data, error } = GetFavsWithQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
} */
