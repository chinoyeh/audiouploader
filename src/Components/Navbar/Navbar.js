import React, {useState} from 'react'
import './Navbar.css'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
    const [error, setError] = useState("")
    const [sidebar, setSidebar] = useState ('sidebar-hidden')
    const {  logout, userData,logo, profilePhotos} = useAuth()
    const [loading, setLoading] = useState(true)
   
    const navigate = useNavigate();
    const artiste = userData.artiste

    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        navigate("/")
        setLoading (false)
      } catch {
        setError("Failed to log out")
      }
       
    }


    return (
        <div className ="Navbar">
           <div className ='Logo'>
             <Link to ='/Dashboard'>
               <img src={logo} alt ='Logo'/>
               </Link>
               </div>
          <button className='sidebar-button' onClick={()=> setSidebar((sidebar)=>(sidebar==='sidebar'?'sidebar-hidden':'sidebar'))}>X</button>
            <div className={sidebar}>
            <div className = "nav-sidebar">
            <ul>
                <li> <Link  to ='/Dashboard'>Dashboard</Link></li>
                <li> <Link to ='/Wallet'> Wallet</Link></li>
                <li> <Link to ='/Analytics'> Analytics</Link></li>
                <li> <Link to ='/Profile'>Songs</Link></li>
                  <li><Link to ='/Song'>Upload Song</Link> </li>
                  <li><Link to ='/Album'>Upload Album</Link> </li>
                
                  
            </ul>
        </div>
            </div>
           <div className ='navlinks'>
           <ul>
                <li style={{paddingTop:'0px'}}><img src ={profilePhotos} alt =''/></li>
                <li><Link to ='/Profile'>{artiste}</Link></li>
                <li> <button variant="link" onClick={handleLogout}>Logout</button></li>
            </ul>
     
           </div>
    
            </div>
         
               
  
    )
}

export default Navbar

