import React, { Component } from 'react';
import Week from './WeekContainer';
import Detail from './DetailContainer';
import SaveButton from './SaveButtonContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Week />
        <hr />
        <Detail />
        <SaveButton />
      </div>
    );
  }
}

export default App;
