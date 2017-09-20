import React from 'react';
import ReactDOM from 'react-dom';
import * as action from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>Alchemy Chart</h1>, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = action.login;
  window.signup = action.signup;
  window.logout = action.logout;

});
