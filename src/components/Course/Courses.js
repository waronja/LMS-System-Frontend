import React, {useState, useEffect} from 'react'
// import Card from 'react-bootstrap/Card';
import Layout from '../../Layout';
import CourseCard from '../CourseCard';
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

  return (
    <div className='studentsContainer'>
        <Layout/>
          <div>
            <p>
            {
        courses.map((course) => {
          return (
          <CourseCard key={course.id} course={course}           
              />
          )
        })
      }

            </p>
          </div>

          {/* <CardGroup>

              <CourseCard/>
              
          </CardGroup> */}

        </div>

    
  )
}

export default Courses