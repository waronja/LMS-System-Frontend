import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CourseCard({course}) {
  const [courses, setCourses] = useState([])
  const getUsers = async () => {
      const response = await fetch("https://virtual-backend-app.herokuapp.com/courses");
      const FinalData = await response.json();
      setCourses(FinalData)
  }
  useEffect(() => {
      getUsers();
  }, [])

  return (
    <div>
      {
        courses.map((course) => {
          return (
            <Card style={{ width: '18rem' }} id={course.id} key={course}>
              <Card.Body>
                <Card.Title>Name: {course.name}</Card.Title>
                <Card.Text>Name: {course.description}</Card.Text>
          {/* <Button variant="primary">Delete</Button> */}
             <Link to = "/stcoursedetails"><Button type="submit">View Details </Button>{' '}</Link>
              </Card.Body>
            </Card>
          )
        })

      }

    </div>
  )
}

export default CourseCard