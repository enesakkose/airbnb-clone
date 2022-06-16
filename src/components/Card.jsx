import React from 'react'
import './Card.scss'

function Card({src,title,description, price}) {
  return (
    <div className='card'>
        
            <img src={src} alt={title} className='card__img'/>
        
        <div className="card__info">
            <h4>{title}</h4>
            <p>{description}</p>
            <span>{price}</span>
        </div>
        
    </div>
  )
}

export default Card