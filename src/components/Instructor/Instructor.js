import React from 'react'
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UserCard from '../UserCard';
import Layout from '../../Layout';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Instructor = () => {
  return (
    <div className = "studentsContainer">

      <Layout/>

      <div>

        <div>
            <h3>I am an instructor </h3>
            
            <Link to = "/instructorform"><Button type="submit">Add + </Button>{' '}</Link>


        </div>

       

          <CardGroup>

            <UserCard/>

          </CardGroup>

      </div>
        

    </div>
  )
}

export default Instructor