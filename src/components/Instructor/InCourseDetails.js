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
                className="mb-3">

                <Tab eventKey="overview" title="Overview">
                Give a high-level overview of the product / project you re working on, its goals, etc..Elaborate on the target audience of your project/product, link out to additional resources. Vivamus pretium laoreet massa eu euismod. Nunc accumsan id odio sed luctus. Suspendisse a lacus sed ex consequat interdum quis non eros. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore nam fuga sapiente vel iste animiicta ab at placeat sint.
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