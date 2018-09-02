import React, { Component } from 'react';
// import * as firebase from 'firebase';
// import * as firebaseui from 'firebaseui';

const AuthForm = props => {
  // FirebaseUI Configurations
  // const uiConfig = {
  //   callbacks: {
  //     signInSuccessWithAuthResult: (authResult, redirectUrl) => {
  //       // User successfully signed in
  //       console.log('\n**** Auth Result ****\n', authResult);
  //       return true;
  //     },
  //     uiShown: () => {
  //       document.getElementById('loader').style.display = 'none';
  //     }
  //   },
  //   signInFlow: 'popup',
  //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
  //   signInOptions: [
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     {
  //       provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       customParameters: {
  //         // Forces account selection even when one account is available
  //         prompt: 'select_account'
  //       }
  //     }
  //   ]
  // };
  
  // Start FirebaseUI Authentication
  //firebaseui.start('#firebaseui-auth-container', uiConfig);
  
  //const ui = new firebaseui.auth.AuthUI(firebase.auth);
  
  function render () {
    return (
      <div>
        <h1>Authentication Form</h1>
        <div className="firebaseui-auth-container">
          <div id="loader">Loading...</div>
        </div>
      </div>
    );
  }
};

export default AuthForm;
