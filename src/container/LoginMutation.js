import { useMutation } from '@apollo/client'
import { LOGIN } from '../hooc/login'

export const useLoginMutation = () => {
  const [loginMutation] = useMutation(LOGIN)

  return { loginMutation }
}
