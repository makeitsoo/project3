import React from 'react';
import GoogleButton from 'react-google-button'

export default class LogItButton extends React.Component {
  render() {
    return(
      	<GoogleButton
  			onClick={() => { console.log('Google button clicked') }}
		/>
    );
  }
}
