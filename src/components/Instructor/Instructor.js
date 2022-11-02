import React, { useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import InstructorCard from '../InstructorCard';
import Layout from '../../Layout';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Instructor.css'

const Instructor = () => {
    const [educators, setEducators] = useState([])
    const getUsers = async () => {
        const response = await fetch("https://virtual-backend-app.herokuapp.com/educators");
        const FinalData = await response.json();
        setEducators(FinalData)
        console.log(FinalData)
    }
    useEffect(() => {
        getUsers();
    }, [])
  return (
    <div className = "studentsContainer">

      <Layout/>

      <div className='Layout'>
            {/* <h3>I am an instructor </h3> */}
            <div>
            <CardGroup>
                    {
                educators.map((educator) => {
                  return (
                  <InstructorCard key={educator.id} educator={educator}           
                      />
                  )
                })
              }

            </CardGroup>

            </div>

            <Link to = "/instructorform"><Button type="submit">Add Instructor + </Button>{' '}</Link>

          </div>
        

    </div>
  )
}

export default Instructor