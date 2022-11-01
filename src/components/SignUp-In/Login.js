import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'

const Login = ({ onLogin }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setError] = useState([])

  

  const handleSubmit = (e) => {
    e.preventDefault()

    const userdets = {
      email,
      password
    }

    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdets)
    }).then((res) => {
      if (res.ok){
        res.json().then((user) => onLogin(user))
      }
      else{
        res.json().then((err) => setError(err.errors))
      }
    })
    
  }



  return (
    <div className='logincontainer'>
        <div className='logintitle'>
           <h2>Sign in</h2>
          
         </div>
<<<<<<< HEAD

           <form className='loginform' >
=======
              <p>{errors}</p>
           <form className='loginform' onSubmit={handleSubmit}>
>>>>>>> 4ef2e2c7039a9f5c4e6989c9d7767847c34eb824
              <div>
                 {/* <label>Username or email</label> */}
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Username or email'/>
              </div>
              
              <div>
                 {/* <label>Password</label> */}
                 <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='Password'/>
              </div>

                <div className='passwordcheck'>
                    <div className='logincheckbox'>
                         <h5>Remember me</h5>
                        <input type="checkbox"  className='rememberme' /> 
                    </div>
                    <div>
                        <Link to="/forgotpassword" style={{textDecoration:"none"}}><span>Forgot password?</span></Link>
                    </div>
                </div>
            
                <div>
                 <input className='loginbtn' type="submit" value="Sign in" />
               </div>
           </form>
           <h5>Don't have an account? <Link to="/signup" style={{textDecoration:"none"}}><span>Sign up</span></Link></h5>
       
        
       

    </div>
  )
}

export default Login
