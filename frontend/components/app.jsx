import React from 'react';
import HeaderContainer from './framing/header_container';
import Footer from './framing/footer';
import MainPage from './main_page';
import MainPageSidebar from './main_page_sidebar';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div id='app'>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" render={() => <MainPage /> } />
      <Route path="/" render={() => <MainPageSidebar /> } />
    </Switch>
    <Footer />
  </div>
);

export default App;
