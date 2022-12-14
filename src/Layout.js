import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './components/SOSideMenu';
import './Layout.css';

function Layout() {
  return (
 
    <div className="Layout">
      <SideMenu />
      <Outlet />
    </div>
  )
}

export default Layout