import React from 'react'
import "./User.css";
import Layout from '../../Layout';
import UserCard from '../UserCard';

const Students = () => {
  return (
    <div className ="studentsContainer">

        <Layout/>
        <div>

            <h5> Here is a List Of Students </h5>

            <UserCard/>

        </div>

        
      
    </div>
  )
}

export default Students