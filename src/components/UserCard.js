import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({student}) {
  return (
    <div>
     
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6999225/pexels-photo-6999225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>{student.first_name}</Card.Title>
        <Card.Text>
           {student.course}
        </Card.Text>
        <Card.Text>
           {student.school}
        </Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default UserCard