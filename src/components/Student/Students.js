import React from 'react'
import "./User.css";
import Layout from '../../Layout';
import UserCard from '../UserCard';
import { CardGroup } from 'react-bootstrap';

const Students = () => {
  return (
    <div className ="studentsContainer">

        <Layout/>
        <div>

            <h5> Here is a List Of Students </h5>

            <CardGroup>

              <UserCard/>

          </CardGroup>

        </div>

        
      
    </div>
  )
}

export default Students