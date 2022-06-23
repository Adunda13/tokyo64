import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Top from './components/Footer/Top.js';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Culture from './pages/culture';
import Events from './pages/events';
import Immigrate from './pages/immigrate';
import Places from './pages/places';


function App() {
  return (
  <Router>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} exact />      
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/culture' element={<Culture/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/immigrate' element={<Immigrate/>} />
      <Route path='/places' element={<Places/>} />



     </Routes>
     <Top/>
   </Router>
  );
}

export default App;
