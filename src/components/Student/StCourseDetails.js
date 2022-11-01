import React from 'react'
import CoursePhase from '../Course/CoursePhase';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InSideMenu from './StSideMenu';
import './StCourseDetails.css'


function StCourseDetails() {
  return (
    <div className = "stcoursedetails">

        <InSideMenu/>

        <div> 
            
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3">

                <Tab eventKey="overview" title="Overview">
                Overview 
                </Tab>

                <Tab eventKey="phases" title="Phases">
                <CoursePhase/>
                </Tab>

                <Tab eventKey="files" title="Files">
                Files
                </Tab>
                
            </Tabs>

        </div>

           
    </div>

  )
}

export default StCourseDetails