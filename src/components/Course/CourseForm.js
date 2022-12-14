import React from 'react'
import Form from 'react-bootstrap/Form';

function CourseForm() {
  return (
    <div>
        
        <Form>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="name" placeholder="Course Name" />

                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                    <Form.Control
                      as="textarea"
                      placeholder="A short description of the course"
                      style={{ height: '100px' }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Course
                </Button>
            </Form>
        
    </div>
  )
}

export default CourseForm