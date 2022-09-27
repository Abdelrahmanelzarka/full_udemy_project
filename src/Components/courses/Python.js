import React from 'react'
import Card from './Card'
import Block from './Block'
import Best from'./Best'

import './appcourses.css';



function Python (pythondata) {

  console.log(pythondata.pythondata[0].title);
  

  return (
    <div className='courses' >
        <Block
      title={pythondata.pythondata[0].title}
      description1={pythondata.pythondata[0].description1}
      description2={pythondata.pythondata[0].description2}
      description3={pythondata.pythondata[0].description3}
     button={pythondata.pythondata[0].button}
     />

  
  
      <div className='cards'>
     <Card
     cardobject={pythondata.pythondata[0].courses[0]}
     idd={pythondata.pythondata[0].courses[0].id}
     />
     <div className="besst">
     <Card
     cardobject={pythondata.pythondata[0].courses[1]}
     idd={pythondata.pythondata[0].courses[1].id}
     />
     <Best/>
     </div>
     <Card
     cardobject={pythondata.pythondata[0].courses[2]}
     idd={pythondata.pythondata[0].courses[2].id}
     />
     <Card
     cardobject={pythondata.pythondata[0].courses[6]}
     idd={pythondata.pythondata[0].courses[6].id}
     />
     <Card
     cardobject={pythondata.pythondata[0].courses[4]}
     idd={pythondata.pythondata[0].courses[4].id}
     />
     </div>

     

     
    
    

    </div>
  )
}
export default Python