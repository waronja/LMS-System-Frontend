import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard() {
  return (
    <div>
     
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default UserCard