import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { seeAllDatasets } from './actions/dataset_actions';
import * as DataApiUtils from './util/dataset_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store = {store} />, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.seeAllDatasets = seeAllDatasets;
  window.fetchDatasets = DataApiUtils.fetchDatasets;
  window.deleteDataset = DataApiUtils.deleteDataset;
});
