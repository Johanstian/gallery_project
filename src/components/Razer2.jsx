import React from 'react'
import razer2 from '../assets/img/razer2.jpg'
import PropTypes from 'prop-types'

export const Razer2 = ({ className }) => {
  return (
    <img src={ razer2 } alt="Razer 2" className={className} />
  )
}

Razer2.proptypes = {
    className: PropTypes.string
}