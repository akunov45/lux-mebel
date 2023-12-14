// import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Card.scss'

const Card = ({image, name, price, category, id}) => {
  const navigate = useNavigate()
  const imageUrl = image && image.data.attributes.url ? image.data.attributes.url : ""
  
  return (
    <div className='card' onClick={() => navigate(`/product/${id}`)}>
      <div className="card-img">
        <div>
          <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.29442 8.54442L9.75 16L17.2056 8.54442C18.0344 7.71562 18.5 6.59152 18.5 5.41942C18.5 2.97864 16.5214 1 14.0806 1C12.9085 1 11.7844 1.46562 10.9556 2.29442L9.75 3.5L8.54442 2.29442C7.71562 1.46562 6.59152 1 5.41942 1C2.97864 1 1 2.97864 1 5.41942C1 6.59152 1.46561 7.71561 2.29442 8.54442Z"
              stroke="black" strokeLinejoin="round"/>
          </svg>
        </div>
        <img src={imageUrl} alt=""/>
      </div>
      <div className="card-desc">
        <h4>{name}</h4>
        <h6>{category}</h6>
        <div className="card-desc-price">
          {price}$
        </div>
      
      </div>
    
    </div>
  )
}

export default Card