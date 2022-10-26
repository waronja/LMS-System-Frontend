
import React from 'react'
import CourseDashSummary from './CourseDashSummary'
import InstructorDashSummary from './InstructorDashSummary'
import StudentDashSummary from './StudentDashSummary'


function DashSummary() {
  return (
    <div className='dashboardsummaryelements'>
        <InstructorDashSummary/>
        <CourseDashSummary/>
        <StudentDashSummary/>
    </div>
  )
}

export default DashSummary