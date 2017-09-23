import React from 'react';
import SignupContainer from './signup/signup_container';
import DatasetListContainer from './datasets/dataset_list_container';
import DataUploadContainer from './upload/data_upload_container';
import NotFound from './not_found';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './framing/sidebar';
import { ProtectedRoute } from '../util/route_util';

const MainPageSidebar = () => (
  <main className='main'>
    <Sidebar />
    <Switch>
      <ProtectedRoute path="/" component= {DatasetListContainer} />
      <Route exact path="/datasets" render={() => <DatasetListContainer /> } />
      <Route exact path="/datasets/new" render={() => <DataUploadContainer /> } />

      <Route path="*" render={() => <NotFound />}/>
    </Switch>
  </main>
);

export default MainPageSidebar;
