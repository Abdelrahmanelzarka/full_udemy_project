
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'

import { Routes , Route} from 'react-router-dom';
import {Navigate} from 'react-router';






function App() {
  return (
   <>
   
   <Routes>
   <Route path='*' element={<Page1/>}/>
   <Route path='Page2' element={<Page2/>}/>
   </Routes>
    
   </>
  )
}

export default App;
