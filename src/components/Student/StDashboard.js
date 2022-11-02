import React from 'react'
import './StDashboard.css'
import StSideMenu from './StSideMenu';
import CourseCard from '../Course/CourseCard';
import { CardGroup } from 'react-bootstrap';


const InDashboard = () => {
  return (
    <div>

        <div className='Layout'>
          <StSideMenu/>
          
          <CardGroup>

              <CourseCard/>
              <CourseCard/>
              <CourseCard/>
              <CourseCard/>
              <CourseCard/>

          </CardGroup>
          
        </div>
        
        
        
    </div>
  )
}

export default InDashboard