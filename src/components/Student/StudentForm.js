import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function StudentForm() {
  const [first_name, setFirstName] =useState("");
  const [last_name, setLastName] =useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: passwordConfirmation,
    
    
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
    .then((formData) =>console.log(formData));
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
        //   [e.target.id]: value,
        });
      }
      
  return (
    <div>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="first_name"
                     placeholder="Student's First Name"
                     value ={formData.first_name}
                     onChange={handleChange}
                     id="first_name"
                     autoComplete="off"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last_name" placeholder="Student's Last Name"
                      value ={formData.last_name}
                      onChange={handleChange}
                    //  Id="last_name"
                     autoComplete="off"
                     />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Student's Email"
                    //  id="email"
                     autoComplete="off"
                     value ={formData.email}
                     onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    //  id="password"
                    value ={formData.password}
                    onChange={handleChange}
                     autoComplete="current-password"
                     />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"
                    placeholder="Confirm password"
                //    id="password_confirmation"
                value ={formData.passwordConfirmation}
                onChange={handleChange}
                    autoComplete="current-password"
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