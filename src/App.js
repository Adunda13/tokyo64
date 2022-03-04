import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

import About from './pages/about';
import Events from './pages/events';
import Art from './pages/art';
import Contact from './pages/contact';
import Immigrate from './pages/immigrate';
import Places from './pages/places';
import SignUp from './pages/signup';
import SignIn from './pages/signin';


function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/'  exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/events' component={Events} />
      <Route path='/art' component={Art} />
      <Route path='/immigrate' component={Immigrate} />
      <Route path='/places' component={Places} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/signin' component={SignIn} />
  
    </Switch>
    </Router>
  );
  }
  
  export default App;