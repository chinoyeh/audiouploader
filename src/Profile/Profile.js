import React, {useState} from 'react'
import { useAuth } from "../contexts/AuthContext"
import Navbar from '../Components/Navbar/Navbar'
import './Profile.css'

const Profile = () => {
    const { uploadProfilePhoto, profilePhotos, userData} = useAuth()
    const [profilePhoto, setProfilePhoto] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    var fullName = userData.fullName
    var artiste = userData.artiste
    function handleSubmit (e){
        e.preventDefault()
        try {
            setError('')
            setLoading (true)
              uploadProfilePhoto( profilePhoto)
              
        } catch (err){
            console.log(err)
            setError('Data not uploaded')
        
        }
        setLoading (false)
    }
    return (
        <div className ='Profile'>
            <Navbar/>
            <div className ='Profile-content'>
                <div className ='Profile-image'>
                    <form onSubmit={handleSubmit}>
                        <img src ={profilePhotos} alt ='Profile Photo'/>
                   <input type = 'file' onChange={(e)=>setProfilePhoto(e.target.files[0])}/>
                   <button type ='submit'>Edit Profile Image</button>
                   </form>
                </div>
                
                <form className ='Profile-form' >
            <input type = 'text' name ='fullname' placeholder ={fullName} />  
            <input type = 'text' name ='artistename' placeholder = {artiste}/>   
            <input type ='email' name ='email' placeholder ='Email' />
            <input type ='password' name ='password' placeholder ='Password' />
            </form>
            </div>
        </div>
    )
}

export default Profile
