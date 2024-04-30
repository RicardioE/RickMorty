import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <article className='location'>
        
        <h2 className='location__name'>{location?.name}</h2>
        <ul className="location__list">
            <li className='location__item'><span className='location__label'>Tipo:</span>{location?.type}</li>
            <li className='location__item'><span className='location__label'>Dimensión:</span>{location?.dimension}</li>
            <li className='location__item'><span className='location__label'>población:</span>{location?.residents.length}</li>
        </ul>
    </article>
    
  )
}

export default LocationInfo