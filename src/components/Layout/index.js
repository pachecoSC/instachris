import React from 'react'
import { Helmet } from 'react-helmet'

import { Div, Title, Subtitle } from './styles'
import PropTypes from 'prop-types'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | InstaChris 😎 </title>}
        {subtitle && <meta name='descripcion' content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node
}
