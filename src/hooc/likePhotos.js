import { gql } from '@apollo/client'

export const likePhotos = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
