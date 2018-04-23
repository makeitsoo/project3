import React, { Component } from 'react';
import Week from './WeekContainer';
import Detail from './DetailContainer';
import LogItButton from './LogItButtonContainer'
import StatsButton from './StatsButtonContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <LogItButton />
        <StatsButton />
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