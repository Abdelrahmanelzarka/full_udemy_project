import React from 'react'
import './Card.css'

function Card({cardobject}) {
  return (

    <div className='card-container'>
        <a href={cardobject.link}>
        <div className='image-container'>
              <img src={cardobject.image} alt='' height='180' width='300'/>
            </div>
           <div className='card-title'>
           <h3> {cardobject.title}</h3>
           </div>
           </a>
            <div className='instructor'>
            {cardobject.instructor}
            </div>
            <div className='rate'>
                <div className='number'>
                <h3>{cardobject.rating}</h3>
                </div>
                <img src='https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg' alt='' width='100' height='50' />
                <p>({cardobject.students})</p>
            </div>
            <div className='cost'>
            <h3>&euro;{cardobject.price}</h3>
            </div>

        </div>
  )
}
export default Card