import React, { Component } from 'react';
import Week from './WeekContainer';
import Detail from './DetailContainer';
import LogItButton from './LogItButtonContainer';
import StatsButton from './StatsButtonContainer';
import Staticpage from './staticpage';
import { Switch, Route } from 'react-router';
import StaticFooter from './staticFooter';
import Home from './DetailContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Staticpage />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/stats" component={StatsButton}/>
          <Route path="/logit" component={LogItButton}/>
        </Switch>
        <StaticFooter />
      </div>
    );
  }
}

export default App;
