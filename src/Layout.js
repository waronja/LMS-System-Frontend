import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import './Layout.css';

function Layout() {
  return (
  // <div classNameName= "">
  //   <ul className="nav nav-tabs" id="myTab" role="tablist">
  //     <li className="nav-item" role="presentation">
  //       <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Dashboard</button>
  //     </li>
  //     <li className="nav-item" role="presentation">
  //       <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Users</button>
  //     </li>
  //     <li className="nav-item" role="presentation">
  //       <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Courses</button>
  //     </li>
  //   </ul>
  //   <div className="tab-content" id="myTabContent">
  //     <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  //     <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  //     <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
  //   </div>
  // </div>
    <div className="Layout">
      <SideMenu />
      <Outlet />
    </div>
  )
}

export default Layout