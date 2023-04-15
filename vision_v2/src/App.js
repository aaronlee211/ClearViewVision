import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from './components/Contact.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          {/* Multiple Components in a route path can be concatenated in a fragment */}
          <Route path='/' element={<><Header/><Main/></>}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
