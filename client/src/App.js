import React, { Component } from 'react';
import LogIt from './LogItContainer';
import Stats from './StatsTableContainer';
import GoogleLogin from './googleLogin';
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
            <Route path="/" component={GoogleLogin}/>
            <Route path="/stats" component={Stats}/>
            <Route path="/logit" component={LogIt}/>
          </Switch>
          <StaticFooter />
        </div>
      </Router>

    );
  }
}

export default App;
