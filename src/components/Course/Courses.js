import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Layout from '../../Layout';
import UserCard from '../UserCard';

const Courses = () => {
  return (
    <div className='studentsContainer'>

        <Layout/>

        <div>

            <h3>We are courses</h3>

          <CardGroup>

              <UserCard/>
              
          </CardGroup>

        </div>

    </div>
  )
}

export default Courses