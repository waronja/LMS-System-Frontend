import React from 'react'
import { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom'

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }
  return (
    <div className='logincontainer'>
        <div className='logintitle'>
           <h2>Sign in</h2>
          
         </div>

           <form className='loginform' onSubmit={handleSubmit}>
              <div>
                 {/* <label>Username or email</label> */}
                 <input type="text" 
                 placeholder=' email'
                 id="email"
                 autoComplete="off"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                  />

                
              </div>
              
              <div>
                 {/* <label>Password</label> */}
                 <input type="password"
                  placeholder='Password'
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
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
