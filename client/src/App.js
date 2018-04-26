import React, { Component } from 'react';
// import Week from './WeekContainer';
// import Detail from './DetailContainer';
import LogItButton from './LogItButtonContainer';
import StatsButton from './StatsButtonContainer';
import GoogleLogin from './googleLogin';
import Staticpage from './staticpage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import StaticFooter from './staticFooter';
import Home from './DetailContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Staticpage />
          <Switch>
            <Route path="/" component={GoogleLogin}/>
            <Route path="/stats" component={StatsButton}/>
            <Route path="/logit" component={LogItButton}/>
          </Switch>
          <StaticFooter />
        </div>
      </Router>

    );
  }
}

export default App;
