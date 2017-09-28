import React from 'react';
import SignupContainer from './signup/signup_container';
import DatasetListContainer from './datasets/dataset_list_container';
import DataUploadContainer from './upload/data_upload_container';
import ChartListContainer from './chart/chart_list_container';
import NewChartContainer from './chart/new_chart_container';
import NotFound from './not_found';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './framing/sidebar';
import { ProtectedRoute } from '../util/route_util';

const MainPageSidebar = () => (
  <main className='main'>
    <Sidebar />
    <Switch>
      <Route exact path="/" component={DatasetListContainer} />
      <Route exact path="/datasets" component={DatasetListContainer} />
      <Route exact path="/datasets/new" component={DataUploadContainer} />
      <Route exact path="/charts" component={ChartListContainer} />
      <Route exact path='/charts/new' component={NewChartContainer} />
      <Route path='/charts/:id' component={NewChartContainer} />
      <Route path="*" component={NotFound}/>
    </Switch>
  </main>
);

export default MainPageSidebar;
