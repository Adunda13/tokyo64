import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages';
//import About from './pages/about';
//import Contact from './pages/contact';

function App() {
  return (
   <Router>
     <Navbar />
     <Routes>
      <Route path='/'  exact component={Home} />
     </Routes>
   </Router>
  );
}

export default App;
