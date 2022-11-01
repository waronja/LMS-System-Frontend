import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function StudentForm() {
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation:"",
    school_id: "",
    
    
  });
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("http://localhost:3000/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    .then((resp) => resp.json())
    .then((formData) =>setFormData(formData));
    // .then((r) => {
    //   setIsLoading(false);
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // }
    // );

    
  }

  function handleChange(e) {
      
        setFormData({
          ...formData,
          [e.target.id]:e.target.value,
        });
      }
      console.log(formData)
      
  return (
    <div>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="first_name"
                     placeholder="Student's First Name"
                     value={formData.first_name}
                     onChange={handleChange}
                     id="first_name"
                     autoComplete="off"
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last_name" placeholder="Student's Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                      id="last_name"
                     autoComplete="off"
                     />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Student's Email"
                     id="email"
                     autoComplete="off"
                     value={formData.email}
                     onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                     id="password"
                    value={formData.password}
                    onChange={handleChange}
                     autoComplete="current-password"
                     />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"
                    placeholder="Confirm password"
                   id="password_confirmation"
                   value={formData.passwordConfirmation}
                   onChange={handleChange}
                    autoComplete="current-password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>School</Form.Label>
                    <Form.Control type=""
                    placeholder="School_id"
                   id="school_id"
                   value={formData.school_id}
                   onChange={handleChange}
                    autoComplete=""
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Send Invite To Mail" />
                </Form.Group>
                <Button variant="primary" type="submit">
                   {isLoading ? "Loading..." : "Add Student"}
                </Button>
                <Form.Group>
                    {errors.map((err) => (
                   <error key={err}>{err}</error>
                     ))}
                </Form.Group>
            </Form>
    </div>
  )
}
export default StudentForm
