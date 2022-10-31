import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='logincontainer'>
        <div className='logintitle'>
           <h2>Sign in</h2>
           <h3>Don't have an account? <Link to="signup" style={{textDecoration:"none"}}><span>Sign up</span></Link></h3>
         </div>

           <form className='loginform'>
              <div>
                 <label>Username or email</label>
                 <input type="text" placeholder='Username or email'/>
              </div>
              
              <div>
                 <label>Password</label>
                 <input type="password" placeholder='Password'/>
              </div>
                <div className='passwordcheck'>
                    <div className='logincheckbox'>
                         <label>Remember me</label>
                        <input type="checkbox"  className='rememberme' /> 
                    </div>
                    <div>
                        <h3>Forgot your password?</h3>
                    </div>
                </div>
            
                <div>
                 <input className='loginbtn' type="submit" value="Sign in" />
               </div>
           </form>
       
        
       

    </div>
  )
}

export default Login
