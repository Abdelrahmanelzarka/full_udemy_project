
import React, { useState, useEffect } from 'react';
import 'C:/Users/abdel/my-app/src/Components/page2.css';
import Content from './ReadMore';
import Review from './Review';
import Nav from './Nav'
import NestedList from './Sections'
import { useLocation } from "react-router-dom";
import { BsPatchExclamation} from 'react-icons/bs';
import { MdLanguage}from 'react-icons/md';
import {FaLanguage } from 'react-icons/fa';
import MediaCard from './MediaCard';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Page2 ()  {
   
    
    const [spinner, setSpinner] = useState(false); 
    const location = useLocation()
  const { myState } = location.state;
  
  console.log(myState);
  const [course, setcourse]= useState(null);

  useEffect(()=>{
    setSpinner(true);
      fetch(`http://localhost:2000/${myState.cardobject.id}`) 
      .then(res2=>{
          return res2.json();
      }).then(data2=>{
          setcourse(data2);
          setSpinner(false);
      })
  
  },[]);

  const [review, setreview]= useState(null);

  useEffect(()=>{
    setSpinner(true);
      fetch(`http://localhost:5000/${myState.cardobject.id}`) 
      .then(res2=>{
          return res2.json();
      }).then(data2=>{
          setreview(data2);
          setSpinner(false);
      })
  
  },[]);


if(spinner)
  return(<Box sx={{ display: 'flex' }}>
  <CircularProgress />
</Box>)
else
  return (
    < >
    
    <Nav/>
    
    <div style={{position:"absolute" , height:'3759px', marginTop:'50px',
    left: '1010px'}}>
   <MediaCard course={myState.cardobject} />
    </div>
    <div className='blackarea'>
        <div className='cntercontents'>
        <h1>{myState.cardobject.title}</h1>
        <h5>{myState.cardobject.headline}</h5>
        <div className='rrate'>
        <p style={{color:"blue"}}>{myState.cardobject.rating}</p>
         
        {
    myState.cardobject.rating<2 &&   <img className='stars' src="https://media.istockphoto.com/vectors/one-star-rating-illustration-vector-vector-id1169300344?k=20&m=1169300344&s=170667a&w=0&h=DU4rmRLYDXFXYS2JVYGdMA0AgMhtiqRKisJZXUlLFtQ=" style={{width : "120px" , height: "50px" , margin:"6px -10px -10px -10px"}} /> 
}
{
    (myState.cardobject.rating>=2 && myState.cardobject.rating<3)  && <img className='stars' src="https://image.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg" style={{width : "120px" , height: "50px" , margin:"6px -10px -10px -10px"}} /> 
}
{
    ((myState.cardobject.rating>=3) && (myState.cardobject.rating<4))  && <img className='stars' src="https://image.shutterstock.com/image-vector/three-star-rating-icon-isolated-260nw-1711884229.jpg" style={{width : "120px" , height: "50px" , margin:"6px -10px -10px -10px"}} /> 
}
{
    (myState.cardobject.rating>=4 && myState.cardobject.rating<5)  && <img className='stars' src="https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg" style={{width : "120px" , height: "50px" , margin:"1px -10px -10px -10px"}} /> 
}
{
    myState.cardobject.rating>=5  && <img className='stars' src="https://image.shutterstock.com/image-vector/five-stars-customer-product-rating-260nw-1894989967.jpg" style={{width : "120px" , height: "32px" , margin:"11px -5px -10px -10px"}} /> 
}
<p>{myState.cardobject.people} students</p>
        </div>
        <p className='helpful' >Created by
        { [...Array(myState.cardobject.instructors.length)].map((elementInArray, index) => ( 
         <p style={{marginTop:'1px', marginLeft:'2px',marginRight:'2px', textDecoration:'underline', color:' rgb(214, 219, 240)'}}>{myState.cardobject.instructors[index].name},</p> ))}
         
         </p>
        
        <div className='helpful'><BsPatchExclamation/><p> Last updated 9/2015</p>  <MdLanguage/> <p>English</p> <FaLanguage/><p>English</p> </div>
        </div>

    </div>
    <nav className="firstnav">
      <div className='fourwords'>
          <h4>Overview</h4>
          <h4>Curriculum</h4>
          <h4>Instructor</h4>
          <h4>Reviews</h4>
      </div>
    </nav>
 
    <div className='cntercontents'>
    <div >

     </div>

     <h2 style={{marginTop:"20px"}}> Course content</h2>
     <p>{ course && course.curriculum_context.data.sections.length} sections •{ course && course.curriculum_context.data.num_of_published_lectures} lectures •{ course && course.curriculum_context.data.estimated_content_length_text.substring(0,2)}h { course && course.curriculum_context.data.estimated_content_length_text.substring(3,5)}m total length</p>
     {course && [...Array(course.curriculum_context.data.sections.length)].map((elementInArray, index) => ( 

    <NestedList value={course.curriculum_context.data.sections[index]}/>

     )) }
     

     
     
     
     
     <h2 style={{marginTop:"20px"}}>Requirements</h2>
     <ul>
        <li>{ course && course.details.Requirements[0]}</li>
        <li>{ course && course.details.Requirements[1]}</li>
     </ul>
     <h2 style={{marginBottom: "-40px",marginTop:"10px"}} >Description</h2>

     {course && <Content script={course.details.description + "\n...\nWho this course is for:\n" + course.details.for_who }  />}

     <h2 style={{marginTop:"20px"}}>instructors</h2>
    { [...Array(myState.cardobject.instructors.length)].map((elementInArray, index) => ( 
        <>
   <h3 style={{textDecoration:"underline", color:"blue"}}>{myState.cardobject.instructors[index].name}</h3>
   <p style={{fontSize:"20px", color:"rgb(81, 72, 98)"}}>{myState.cardobject.instructors[index].jop}</p>
   <img src={myState.cardobject.instructors[index].image} style={{borderRadius: "50%", width:"100px"}}/>
   </>


 )) }


    <h2 style={{marginTop:"20px"}}>Reviews</h2>
     { review && <Review R={review.results[0]} />}
     { review && <Review R={review.results[1]} />}
     { review && <Review R={review.results[2]} />}
     { review && <Review R={review.results[3]} />}
     { review && <Review R={review.results[4]} />}
     { review && <Review R={review.results[5]} />}
     { review && <Review R={review.results[6]} />}


     </div>
 
 
     <div className='blackarea' style={{height:"400px"}} >
        <div style={{marginLeft:"20px", marginTop:"-30px", display:"flex", flexDirection:"row",justifyContent:"space-between", borderBottom:"2px solid #1c1d1f"}}>
        <h3 style={{display:"flex", flexDirection:"row"}}>Top companies choose <h4 style={{color:"rgb(154, 44, 212)" , marginTop:"1px"}}>Udemy Business</h4> to build in-demand career skills.</h3>
        <div style={{marginTop:"15px"}}>
        <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg'/>
        <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg'/>
        <img src='https://s.udemycdn.com/partner-logos/v4/box-light.svg'/>
        <img src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg'/>
        <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg'/>
        </div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{marginRight:"100px"}}>
                <p>Udemy business</p>
                <p>Teach on Udemy</p>
                <p>Get the app</p>
                <p>About us</p>
                <p>Contact us</p>
            </div>
            <div style={{marginRight:"100px"}}>
                <p>Careers</p>
                <p>Blog</p>
                <p>Help and Support</p>
                <p>Affiliate</p>
                <p>Investors</p>
            </div>
            <div style={{marginRight:"100px"}}>
                <p>Terms</p>
                <p>Privacy Policy</p>
                <p>Cookie settings</p>
                <p>Sitemap</p>
                <p>Accessibility statement</p>
            </div>

            
    </div>
    <button style={{border:"2px solid white",padding:"10px 38px 2px 2px", backgroundColor:"inherit", color:"white",position:"absolute",top:"4050px",  left:"1400px",display:"flex", flexDirection:"row" }}><MdLanguage/> <p style={{marginTop:"0px"}}>English</p></button>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg" width="99" height="34" style={{marginLeft:"40px",marginTop:"20px",filter:"invert(100%)"}}/>
    <p style={{position:"absolute",top:"4300px",  left:"1400px"}}>© 2022 Udemy, Inc.</p>
    </div>
    

    </>
  )
}

export default Page2
