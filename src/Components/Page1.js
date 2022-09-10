import React, { useState, useEffect } from 'react';
import {Navigate, Routes, Route } from 'react-router-dom';
import Python from './courses/Python';
import  Excel  from './courses/Excel';
import  Web  from './courses/Web';
import  Java  from './courses/Java';
import   Data   from './courses/Data';
import  AWS  from './courses/AWS';
import  Drawing  from './courses/Drawing';
import { Navbar } from './Navbar';
import 'C:/Users/abdel/my-app/src/App.css';
import Nav from './Nav';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';





function Page1 () {

    const [courses, setcourses]= useState(null);
    const [spinner, setSpinner] = useState(false); 

  useEffect(()=>{
    setSpinner(true);
      fetch('http://localhost:8000/array')
      .then(res=>{
          return res.json();
      }).then(data=>{
         
          setcourses(data);
          setSpinner(false);
      })
  
  },[]);
    //console.log();

if(spinner)
    return(<Box sx={{ display: 'flex' }}>
      <CircularProgress />
          </Box>)
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

   <Routes>
  {courses && <Route path='/' element={<Python
    pythondata={courses[0]}
  />}/>}

  {
    courses &&
  <Route path='Excel' element={<Excel
  exceldata={courses[1]}
  />}/>
}
{

courses &&

  <Route path='Web' element={<Web
  webdata={courses[2]}
  />}/>
}
{

courses &&

  <Route path='Java' element={<Java
  javadata={courses[3]}
  />}/>

}
{

courses &&

   <Route path='Data' element={<Data
   datadata={courses[4]}
   />}/>
}
{

courses &&
   <Route path='AWS' element={<AWS
   awsdata={courses[5]}
   
   />}/>
}
{

courses &&

   <Route path='Drawing' element={<Drawing
   drawingdata={courses[6]}
   />}/>
}
   
  
   

   
   </Routes>
   
   </>


  )
}
export default Page1
