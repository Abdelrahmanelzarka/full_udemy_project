import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Python from './courses/Python';
import  Excel  from './courses/Excel';
import  Web  from './courses/Web';
import  Java  from './courses/Java';
import   Data   from './courses/Data';
import  AWS  from './courses/AWS';
import  Drawing  from './courses/Drawing';
import { Navbar } from './Navbar';
import './app.css';
import Nav from './Nav';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from './courses/Card'

import { useLocation } from "react-router-dom";






function Page1 () {
  let f=1;

  const location = useLocation();
  console.log(location.search);
  console.log(location.search.substring(8,location.search.length))

    const [courses, setcourses]= useState(null);
    const [spinner, setSpinner] = useState(false); 

  useEffect(()=>{
    setSpinner(true);
      fetch('https://api.npoint.io/eb55692493c96edacac8')
      .then(res=>{
          return res.json();
      }).then(data=>{
         
          setcourses(data);
          setSpinner(false);
      })
  
  },[]);
    console.log(courses + "DDS");

    if(spinner)
    return(<>
    <h1>Loading...</h1>
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
  </>
  )
else
  return (



    <>
    <Nav/>
   
      
     <section>

<div className="alarm">
    <img src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg" alt="alarm"/>
</div>

<div className="textalarm">
    <h1>
        New to Udemy? Lucky
    </h1>
    <h1>you.</h1>
    <p>Courses start at &euro;169.99. Get your new-</p>
    <p>student offer before it expires.</p>
</div>

</section>

    <h2>  A board selection of courses</h2>
    <h4 className="phrase">  choose from 204,000 online video courses with new additions published every month</h4>
    <Navbar />

{
  location.search == '' ?
  
   <Routes>
  {courses && <Route path='/' element={<Python
    pythondata={courses.array[0]}
  />}/>}

  {
    courses &&
  <Route path='Excel' element={<Excel
  exceldata={courses.array[1]}
  />}/>
}
{

courses &&

  <Route path='Web' element={<Web
  webdata={courses.array[2]}
  />}/>
}
{

courses &&

  <Route path='Java' element={<Java
  javadata={courses.array[3]}
  />}/>

}
{

courses &&

   <Route path='Data' element={<Data
   datadata={courses.array[4]}
   />}/>
}
{

courses &&
   <Route path='AWS' element={<AWS
   awsdata={courses.array[5]}
   
   />}/>
}
{

courses &&

   <Route path='Drawing' element={<Drawing
   drawingdata={courses.array[6]}
   />}/>
}
   
   </Routes> 
   
   : 

   <div className='cardss' >
    {
      console.log(courses)
    }
    {

    

   courses && [...Array(courses.array.length)].map((elementInArray, index) => ( 
  

  [...Array(courses.array[index][0].courses.length)].map((elementInArray, i) => ( 
      courses.array[index][0].courses[i].title.search(location.search.substring(8,location.search.length))!=-1 ? 
      
      <div className='cards'>
      <Card
      cardobject={courses.array[index][0].courses[i]}
      idd={courses.array[index][0].courses[i].id}
      />
      {f=''}
      </div> : ''

   ))
   ))
  }
  {f && <h1>No Courses Found</h1>}
  </div> 
 
    
}

<section>
                <div class="top">

                
                <h2 class="topptext">Top catagories</h2>

                <div class="container text-center">
                    <div style={{display:"flex" , flexDirection:"row"}}>
                      <div class="col-lg"><img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"/><h5 class="toptext">Design</h5></div>
                      <div class="col-lg"><img src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"/><h5 class="toptext">Development</h5></div>
                      <div class="col-lg"><img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"/><h5 class="toptext">Marketing</h5></div>
                      <div class="col-lg"><img src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"/><h5 class="toptext">IT and Software</h5></div>
                    </div>
                    <div style={{display:"flex" , flexDirection:"row"}}>
                        <div class="col-lg"><img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"/><h5 class="toptext">Personal Development</h5></div>
                        <div class="col-lg"><img src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"/><h5 class="toptext">Business</h5></div>
                        <div class="col-lg"><img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"/><h5 class="toptext">Photography</h5></div>
                        <div class="col-lg"><img src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"/><h5 class="toptext">Music</h5></div>
                    </div>
                  </div>

                </div>
            </section>
   
   </>


  )
}
export default Page1
