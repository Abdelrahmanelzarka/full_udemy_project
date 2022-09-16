import React from 'react'
import Card from './Card'
import Block from './Block'
import Best from'./Best'

import './appcourses.css';



function Web (webdata) {

  console.log(webdata.webdata[0].title);
  

  return (
    <div className='courses' >
        <Block
      title={webdata.webdata[0].title}
      description1={webdata.webdata[0].description1}
      description2={webdata.webdata[0].description2}
      description3={webdata.webdata[0].description3}
     button={webdata.webdata[0].button}
     />

      <div className='cards'>
     <Card
     cardobject={webdata.webdata[0].courses[0]}
     idd={webdata.webdata[0].courses[0].id}
     />
     <div class="besst">
     <Card
     cardobject={webdata.webdata[0].courses[1]}
     idd={webdata.webdata[0].courses[1].id}
     />
     <Best/>
     </div>
     <Card
     cardobject={webdata.webdata[0].courses[2]}
     idd={webdata.webdata[0].courses[2].id}
     />
     <Card
     cardobject={webdata.webdata[0].courses[3]}
     idd={webdata.webdata[0].courses[3].id}
     />
     <Card
     cardobject={webdata.webdata[0].courses[4]}
     idd={webdata.webdata[0].courses[4].id}
     />
     </div>
    

    </div>
  )
}
export default Web