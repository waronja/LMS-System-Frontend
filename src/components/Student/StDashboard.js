import React from 'react'
import './StDashboard.css'
import StSideMenu from './StSideMenu';
import CourseCard from '../CourseCard';
import { CardGroup } from 'react-bootstrap';


const StDashboard = ({user}) => {
  return (
    <div className='Layout'>
      <StSideMenu/>
        <CardGroup>
          <CourseCard/>
        </CardGroup>
     
    </div>
  )
}

export default StDashboard