import React from 'react'
import { Link } from 'react-router-dom'
import { Razer1 } from './Razer1'
import { Razer2 } from './Razer2'
import { Razer3 } from './Razer3'
import { Razer4 } from './Razer4'

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
        <Link to='/razer1' className='links'>
            <figure className='thumbnail-image-size'>
                <Razer1 />
                <figcaption>Razer 1</figcaption>
            </figure>
        </Link>

        <Link to='/razer2' className='links'>
            <figure className='thumbnail-image-size'>
                <Razer2 />
                <figcaption>Razer 2</figcaption>
            </figure>
        </Link>

        <Link to='/razer3' className='links'>
            <figure className='thumbnail-image-size'>
                <Razer3 />
                <figcaption>Razer 3</figcaption>
            </figure>
        </Link>


        <Link to='/razer4' className='links'>
            <figure className='thumbnail-image-size'>
                <Razer4 />
                <figcaption>Razer 4</figcaption>
            </figure>
        </Link>


    </div>
  )
}
