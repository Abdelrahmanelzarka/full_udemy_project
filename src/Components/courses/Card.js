import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'


function Card({cardobject,idd}) {



     //console.log(idd);
  return (
    <NavLink key={"Page2"}
    to="/Page2"
    state={{ myState: {cardobject} }}
     className="nav">
    <div className='card-container'>
        
        <div className='image-container'>
              <img src={cardobject.image} alt='' height='170' width='280'/>
            </div>
           <div className='card-title'>
           <h3> {cardobject.title}</h3>
           </div>
           </div>
            <div className='instructor'>
            {cardobject.instructors[0].name}
            </div>
            <div className='rate'>
                <div className='number'>
                <h3>{cardobject.rating}</h3>
                </div>
                <img src='https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg' alt='' width='100' height='50' />
                <p>({cardobject.people})</p>
            </div>
            <div className='cost'>
            <h3>&euro;{cardobject.price}</h3>
            </div>

       
        </NavLink>
  )
}
export default Card