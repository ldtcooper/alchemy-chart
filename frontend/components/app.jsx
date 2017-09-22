import React from 'react';
import HeaderContainer from './framing/header_container';
import Footer from './framing/footer';
import MainPage from './main_page';
import MainPageSidebar from './main_page_sidebar';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id='app'>
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/login" component= {MainPage} />
      <ProtectedRoute path="/" component= {MainPageSidebar} />
    </Switch>
    <Footer />
  </div>
);

export default App;
