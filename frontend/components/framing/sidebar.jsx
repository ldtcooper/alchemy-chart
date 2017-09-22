import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav>
    <NavLink to='/datasets'>Your Datasets</NavLink>
    <NavLink to='/datasets/new'>Upload Data</NavLink>
    <NavLink to='/charts/new'>Create Chart</NavLink>
    <NavLink to='/charts'>Your Charts</NavLink>
  </nav>
);

export default Sidebar;
