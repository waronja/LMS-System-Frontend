import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UserCard from '../UserCard';
import Layout from '../../Layout';


const Instructor = () => {
  return (
    <div className = "studentsContainer">

      <Layout/>

      <div>

        <h3>I am an instructor </h3>

        <UserCard/>

      </div>
        

    </div>
  )
}

export default Instructor