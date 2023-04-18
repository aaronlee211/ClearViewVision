import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from './components/Contact.js';
import Reviews from './components/Reviews.js';
import Doctors from './components/Doctors.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          {/* Multiple Components in a route path can be concatenated in a fragment */}
          <Route path='/' element={<><Header/><Main/><Reviews /></>}/>
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
