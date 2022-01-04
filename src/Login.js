import React, { useRef, useState } from "react"
import { useAuth } from "./contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"


const Login =()=> {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate("/Home")
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }
  

    return (
        <div className='login'>
            <h1>Login</h1>
            <p>Continue your experience with us</p>
            <p> {error} </p>
            <form onSubmit={handleSubmit} className ='login-form'>
            <input type ='email' name ='email' placeholder ='Email' ref={emailRef}   />
            <input type ='password' name ='password' placeholder ='Password' ref={passwordRef} />
            <button  disabled={loading} >Login</button>
            <p>Don't have an account?<Link to ='/Signup'> Register</Link></p>
            <p>Forgot Password?</p>
        
            </form>

            
        </div>
    )
}
export default Login;