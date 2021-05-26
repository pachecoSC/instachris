import React from 'react'
import { Link, Nav, IconHome, IconFavorite, IconUser } from './styles'

export const NavBar = () => {
  const SIZE = '32px'

  return (
    <Nav>
      <Link to='/'><IconHome size={SIZE} /> </Link>
      <Link to='/favs'><IconFavorite size={SIZE} /> </Link>
      <Link to='/user'><IconUser size={SIZE} /> </Link>
    </Nav>
  )
}
