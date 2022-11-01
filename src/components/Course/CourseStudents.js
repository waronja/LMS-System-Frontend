import React from 'react'
import StudentCard from '../StudentCard';
import { CardGroup } from 'react-bootstrap';

function CourseStudents() {
  return (
    <div>
        <CardGroup>

              <StudentCard/>
              <StudentCard/>
              <StudentCard/>

          </CardGroup>

    </div>
  )
}

export default CourseStudents