import React from 'react';
import Day from './Day';

export default class Week extends React.Component {
  render() {
    return (
      <div>
        {this.props.days.map((eventsThisDay, day) => 
          <Day key={day} day={day} changeDay={this.props.changeDay} count={eventsThisDay} />)}
      </div>
    );
  }
}