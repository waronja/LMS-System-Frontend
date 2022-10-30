import React from 'react'
import CoursePhase from './CoursePhase'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CourseStudents from './CourseStudents';



function CourseDetails() {
  return (
    <div>

      <div> Course Name : Geeks UI - Design & Development </div>
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

  )
}

export default CourseDetails