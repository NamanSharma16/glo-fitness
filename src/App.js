import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Checkout from './Components/Checkout.js'
import Login from './Components/Login.js'


function App() {
  return (
    <Router>
      <div>
        
          <Navbar/>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path = '/checkout' component={Checkout}/>
            <Route path = '/login' component={Login}/>
            <Route default component = {<div>Not Found</div>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
