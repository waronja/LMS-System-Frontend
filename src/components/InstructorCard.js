import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InstructorCard() {

  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    fetch('https://virtual-backend-app.herokuapp.com/educators')
    .then(res => {
      if (res.ok){
        res.json().then((data) => setInstructors(data))
      }
    })
  }, [])

  return (
    <div>
     {instructors.map((instructor) => {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{instructor.first_name} {instructor.last_name}</Card.Title>
            <Card.Text>
              {instructor.email}
            </Card.Text>
            {/* <Button variant="primary">Delete</Button> */}
          </Card.Body>
        </Card>
      )
     })}
    

    </div>
  )
}

export default InstructorCard