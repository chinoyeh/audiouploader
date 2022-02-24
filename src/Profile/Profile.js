import React, {useState} from 'react'
import { useAuth } from "../contexts/AuthContext"
import Navbar from '../Components/Navbar/Navbar'
import './Profile.css'

const Profile = () => {
    const { uploadProfilePhoto, profilePhotos, userData, currentUser} = useAuth()
    const [profilePhoto, setProfilePhoto] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    var fullName = userData.fullName
    var artiste = userData.artiste
    
   async function handleSubmit (e){
        e.preventDefault()
        // try {
        //     setError('')
        //     setLoading (true)
        //     await  uploadProfilePhoto( profilePhoto)
              
        // } catch (err){
        //     console.log(err)
        //     setError('Data not uploaded')
        
        // }
        // setLoading (false)
    }
    return (
        <div className ='Profile'>
            <Navbar/>
            <div className ='Profile-content'>
                <div className ='Profile-image'>
                    <form onSubmit={handleSubmit}>
                        <img src ={profilePhotos} alt ='Profile Photo'/>
                   <input type = 'file' onChange={(e)=>setProfilePhoto(e.target.files[0])}/>
                   <input type = 'text' name ='fullname' placeholder ={fullName} />  
            <input type = 'text' name ='artistename' placeholder = {artiste}/>   
            <input type ='email' name ='email' placeholder ='Email' />
            <input type ='password' name ='password' placeholder ='Password' />
                   <button type ='submit'>Edit Profile Image</button>
                   </form>
                </div>

            </div>

        </div>
    )
}

export default Profile
