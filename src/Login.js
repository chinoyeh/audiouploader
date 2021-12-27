import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin =(e)=>{
      e.preventDefault();

    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <p>Continue your experience with us</p>
            <form className ='login-form'>
            <input type ='email' name ='email' placeholder ='Email'/>
            <input type ='password' name ='password' placeholder ='Password'/>
            <button onClick ={handleLogin}>Login</button>
            <p>Don't have an account?<Link to ='/Signup'> Register</Link></p>
            <p>Forgot Password?</p>
            </form>

            
        </div>
    )
}

export default Login
