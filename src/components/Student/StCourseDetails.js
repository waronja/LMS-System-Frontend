<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
import './stCourseDetails.css'
// import {FaHistory} from 'react-icons/fa'
// import {FcApproval} from 'react-icons/fc'
// import {GiProgression} from 'react-icons/gi'
import 'bootstrap/dist/css/bootstrap.min.css';


const StCourseDetails = ()  => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
      const response = await fetch("http://127.0.0.1:3000/students");
      const FinalData = await response.json();
      setUsers(FinalData)
      console.log(FinalData)
  }



  useEffect(() => {
      getUsers();
  }, [])
=======
import React from 'react'
import CoursePhase from '../Course/CoursePhase';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InSideMenu from './StSideMenu';
import './StCourseDetails.css'
>>>>>>> 51614eca49e6dbbc36c47e19014be012d7358820


function StCourseDetails() {
  return (
<<<<<<< HEAD
    
=======
    <div className = "stcoursedetails">
>>>>>>> 51614eca49e6dbbc36c47e19014be012d7358820

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