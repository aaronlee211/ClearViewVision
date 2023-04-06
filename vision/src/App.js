import './App.css';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Doctors from './components/Doctors.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='doctors' element={<Doctors />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
