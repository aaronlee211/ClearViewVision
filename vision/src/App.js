import './App.css';
import Home from './components/Home.js'
import Nav from './components/Nav.js'
import Contact from './components/Contact.js'
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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
