import React from 'react'
import './page2.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";


function Review  (R) {

  console.log(R);
  return (
   <>
   <div className='wholeReview'>
 <img src={R.R.user.image_50x50} style={{width : "45px" , height: "45px"}}  />
 <div className='nxtToimg'>
    <h3>{R.R.user.public_display_name}</h3>
   <div className='ratte'>

{
    R.R.rating<2 &&   <img src="https://media.istockphoto.com/vectors/one-star-rating-illustration-vector-vector-id1169300344?k=20&m=1169300344&s=170667a&w=0&h=DU4rmRLYDXFXYS2JVYGdMA0AgMhtiqRKisJZXUlLFtQ=" style={{width : "120px" , height: "50px" , margin:"6px -10px -10px -10px"}} /> 
}
{
    (R.R.rating>=2 && R.R.rating<3)  && <img src="https://image.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg" style={{width : "120px" , height: "50px" , margin:"6px -10px -10px -10px"}} /> 
}
{
    ((R.R.rating>=3) && (R.R.rating<4))  && <img src="https://image.shutterstock.com/image-vector/three-star-rating-icon-isolated-260nw-1711884229.jpg" style={{width : "120px" , height: "50px" , margin:"6px -10px -10px -10px"}} /> 
}
{
    (R.R.rating>=4 && R.R.rating<5)  && <img src="https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg" style={{width : "120px" , height: "50px" , margin:"1px -10px -10px -10px"}} /> 
}
{
    R.R.rating>=5  && <img src="https://image.shutterstock.com/image-vector/five-stars-customer-product-rating-260nw-1894989967.jpg" style={{width : "120px" , height: "32px" , margin:"11px -5px -10px -10px"}} /> 
}


    <p>{R.R.created_formatted_with_time_since}</p>
   </div>
   <p>{R.R.content}</p>
   <div className="helpful">
   <p style={{marginTop:"-5px"}}>Was this review helpful?</p>
   <AiOutlineDislike/> <AiOutlineLike/>
   </div>


 </div>



   </div>
   </>
  )
}
export default Review;
