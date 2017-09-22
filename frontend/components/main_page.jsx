import React from 'react';
import SignupContainer from './signup/signup_container';
import DatasetListContainer from './datasets/dataset_list_container';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './framing/sidebar';

const MainPage = () => (
  <main>
    <Switch>
      <Route exact path="/" render={() => <SignupContainer /> } />
    </Switch>
  </main>
);

export default MainPage;
