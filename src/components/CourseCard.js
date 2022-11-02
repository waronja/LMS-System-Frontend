import React, {useState, useEffect} from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard() {

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
            <Card style={{ width: '18rem' }} id={course.id} key={course.id}>
              <Card.Body>
                <h6>Name: {course.name}</h6>
                <p>
                  Description: {course.description}
                </p>
                {/* <Button variant="primary">Delete</Button> */}
              </Card.Body>
            </Card>
          )
        })
      }
    

    </div>
  )
}

export default UserCard