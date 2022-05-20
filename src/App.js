import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Culture from './pages/culture';


function App() {
  return (
   <Router>
     <Navbar />
     <Routes>
      <Route path='/'  exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/culture' component={Culture} />
     </Routes>
   </Router>
  );
}

export default App;
