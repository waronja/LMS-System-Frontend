import React from 'react'
import InstructorDashSummary from '../components/Dashboard/InstructorDashSummary'
import CourseDashSummary from '../components/Dashboard/CourseDashSummary'
import StudentDashSummary from '../components/Dashboard/StudentDashSummary'
import Metric from '../components/Metric'
import Layout from '../Layout'
import './Dashboard.css'
import CourseDetails from '../components/Course/CourseDetails'


const Dashboard = () => {
  return (
    <div className="dashboard">

      <Layout/>
      <div>
         <Metric/>

          <div className='dashboardcomponents'>
            <InstructorDashSummary/>
            <CourseDashSummary/>
            <StudentDashSummary/>
          </div>

          <div>

            <CourseDetails/>
            
          </div>
      </div>
      
    </div>
  )
}

export default Dashboard
