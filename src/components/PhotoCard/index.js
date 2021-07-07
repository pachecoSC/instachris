import React from 'react'

import { ImgWrapper, Img, Articulo } from './styles'
// import { MdFavoriteBorder,MdFavorite } from "react-icons/md";
import { FavButtons } from '../FavButtons/index'
// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
// import { useMutationToogleLike } from '../../container/ToggleLikeMutation'
import { useMutationToogleLike } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

import PropTypes from 'prop-types'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)
  // console.log(liked)
  const [show, ref] = useNearScreen()

  const { mutation } = useMutationToogleLike() //, mutationLoading, mutationError
  // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })
  // const handleFavClick = () => setLiked(!liked)
  const handleFavClick = () => {
    // !liked &&
    mutation({ // para que ejecute solo cuando da like no cada vez que da click al boton.
      variables: {
        input: { id }
      }
    })
    // setLiked(!liked)
  }

  return (
    <Articulo ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButtons liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Articulo>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
