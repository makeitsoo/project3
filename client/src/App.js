import React, { Component } from 'react';
import Week from './WeekContainer';
import Detail from './DetailContainer';
import LogItButton from './LogItButtonContainer';
import StatsButton from './StatsButtonContainer';
import { Switch, Route } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/stats" component={StatsButton}/>
          <Route path="/logit" component={LogItButton}/>
        </Switch>

      </div>
    );
  }
}

export default App;








  

//////////////////
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Week />
//         <hr />
//         <Detail />
//         <LogItButton />
//         <StatsButton />
//       </div>
//     );
//   }
// }