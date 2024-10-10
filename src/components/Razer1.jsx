import React from 'react'
import razer1 from '../assets/img/razer1.jpg'
import PropTypes from 'prop-types'

export const Razer1 = ({ className }) => {
  return (
    <img src={ razer1 } alt="Razer1" className={className}/>
  )
}

Razer1.propTypes = {
    className: PropTypes.string
}