import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './components/SideMenu';
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