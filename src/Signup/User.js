import React ,{useRef, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import '../Login/Login.css'

const User = () => {
    const fullNameRef = useRef()
    const artisteNameRef = useRef()
    const genderRef = useRef()
    const phoneNumberRef = useRef()
    const {writeUserData, currentUser} = useAuth()
    const [error, setError] = useState ('')
    const [loading, setLoading] = useState (false)
    const navigate = useNavigate()
function handleSubmit (e){
        e.preventDefault()
        //  console.log(currentUser)
        //  return
        try {
            setError('')
            setLoading (true)
           writeUserData( currentUser.uid,fullNameRef.current.value,artisteNameRef.current.value,genderRef.current.value, phoneNumberRef.current.value)
 
           navigate("/Dashboard")
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
            <form className ='login-form' onSubmit ={handleSubmit}>
            <input type = 'text' name ='fullName' placeholder = 'Full Name' ref ={fullNameRef}/>  
            <input type = 'text' name ='artisteName' placeholder = 'Artiste Name' ref ={artisteNameRef}/>   
            <input type ='text' name ='gender' placeholder ='Gender' ref ={genderRef}/>
            <input type ='number' name ='phoneNumber' placeholder ='Phone Number' ref ={phoneNumberRef}/>
            
     
          
            <button disabled ={loading} type ="submit">Register</button>
           
           
            </form>

            
        </div>
        </div>
    )
}

export default User
