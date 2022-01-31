import React from "react";
import './App.css';


export function Login() {
    return(
      <div className="form">
        <h1>Hi! Please Login</h1>
        <form className="login">
          <input type="email" placeholder='Enter email' >
          </input>
          <input type="password" placeholder='Enter password' >
          </input>
          <button type='submit' className="submit"> Login</button>
        </form>
        <p>New User? <a href="Signup">Create an Account</a></p>
      </div>
    );
  }

 //const signIn = () =>{axios.post('http://localhost:5000', signIn)

//   }
 export function SignUp() {
    return(
      <div className= "form">
        <h2>Welcome. Please SignUp to Register</h2>
        <form className='login'>
          <input type="email" placeholder='Enter email'  >
          </input>
          <input type="password" placeholder='Enter password' >
          </input>
          <button type='submit' className='submit'> Sign Up</button>
        </form>
        
      </div>
    );
  }

