import React from 'react';

const style = {
  cursor: 'pointer',
}

export default class Day extends React.Component {
  render() {
    return (
      <div style={style} onClick={() => this.props.changeDay(this.props.day)} >
        Count: {this.props.count}
      </div>
    );
  }
}