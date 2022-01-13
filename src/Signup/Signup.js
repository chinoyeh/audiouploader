import React, {useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import '../Login/Login.css'

const Signup = () => {
    const fullNameRef = useRef()
    const artisteNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState ('')
    const [loading, setLoading] = useState (false)
    const navigate = useNavigate()
   async function handleSubmit (e){
        e.preventDefault()
        try {
            setError('')
            setLoading (true)
           await signup( emailRef.current.value,passwordRef.current.value)
       
           navigate("/User")
        } catch{
            setError('Failed to create an account')
        }
        setLoading (false)
    }
    return (
        <div>
       <div className='login'>
            <h1>Register</h1>
            <p>Start your experience with us</p>
            <p className ='error'> {error}</p>
            <form className ='login-form' onSubmit ={handleSubmit}>
            <input type ='email' name ='email' placeholder ='Email' ref ={emailRef}/>
            <input type ='password' name ='password' placeholder ='Password' ref ={passwordRef}/>
            <p> By signing up you agree with our Terms and Conditions </p>
          
            <button disabled ={loading} type ="submit">Next</button>
           
            <p>Have an account? <Link to ='/'>Login </Link></p>
            </form>

            
        </div>
        </div>
    )
}

export default Signup