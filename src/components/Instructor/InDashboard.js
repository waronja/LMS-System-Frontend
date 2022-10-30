import React from 'react'
import './InDashboard.css'
import InSideMenu from './InSideMenu';
import CourseCard from '../Course/CourseCard';
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const InDashboard = () => {
  return (
    <div>

        <div className='Layout'>
          <InSideMenu/>
          
          <CardGroup>

              <CourseCard/>
              <CourseCard/>
              <CourseCard/>
              <CourseCard/>
              <CourseCard/>

          </CardGroup>
          <Link to = "/createcourse"><Button type="submit">Add New Course + </Button>{' '}</Link>
          
        </div>
        
        
        
    </div>
  )
}

export default InDashboard