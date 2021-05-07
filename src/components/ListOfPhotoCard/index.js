import React from 'react'
import { useQuery } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'
import { whitPhotos } from '../../hooc/withPhotos'

export const ListOfPhotoCard = ({ categoryId }) => {
  // en lugar de categoryId en los parametros ponemos props y utilizamos la siguiente linea.
  // const categoryId = props.categoryId

  const { loading, error, data } = useQuery(whitPhotos, {
    variables: { categoryId } // enviar dinamicamente.
  })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    // return <h2>Loading...</h2>
    return ''
    /* <List>
        <PhotoCard key={loading} />
      </List>
    ) */
  }

  return (
    <List>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}

      {/* {[1, 2, 3, 4, 5, 6, 7].map((id) => (
        <PhotoCard key={id} id={id} />
      ))} */}
    </List>
  )
}
