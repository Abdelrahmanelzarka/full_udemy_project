import React from 'react'
import Card from './Card'
import Block from './Block'
import Best from'./Best'

import 'C:/Users/abdel/my-app/src/App.css';



function Drawing (drawingdata) {

  console.log(drawingdata.drawingdata[0].title);
  

  return (
    <div className='courses' >
        <Block
      title={drawingdata.drawingdata[0].title}
      description1={drawingdata.drawingdata[0].description1}
      description2={drawingdata.drawingdata[0].description2}
      description3={drawingdata.drawingdata[0].description3}
     button={drawingdata.drawingdata[0].button}
     />

      <div className='cards'>
     <Card
     cardobject={drawingdata.drawingdata[0].courses[0]}
     idd={drawingdata.drawingdata[0].courses[0].id}
     />
     
     <Card
     cardobject={drawingdata.drawingdata[0].courses[1]}
     idd={drawingdata.drawingdata[0].courses[1].id}
     />
     
     
     <Card
     cardobject={drawingdata.drawingdata[0].courses[2]}
     idd={drawingdata.drawingdata[0].courses[2].id}
     />
     <Card
     cardobject={drawingdata.drawingdata[0].courses[3]}
     idd={drawingdata.drawingdata[0].courses[3].id}
     />
     <div class="besst">
     <Card
     cardobject={drawingdata.drawingdata[0].courses[4]}
     idd={drawingdata.drawingdata[0].courses[4].id}
     />
     <Best/>
     </div>
     </div>
    

    </div>
  )
}
export default Drawing