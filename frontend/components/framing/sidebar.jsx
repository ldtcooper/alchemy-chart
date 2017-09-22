import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav>
    <NavLink exact={true} to='/datasets' activeClassName="active">Your Datasets</NavLink>
    <NavLink exact={true} to='/datasets/new' activeClassName="active">Upload Data</NavLink>
    <NavLink exact={true} to='/charts/new' activeClassName="active">Create Chart</NavLink>
    <NavLink exact={true} to='/charts' activeClassName="active">Your Charts</NavLink>
  </nav>
);

export default Sidebar;
