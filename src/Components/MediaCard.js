import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'C:/Users/abdel/my-app/src/Components/page2.css';
import { MdSmartDisplay}from 'react-icons/md';
import { RiFilePaperLine}from 'react-icons/ri';
import { BiDownload, BiMobileAlt,BiTrophy,BiPlayCircle}from 'react-icons/bi';
import { CgInfinity}from 'react-icons/cg';

export default function MediaCard(course ) {

  return (
    <>
    
    <Card sx={{ maxWidth: 360 }} className='card'>
        
      <CardMedia
        component="img"
        height="200"
        style={{margin:"1px"   , width:"99.5%", filter: "brightness(50%)", position:'relavent'
    }}
        image={course.course.image}
        alt="/"
      />
      <h3 style={{position:'absolute' , top:'140px',left:"88px", color:"white"}}>Preview this Course</h3>
      <img src='https://cdn-icons-png.flaticon.com/512/0/375.png' style={{position:'absolute' , top:'68px',left:"135px", height:'70px', width:'70px' ,cursor:"pointer"}}/>
      
      <CardContent>
            <h1>
        E£{course.course.price}
        </h1>

        <Button style={{backgroundColor:"rgb(154, 44, 212)" ,height:"50px", width:"100%" , marginBottom:"10px", fontWeight:"bold", borderRadius:"0px"}} variant="contained" disableElevation >
  Add to cart
</Button>

<Button style={{backgroundColor:"white" , width:"100%" , height:"50px", marginBottom:"5px" , color:"black" , fontWeight:"bold",  border: "0.5px solid black" , borderRadius:"0px"}} variant="contained" disableElevation>
  Buy now
</Button>

        <h4>This course includes:</h4>
        <Typography variant="body2" color="text.secondary">
         <div className='helpful'>
         <MdSmartDisplay/>
         14 hours on-demand video
            </div>
            <div className='helpful'>
         <RiFilePaperLine/>
         1 article
            </div>
            <div className='helpful'>
         <BiDownload/>
         3 downloadable resources
            </div>
            <div className='helpful'>
         <CgInfinity/>
         Full lifetime access
            </div>
            <div className='helpful'>
         <BiMobileAlt/>
         Access on mobile and TV
            </div>
            <div className='helpful'>
         <BiTrophy/>
         Certificate of completion
            </div>





        </Typography>
      </CardContent>
      <CardActions style={{borderBottom:'0.5px solid black' , marginBottom:'3px'}}>
        <Button size="small" style={{textDecoration:'underline', fontWeight:"800", color:"black" , fontSize:'11px'}}>Share</Button>
        <Button size="small" style={{textDecoration:'underline', fontWeight:"800", color:"black", fontSize:'11px'}}>Gift this course</Button>
        <Button size="small" style={{textDecoration:'underline', fontWeight:"800" , color:"black", fontSize:'11px'}}>Apply Coupon</Button>
      </CardActions>

      <h3>Training 5 or more people?</h3>
      <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
      <Button style={{backgroundColor:"white" , width:"85%" , height:"50px", marginBottom:"20px", marginLeft:'25px' , color:"black" , fontWeight:"bold",  border: "0.5px solid black" , borderRadius:"0px"}} variant="contained" disableElevation>
  Try udemy Business
</Button>

    </Card>
    </>
  );
}