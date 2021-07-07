import React from 'react'
import { Button, UnLike, Like } from './styles'
import PropTypes from 'prop-types'

export const FavButtons = ({ liked, likes, onClick }) => {
  const Icon = liked ? Like : UnLike
  // () => setLiked(!liked)
  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

FavButtons.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
