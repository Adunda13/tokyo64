import './App.scss';
import Navbar from './components/Navbar';
import Top from './components/Footer/Top.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Culture from './pages/culture';
import Contact from './pages/contact';
import Immigrate from './pages/immigrate';
import Places from './pages/places';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Services from './pages/services'


function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/'  exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/events' component={Events} />
      <Route path='/culture' component={Culture} />
      <Route path='/immigrate' component={Immigrate} />
      <Route path='/places' component={Places} />
      <Route path='/services' component={Services}/>
      <Route path='/sign-up' component={SignUp} />
      <Route path='/signin' component={SignIn} />  
    </Switch>
    <Top/>
    </Router>
  );
  }
  
  export default App;