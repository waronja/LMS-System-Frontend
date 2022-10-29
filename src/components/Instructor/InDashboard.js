import React from 'react'
import './InDashboard.css'
import InSideMenu from './InSideMenu'
import CourseDetails from '../Course/CourseDetails'

const InDashboard = () => {
  return (
    <div>

        <div className='Layout'>
          <InSideMenu/>
          <h3>Instructor</h3>
          <CourseDetails/>
        </div>
        
        
        
    </div>
  )
}

export default InDashboard