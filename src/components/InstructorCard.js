import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InstructorCard({educator}) {

  return (
    <div>
   
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{educator.first_name} {educator.last_name}</Card.Title>
            <Card.Text>
              {educator.email}
            </Card.Text>
            <Button variant="primary">Delete</Button>
          </Card.Body>
        </Card>
 
    

    </div>
  )
}

export default InstructorCard