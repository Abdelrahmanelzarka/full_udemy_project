import React from 'react'
import Card from './Card'
import Block from './Block'
import Best from'./Best'

import 'C:/Users/abdel/my-app/src/App.css';



function Java (javadata) {

  console.log(javadata.javadata[0].title);
  

  return (
    <div className='courses' >
        <Block
      title={javadata.javadata[0].title}
      description1={javadata.javadata[0].description1}
      description2={javadata.javadata[0].description2}
      description3={javadata.javadata[0].description3}
     button={javadata.javadata[0].button}
     />

      <div className='cards'>
     <Card
     cardobject={javadata.javadata[0].courses[0]}
     idd={javadata.javadata[0].courses[0].id}
     />
     
     <Card
     cardobject={javadata.javadata[0].courses[1]}
     idd={javadata.javadata[0].courses[1].id}
     />
     
     
     <Card
     cardobject={javadata.javadata[0].courses[2]}
     idd={javadata.javadata[0].courses[2].id}
     />
     <div class="besst">
     <Card
     cardobject={javadata.javadata[0].courses[3]}
     idd={javadata.javadata[0].courses[3].id}
     />
     <Best/>
     </div>
     <Card
     cardobject={javadata.javadata[0].courses[4]}
     idd={javadata.javadata[0].courses[4].id}
     />
     </div>
    

    </div>
  )
}
export default Java