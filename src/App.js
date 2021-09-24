import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Checkout from './Components/Checkout'
import Login from './Components/Pages/Login'


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = {LandingPage} />
          <Route path='/Checkout' exact component = {Checkout} />
          {/* <LandingPage/> */}
          {/* <Checkout/> */}
          <Login/>
       </Switch> 
      </Router>
    </div>
  );
}

export default App;
