import { gql } from '@apollo/client'

export const likePhotos = gql`
  mutation likePhoto($input: LikePhoto!){
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
