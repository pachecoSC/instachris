import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0px;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()} //parametros {time:'5s'}
  box-shadow: 0 10px 14px rgba(0,0,0,.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`

export const Articulo = styled.article`
  min-height: 200px;
`

export const UnLike = styled(MdFavoriteBorder)`
  color: #ff277a;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`

export const Like = styled(MdFavorite)`
  color: #ff277a;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`
