import React from 'react'
import InstructorDashSummary from '../components/Dashboard/InstructorDashSummary'
import CourseDashSummary from '../components/Dashboard/CourseDashSummary'
import StudentDashSummary from '../components/Dashboard/StudentDashSummary'
import Metric from '../components/Metric'
import Layout from '../Layout'
import './Dashboard.css'



const Dashboard = () => {
  return (
    <div className="dashboard">

      <Layout/>
      <div>
         <Metric/>
         <Metric/>
         <Metric/>

          <div className='dashboardcomponents'>
            <InstructorDashSummary/>
            <CourseDashSummary/>
            <StudentDashSummary/>
          </div>

          
      </div>
      
    </div>
  )
}

export default Dashboard
