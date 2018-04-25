import React from 'react';
import './App.css';

export default class StaticFooter extends React.Component {
    render() {
        return (

             <footer>
		        <img class="NavButton" src="logit.png" width="50px" height="50px" alt="LogIt">
		        <img class="NavButton" src="history.png" width="50px" height="50px" alt="Workout History">
		        <img class="NavButton" src="charts.png" width="50px" height="50px" alt="Charts & Stats">
		        <img class="NavButton" src="logout.png" width="50px" height="50px" alt="Log Out">
             </footer>
        );
    }
}