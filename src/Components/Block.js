import React from 'react'
import './Card.css'

function Block({title,description1,description2,description3,button}) {
  return (
    <div>
       <h2 className='description'>{title}</h2>
       <p className='descriptionp'>{description1}</p>
       <p className='descriptionp'>{description2}</p>
       <p className='descriptionp'>{description3}</p>
       <button className='button'>{button}</button>
    </div>
  )
}
export default Block
