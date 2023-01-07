import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
function App() {
  return (
    <div >
     
      <Router>
       <Link to='/file1' >file1</Link>
       <Link to="/file2">file2</Link>
       <Link to="/file3">file3</Link>
      
       <Routes>
        <Route path='/file1' element={<Page1/>}/>
        <Route path='/file2' element={<Page2/>}/>
        <Route path='/file3' element={<Page3/>}/>
       </Routes> 
     </Router>  
    
    </div>
  );
}

export default App;
