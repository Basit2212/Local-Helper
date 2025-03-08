import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './assets/Pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './assets/Pages/Sections/About';




function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/About' element={<About/>}></Route> */}
      </Routes>
    </Router>
    
      </>
  )
}

export default App
