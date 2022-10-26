import React from 'react'
import "./Forgot"

const Forgot = () => {
  return (
    <div className='forgotcontainer'>
    <div className='logintitle'>
       <h2>Forgot Password</h2>
       <h3>fill the form to reset password</h3>
     </div>

       <form className='loginform'>
          <div>
             <label>Email</label>
             <input type="text" placeholder='Email'/>
          </div>
          
            <div>
             <input className='loginbtn' type="submit" value="Send Reset Link" />
           </div>
       </form>
       <h3>Return to <span>Sign in</span></h3>
   
</div>
  )
}

export default Forgot