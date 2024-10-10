import React from 'react'
import razer4 from '../assets/img/razer4.jpg'
import PropTypes from 'prop-types'

export const Razer4 = ({ className }) => {
  return (
    <img src={ razer4 } alt="Razer 4" className={className} />
  )
}

Razer4.proptypes = {
    className: PropTypes.string
}