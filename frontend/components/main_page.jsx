import React from 'react';
import SignupContainer from './signup/signup_container';
import { Route, Switch } from 'react-router-dom';

const MainPage = () => (
  <main>
    <Switch>
      <Route exact path="/" render={() => <SignupContainer /> } />
    </Switch>
  </main>
);

export default MainPage;
