import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useQuery } from '@apollo/client'
import { getSinglePhoto } from '../hooc/singlePhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(getSinglePhoto, {
    variables: { id }
  }, {
    fetchPolicy: 'network-only'
  })
  if (error) return <h2>Internal Server Error</h2>
  if (loading) return ''
  // obtenemos el objeto photo y lo inicializamos vacio {}
  const { photo = {} } = data
  // devolvemos el elemento
  return <PhotoCard key={photo.id} {...photo} />
}
// otra forma
// export const PhotoCardWithQuery = ({ id }) => {
//   console.log(id)
//   const { loading, error, data } = useQuery(getSinglePhoto, {
//     variables: {
//       id: id
//     }
//   })
//   if (error) {
//     return <h2>Internal Server Error</h2>
//   }
//   if (loading) {
//     return <h2>Loading...</h2>
//   }

//   return <PhotoCard {...data.photo} />
// }
