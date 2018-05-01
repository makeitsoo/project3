import React, { Component } from 'react';
import LogForm from './components/LogForm/LogForm';
import Stats from './StatsTableContainer';
//import GoogleLogin from './googleLogin';
import Staticpage from './staticpage';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import StaticFooter from './staticFooter';
import './App.css';

class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    //  make axios request to  /api/current_user
    //  set the state of user to whatever the return value is
    //

    axios.get('/api/current_user')
      .then(response => {
        console.log(response)
        //Possibly a conditional render here.
      })

  }
  render() {
    //test to see if response can be obtained here
    // set conditional render based on if the state = null, undefined,
    //  if true, show login
    // else show stats
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
