import React from 'react'
import './InDashboard.css'
import InSideMenu from './InSideMenu'
import CourseCard from '../Course/CourseCard'
import { CardGroup } from 'react-bootstrap';

const InDashboard = () => {
  return (
    <div>

        <div className='Layout'>
          <InSideMenu/>

          <CardGroup>

              <CourseCard/>
              <CourseCard/>
              <CourseCard/>
              
          </CardGroup>
          
        </div>
        
        
        
    </div>
  )
}

export default InDashboard