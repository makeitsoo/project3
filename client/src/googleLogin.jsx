import React from 'react';
import GoogleLogin from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}
 
export default () => (
  <GoogleLogin
    clientId="882732018398-umlr401h2pk82i5g47au7000020f2400.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
);
