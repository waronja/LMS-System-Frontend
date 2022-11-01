import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InstructorCard() {
  return (
    <div>
     
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>First + Second Name</Card.Title>
        <Card.Text>
          Student's Email
        </Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default InstructorCard