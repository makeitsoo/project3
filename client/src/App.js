import React, { Component } from 'react';
// import LogIt from './components/LogItContain/LogItContain';
import LogForm from './components/LogForm/LogForm';
import Stats from './StatsTableContainer';
//import GoogleLogin from './googleLogin';
import Staticpage from './staticpage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import StaticFooter from './staticFooter';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Staticpage />
          <Switch>
            <Route path="/logit" component={LogForm}/>
            <Route exact path="/" component={Stats}/>
          </Switch>
          <StaticFooter />
        </div>
      </Router>
    );
  }
}

export default App;

            // don't need this landing page with Passport authentication 
            // <Route exact path="/" component={GoogleLogin}/>

