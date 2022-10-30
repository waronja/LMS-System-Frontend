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
            <Card.Title>Front-End Development</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to = "/incoursedetails"><Button type="submit">View Details </Button>{' '}</Link>
          </Card.Body>
        </Card>

    </div>
  )
}

export default CourseCard