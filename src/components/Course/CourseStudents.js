import React from 'react'
import UserCard from '../UserCard';
import { CardGroup } from 'react-bootstrap';

function CourseStudents() {
  return (
    <div>
        <CardGroup>

              <UserCard/>
              <UserCard/>
              <UserCard/>

          </CardGroup>

    </div>
  )
}

export default CourseStudents