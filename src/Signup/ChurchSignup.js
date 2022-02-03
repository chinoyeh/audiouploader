import React ,{useRef, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import '../Login/Login.css'

const User = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [churchName, setChurchName] = useState('')
    const [details, setDetails] = useState('')
    const [pastorName, setPastorName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const {signupChurch} = useAuth()
    const [error, setError] = useState ('')
    const [loading, setLoading] = useState (false)
    const navigate = useNavigate()
    async function handleSubmit (e){
        e.preventDefault()
       
        try {
            setError('')
            setLoading (true)
            await signupChurch (email, password, churchName, details, pastorName, phoneNumber)
           navigate("/ChurchDash")
        } catch (err){
            console.log(err)
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
            <form className ='login-form'  onSubmit={handleSubmit} >
            <input
                type = 'text' 
                name ='churchName' 
                placeholder = 'Church Name' 
                value={churchName}
                onChange={(e) => setChurchName(e.target.value)}
            />  
            <input
                 type = 'email'
                 name = 'email' 
                 placeholder='Email'
                 value = {email}
                 onChange={(e)=> setEmail(e.target.value)}
            />
            <input
                 type = 'text' 
                 name ='churchDetails' 
                 placeholder = 'Full Details' 
                 value = {details}
                 onChange={(e)=> setDetails(e.target.value)}
                 />   
            <input 
                type ='text' 
                name ='pastorName' 
                placeholder ='Name of Pastor' 
                value = {pastorName}
                onChange={(e)=> setPastorName(e.target.value)}
            />
            <input 
                type = 'password' 
                name = 'password' 
                placeholder='Password'
                value = {password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <input 
                type ='number' 
                name ='phoneNumber' 
                placeholder ='Phone Number'
                value = {phoneNumber}
                onChange={(e)=> setPhoneNumber(e.target.value)}
            />
            
     
          
            <button disabled ={loading} type ="submit">Register</button>
           
           
            </form>

            
        </div>
        </div>
    )
}

export default User
