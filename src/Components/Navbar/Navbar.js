import React, {useState} from 'react'
import './Navbar.css'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
    const [error, setError] = useState("")
    const {  logout, userData } = useAuth()
    const navigate = useNavigate();

    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        navigate("/")
      } catch {
        setError("Failed to log out")
      }
    }

    return (
        <div className ="Navbar">
           <div className ='Logo'><i className ="soundcloud icon"/></div>
           <div className ='navlinks'>
           <ul>
                <li style={{paddingTop:'0px'}}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSK_-PJfARbbUnpg7CH_qgALvjn5JungXtg&usqp=CAU'/></li>
                <li><Link to ='/Profile'>{userData}</Link></li>
                <li> <button variant="link" onClick={handleLogout}>Logout</button></li>
            </ul>
     
           </div>
    
            </div>
         
               
  
    )
}

export default Navbar

