import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CourseCard() {
  return (

    <div>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://dz8fbjd9gwp2s.cloudfront.net/courses/5f5338c60cf2d7d974471146/5f5338c60cf2d7d974471146_scaled_cover.jpg?v=1" />
          <Card.Body>
            <Card.Title>Course Name</Card.Title>
            <Card.Text>
              Course Description "A Short Summary of what the course offers and what to expect"
            </Card.Text>

            {/* If the user is a student then take them to this link if its a instructor take them to this other link */}

            <Link to = "/stcoursedetails"><Button type="submit">View Details </Button>{' '}</Link>
          </Card.Body>
        </Card>

    </div>
  )
}

export default CourseCard