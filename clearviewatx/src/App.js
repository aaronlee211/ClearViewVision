import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Booking from './components/Booking.jsx';
import Home from './components/Home.jsx';
import About from './components/AboutPage/About.jsx';
import Services from './components/Services.jsx';
import ContactPage from './components/ContactPage.jsx';
import Disclaimer from './components/Disclaimer.jsx';
import PrivacyStatement from './components/PrivacyStatement.jsx';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="book" element={<Booking/>}/>
      <Route path="disclaimer" element={<Disclaimer />}/>
      <Route path="privacy-statement" element={<PrivacyStatement />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
