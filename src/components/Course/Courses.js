import React, { useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card';
import Layout from '../../Layout';
import CourseCard from '../CourseCard';
import { CardGroup } from 'react-bootstrap';
// import './Courses.css'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const getUsers = async () => {
    const response = await fetch("https://virtual-backend-app.herokuapp.com/courses");
    const FinalData = await response.json();
    setCourses(FinalData)
    console.log(FinalData)
    }

    useEffect(() => {
        getUsers();
    }, [])

    function handleDeleteCourse(deletedCourse){
      const updatedCourses = courses.filter((course) => course.id !== deletedCourse.id)
      setCourses(updatedCourses)
    }

  return (
    <div className='studentsContainer'>
        <Layout/>

        <div>

          <CardGroup>
            { courses.map((course) => {
              return (
                <CourseCard id={course.id} key={course.id} course={course} onDelete={handleDeleteCourse}/>
              )
            })}
              
          </CardGroup> 

        </div>

    </div>
  )
}

export default Courses