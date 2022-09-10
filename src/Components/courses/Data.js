import React from 'react'
import Card from './Card'
import Block from './Block'
import Best from'./Best'

import 'C:/Users/abdel/my-app/src/App.css';



function Data (datadata) {

  console.log(datadata.datadata[0].title);
  

  return (
    <div className='courses' >
        <Block
      title={datadata.datadata[0].title}
      description1={datadata.datadata[0].description1}
      description2={datadata.datadata[0].description2}
      description3={datadata.datadata[0].description3}
     button={datadata.datadata[0].button}
     />

      <div className='cards'>
      <div class="besst">
     <Card
     cardobject={datadata.datadata[0].courses[0]}
     idd={datadata.datadata[0].courses[0].id}
     />
     <Best/>
     </div>
     
     <Card
     cardobject={datadata.datadata[0].courses[1]}
     idd={datadata.datadata[0].courses[1].id}
     />
     
     
     <Card
     cardobject={datadata.datadata[0].courses[2]}
     idd={datadata.datadata[0].courses[2].id}
     />
     <Card
     cardobject={datadata.datadata[0].courses[3]}
     idd={datadata.datadata[0].courses[3].id}
     />
     <Card
     cardobject={datadata.datadata[0].courses[4]}
     idd={datadata.datadata[0].courses[4].id}
     />
     </div>
    

    </div>
  )
}
export default Data
