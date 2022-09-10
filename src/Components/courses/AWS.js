import React from 'react'
import Card from './Card'
import Block from './Block'
import Best from'./Best'

import 'C:/Users/abdel/my-app/src/App.css';



function AWS (awsdata) {

  console.log(awsdata.awsdata[0].title);
  

  return (
    <div className='courses' >
        <Block
      title={awsdata.awsdata[0].title}
      description1={awsdata.awsdata[0].description1}
      description2={awsdata.awsdata[0].description2}
      description3={awsdata.awsdata[0].description3}
     button={awsdata.awsdata[0].button}
     />

      <div className='cards'>
     <Card
     cardobject={awsdata.awsdata[0].courses[0]}
     idd={awsdata.awsdata[0].courses[0].id}
     />
     <div class="besst">
     <Card
     cardobject={awsdata.awsdata[0].courses[1]}
     idd={awsdata.awsdata[0].courses[0].id}
     />
     <Best/>
     </div>
     <Card
     cardobject={awsdata.awsdata[0].courses[2]}
     idd={awsdata.awsdata[0].courses[0].id}
     />
     <Card
     cardobject={awsdata.awsdata[0].courses[3]}
     idd={awsdata.awsdata[0].courses[0].id}
     />
     <Card
     cardobject={awsdata.awsdata[0].courses[4]}
     idd={awsdata.awsdata[0].courses[0].id}
     />
     </div>
    

    </div>
  )
}
export default AWS
