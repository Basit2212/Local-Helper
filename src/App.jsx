import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './assets/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './assets/Pages/Sections/About';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import OurServices from './assets/Pages/Sections/OurServices';
import ContactUs from './assets/Pages/Sections/ContactUs';

function App() {
  return (
    <>
      <Router basename="/Local-Helper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<OurServices />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
