import React from 'react'
import Card from './Card'
import Block from './Block'
import Best from'./Best'

import 'C:/Users/abdel/my-app/src/App.css';



function Excel (exceldata) {

  console.log(exceldata.exceldata[0].title);
  

  return (
    <div className='courses' >
        <Block
      title={exceldata.exceldata[0].title}
      description1={exceldata.exceldata[0].description1}
      description2={exceldata.exceldata[0].description2}
      description3={exceldata.exceldata[0].description3}
     button={exceldata.exceldata[0].button}
     />

      <div className='cards'>
     <Card
     cardobject={exceldata.exceldata[0].courses[0]}
     idd={exceldata.exceldata[0].courses[0].id}
     />
     
     <Card
     cardobject={exceldata.exceldata[0].courses[1]}
     idd={exceldata.exceldata[0].courses[1].id}
     />
     
     <Card
     cardobject={exceldata.exceldata[0].courses[2]}
     idd={exceldata.exceldata[0].courses[2].id}
     />
     <div class="besst">
     <Card
     cardobject={exceldata.exceldata[0].courses[3]}
     idd={exceldata.exceldata[0].courses[3].id}
     />
     <Best/>
     </div>
     <Card
     cardobject={exceldata.exceldata[0].courses[4]}
     idd={exceldata.exceldata[0].courses[4].id}
     />
     </div>
    

    </div>
  )
}
export default Excel