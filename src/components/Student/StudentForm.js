import React from 'react'

function StudentForm() {
  return (
    <div>
        
        <Form>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Student's Full Name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Student's Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Send Invite To Mail" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Student
                </Button>
            </Form>

    </div>
  )
}

export default StudentForm