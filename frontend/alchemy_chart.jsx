import React from 'react';
import ReactDOM from 'react-dom';
import * as action from './action/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Alchemy Chart</h1>, root);
  window.login = action.login;
  window.signup = action.signup;
  window.logout = action.logout;
});
