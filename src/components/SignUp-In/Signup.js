import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'


const Signup = () => {

  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  //  const [errors, setErrors] = useState([]);
  //  const [isLoading, setIsLoading] = useState(false);

  //  function handleSubmit(e) {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   }).then((r) => {
  //     setIsLoading(false);
  //     if (r.ok) {
  //       r.json().then((user) => onLogin(user));
  //     } else {
  //       r.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }

  return (


    <div className='signupcontainer'>
        <div className='logintitle'>
           <h2>Sign up</h2>
           
         </div>

           <form className='loginform' >
              <div>
                 
                 <input type="text" placeholder='First Name'/>
              </div>

              <div>
                 
                 <input type="text" placeholder='Last Name'/>
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