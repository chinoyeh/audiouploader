import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div>
       <div className='login'>
            <h1>Register</h1>
            <p>Start your experience with us</p>
            <form className ='login-form'>
            <input type = 'text' name ='fullname' placeholder = 'Full Name'/>  
            <input type = 'text' name ='artistename' placeholder = 'Artiste Name'/>   
            <input type ='email' name ='email' placeholder ='Email'/>
            <input type ='password' name ='password' placeholder ='Password'/>
            <p> By signing up you agree with our Terms and Conditions </p>
            <button>Register</button>
           
            <p>Have an account? <Link to ='/'>Login </Link></p>
            </form>

            
        </div>
        </div>
    )
}

export default Signup
