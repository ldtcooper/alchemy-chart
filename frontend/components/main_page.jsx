import React from 'react';
import SignupContainer from './signup/signup_container';
import DatasetListContainer from './datasets/dataset_list_container';
import { Route, Switch } from 'react-router-dom';

const MainPage = () => (
  <main>
    <Switch>
      <Route exact path="/" render={() => <SignupContainer /> } />
      <Route exact path="/datasets" render={() => <DatasetListContainer /> } />
    </Switch>
  </main>
);

export default MainPage;
