import React from 'react';

export default class SaveButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.saveCal}>Save</button>
    );
  }
}