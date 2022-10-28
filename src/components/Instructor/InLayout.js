import React from 'react';
import { Outlet } from 'react-router-dom';
import InSideMenu from './components/InSideMenu';
import './Layout.css';

function InLayout() {
  return (
 
    <div className="Layout">
      <InSideMenu />
      <Outlet />
    </div>
  )
}