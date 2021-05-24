import React from 'react'
// import { Link } from '@reach/router'

import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Detail = ({ detailId }) => {
  return (
    <PhotoCardWithQuery id={detailId} />
  )
}
