import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signupcontainer'>
        <div className='logintitle'>
           <h2>Sign up</h2>
           
         </div>

           <form className='loginform'>
              <div>
                 
                 <input type="text" placeholder='Username'/>
              </div>
              <div>
                 
                 <input type="text" placeholder='Email'/>
              </div>
              
              <div>
                 
                 <input type="password" placeholder='Password'/>
              </div>
              <div>
                
                 <input type="password" placeholder='Confirm password'/>
              </div>
                <div className='passwordcheck'>
                    <div className='logincheckbox'>
                         <h6>I agree to the Terms of service and Privacy policy </h6>
                        <input type="checkbox"  className='rememberme' /> 
                    </div>
                    
                </div>
            
                <div>
                 <input className='loginbtn' type="submit" value="Sign up" />
               </div>
                 
           </form>
           <h5>Already have an account?<Link to="/" style={{textDecoration:"none"}}> <span>Sign in</span></Link></h5>

    </div>
  )
}

export default Signup