import React from 'react'
import { useAuth } from "./contexts/AuthContext"
import Navbar from './Components/Navbar/Navbar'

const Profile = () => {
    const { currentUser} = useAuth()
    return (
        <div className ='Profile'>
            <Navbar/>
            <div className ='Profile-content'>
                <div className ='image'>
                    <p> {currentUser.email}</p>
                </div>
                
                <form className ='login-form' >
            <input type = 'text' name ='fullname' placeholder = 'Full Name' />  
            <input type = 'text' name ='artistename' placeholder = 'Artiste Name'/>   
            <input type ='email' name ='email' placeholder ='Email' />
            <input type ='password' name ='password' placeholder ='Password' />
            </form>
            </div>
        </div>
    )
}

export default Profile
