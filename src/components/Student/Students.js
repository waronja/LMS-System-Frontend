import React from 'react'
import "./User.css";
import Layout from '../../Layout';
import UserCard from '../UserCard';
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Students = () => {
  return (
    <div className ="studentsContainer">

        <Layout/>
        <div>

            <h5> Here is a List Of Students </h5>

            <Link to = "/studentform"><Button type="submit">Add Student + </Button>{' '}</Link>

            <CardGroup>

              <UserCard/>
              <UserCard/>
              <UserCard/>
              <UserCard/>
              <UserCard/>
              <UserCard/>

          </CardGroup>

        </div>

        
      
    </div>
  )
}

export default Students