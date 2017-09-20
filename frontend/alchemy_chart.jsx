import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionApi from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Alchemy Chart</h1>, root);
  window.login = sessionApi.login;
  window.signup = sessionApi.signup;
  window.logout = sessionApi.logout;
});
