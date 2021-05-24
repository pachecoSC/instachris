import React, { Fragment } from 'react'

import { ImgWrapper, Img, Articulo } from './styles'
// import { MdFavoriteBorder,MdFavorite } from "react-icons/md";
import { FavButtons } from '../FavButtons/index'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()
  // console.log(liked)
  const handleFavClick = () => setLiked(!liked)

  return (
    <Articulo ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <FavButtons liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Articulo>
  )
}
