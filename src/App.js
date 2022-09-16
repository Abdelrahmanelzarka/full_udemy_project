
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Search from "./Components/Search"
import { Routes , Route} from 'react-router-dom';







function App() {
  return (
   <>
   
   <Routes>
   <Route path='*' element={<Page1/>}/>
   <Route path='Page2' element={<Page2/>}/>
   <Route path="search" element={<Search />} />
   </Routes>
    
   </>
  )
}

export default App;
