import React from 'react'
// import Card from 'react-bootstrap/Card';
import Layout from '../../Layout';
import CourseCard from '../CourseCard';
import { CardGroup } from 'react-bootstrap';
// import './Courses.css'

const Courses = () => {

  return (
    <div className='studentsContainer'>
        <Layout/>

        <div>

          <CardGroup>

              <CourseCard/>
              
          </CardGroup> 

        </div>

    </div>
  )
}

export default Courses