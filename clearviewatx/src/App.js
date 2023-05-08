import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About';
import Services from './components/Services';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
