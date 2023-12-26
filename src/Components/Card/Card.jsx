import React from 'react'
import './Card.css'

export const Card = ({pics, heading, detail}) => {
  return (
    <div className='card'>
        <img className='pics' src={pics} alt="" />
        <span className='heading'>{heading}</span>
        <span className='detail'>{detail}</span>
    </div>
  )
}
