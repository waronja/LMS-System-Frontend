import React from 'react'
import { Link } from 'react-router-dom'
import "./Forgot.css"

const Forgot = () => {
  return (
    <div className='forgotcontainer'>
    <div className='forgottitle'>
       
       <h3>Fill the form to reset password</h3>
     </div>

       <form className='forgotform'>
          <div className='forgotitem'>
          
             <input type="text" placeholder='Email'/>
          </div>
          
            <div className='forgotitem'>
             <input className='loginbtn' type="submit" value="Send Reset Link" />
           </div>
       </form>
       <h3>Return to <Link to="/"><span>Sign in</span></Link></h3>
   
</div>
  )
}

export default Forgot