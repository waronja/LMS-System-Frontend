import React from 'react'
import CoursePhase from '../Course/CoursePhase';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CourseStudents from '../Course/CourseStudents';
import InSideMenu from './InSideMenu';
import './InCourseDetails.css'



function InCourseDetails() {
  return (
    <div className = "incoursedetails">

        <InSideMenu/>

        <div> 
            
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify>

                <Tab eventKey="overview" title="Overview">
                Overview 
                </Tab>

                <Tab eventKey="phases" title="Phases">
                <CoursePhase/>
                </Tab>

                <Tab eventKey="files" title="Files">
                Files
                </Tab>
                
                <Tab eventKey="students" title="Students">

                <CourseStudents/>

                </Tab>
            </Tabs>

        </div>

           
    </div>

  )
}

export default InCourseDetails