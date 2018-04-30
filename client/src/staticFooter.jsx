import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';

export default class StaticFooter extends React.Component {
    render() {
        return (
          <footer>
                <img onClick={this.state.renderPage} id="b1" class="NavButton" src="../assets/images/logit.png" width="100px" height="100px" alt="LogIt" />
                <img onClick={this.state.renderPage} id="b2" class="NavButton" src="../assets/images/history.png" width="100px" height="100px" alt="Workout History" />
                <img onClick={this.state.renderPage} id="b3" class="NavButton" src="../assets/images/charts.png" width="100px" height="100px" alt="Charts & Stats" />
                <img onClick={this.state.renderPage} id="b4" class="NavButton" src="../assets/images/logout.png" width="100px" height="100px" alt="Log Out" />
          </footer>
        );
    }
}
