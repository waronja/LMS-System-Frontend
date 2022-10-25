import React from 'react'

const Signup = () => {
  return (
    <div className='signupcontainer'>
        <div className='logintitle'>
           <h2>Sign up</h2>
           <h3>Already have an account? <span>Sign in</span></h3>
         </div>

           <form className='loginform'>
              <div>
                 <label>Username </label>
                 <input type="text" placeholder='Username'/>
              </div>
              <div>
                 <label>Email </label>
                 <input type="text" placeholder='Email'/>
              </div>
              
              <div>
                 <label>Password</label>
                 <input type="password" placeholder='Password'/>
              </div>
                <div className='passwordcheck'>
                    <div className='logincheckbox'>
                         <label>I agree to the Terms of service and Privacy policy </label>
                        <input type="checkbox"  className='rememberme' /> 
                    </div>
                    
                </div>
            
                <div>
                 <input className='loginbtn' type="submit" value="Sign up" />
               </div>
                 
           </form>
    

    </div>
  )
}

export default Signup