import { useMutation } from '@apollo/client'
import { likePhotos } from '../hooc/likePhotos'

export const useMutationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(likePhotos)
  return { mutation, mutationLoading, mutationError }
}

/* otro ejemplo de como podria funcionar
export const useMutationToogleLike = (id) => {
  const [toggleLike] = useMutation(likePhotos)
  return [toggleLike]
} */
