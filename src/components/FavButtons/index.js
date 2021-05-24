import React from 'react'
import { Button, UnLike, Like } from './styles'

export const FavButtons = ({ liked, likes, onClick }) => {
  const Icon = liked ? Like : UnLike
  // () => setLiked(!liked)
  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
