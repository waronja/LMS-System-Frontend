import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {

  // const [email, setEmail] = useState("");
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
    <div className='logincontainer'>
        <div className='logintitle'>
           <h2>Sign in</h2>
          
         </div>

           <form className='loginform' >
              <div>
                 {/* <label>Username or email</label> */}
                 <input type="text" placeholder='Username or email'/>
              </div>
              
              <div>
                 {/* <label>Password</label> */}
                 <input type="password" placeholder='Password'/>
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
