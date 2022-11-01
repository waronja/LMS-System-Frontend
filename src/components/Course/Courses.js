import React, { useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Layout from '../../Layout';
import UserCard from '../UserCard';
// import './Courses.css'

const Courses = () => {
  const [courses, setCourses] = useState([])
    const getUsers = async () => {
        const response = await fetch("http://127.0.0.1:3000/courses");
        const FinalData = await response.json();
        setCourses(FinalData)
        console.log(FinalData)
    }
    useEffect(() => {
        getUsers();
    }, [])

  return (
    <div className='studentsContainer'>
        <Layout/>

        <div>
          <div>
            <p>
            {
        courses.map((course) => {
          return (
          <div className="card_item" id={course.id} key={course.id}>
                          <div className="card_inner">
                              <div className="userName">Name: {course.name}</div>
                              <div className="userName">Description: {course.description}</div>
                              {/* <div className="userName">{course.school.name}</div> */}
                              <div className="userName">{course.school.description}</div>
                              {/* <div className="userUrl">{course.student.first_name}</div> */}
                              {/* <div className="userUrl">{course.student.last_name}</div> */}
                              {/* <div className="userUrl">{course.student.email}</div> */}
                              
                          </div>
              </div>
          )
        })
      }

            </p>
          </div>

          <CardGroup>

              <UserCard/>
              
          </CardGroup>

        </div>

    </div>
  )
}

export default Courses