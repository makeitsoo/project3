import React from 'react';
import './App.css';

export default class StaticFooter extends React.Component {
    render() {
        return (
          <footer>
            <img class="NavButton" src="../assets/images/logit.png" width="100px" height="100px" alt="LogIt" />
            <img class="NavButton" src="../assets/images/history.png" width="100px" height="100px" alt="Workout History" />
            <img class="NavButton" src="../assets/images/charts.png" width="100px" height="100px" alt="Charts & Stats" />
            <img class="NavButton" src="../assets/images/logout.png" width="100px" height="100px" alt="Log Out" />
          </footer>
        );
    }
}
