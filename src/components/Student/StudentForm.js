import React,{} from 'react'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function StudentForm({ handleClose, onLogin }) {
    
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }

    fetch("https://virtual-backend-app.herokuapp.com/student", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newClient)
    })
   
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user))
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })

    // handleClose();
  }


  return (
    <div>
        
     <form onSubmit={handleSubmit}>
      
      <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          autoComplete="off"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        
       
       
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          autoComplete="off"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
       
      
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
     
    
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      
      
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />

        <button type="submit">Add Student</button>
     
     
      
      <div>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
     </div>
    </form>

    </div>
  )
}

export default StudentForm