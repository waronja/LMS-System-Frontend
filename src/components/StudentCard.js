import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function StudentCard() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('https://virtual-backend-app.herokuapp.com/students')
    .then((res) => {
      if (res.ok){
        res.json().then(data => setStudents(data))
      }
    })
  }, [])

  return (
    <div>
     {students.map((student) => {
      return (
        <Card style={{ width: '18rem' }} key={student.id}>
        <Card.Body>
          <Card.Title>{student.first_name} {student.last_name}</Card.Title>
          <Card.Text>
            {student.email}
          </Card.Text>
          {/* <Button variant="primary">Delete</Button> */}
        </Card.Body>
      </Card>
      )
     })}
    

    </div>
  )
}

export default StudentCard