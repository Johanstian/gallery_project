import React from 'react'
import razer3 from '../assets/img/razer3.jpg'
import PropTypes from 'prop-types'

export const Razer3 = ({ className }) => {
  return (
    <img src={ razer3 } alt="Razer 3" className={className} /> 
  )
}

Razer3.proptypes = {
    className: PropTypes.string
}