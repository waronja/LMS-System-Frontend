import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({course, onDelete}) {

  function handleDeleteClick() {
    fetch(`https://virtual-backend-app.herokuapp.com/courses/${course.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDelete(course));
  }

  return (
    <div>
   
           
              <Card.Body>
              <Card.Title>Name: {course.name}</Card.Title>
             
                <Card.Text>
              {course.description}
            </Card.Text>
              </Card.Body>
              <Button variant="primary" onClick={handleDeleteClick}>Delete</Button>
    

    </div>
  )
}

export default UserCard