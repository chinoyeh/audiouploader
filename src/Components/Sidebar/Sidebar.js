import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'



import './Sidebar.css'
const Sidebar = () => {
    const {userData, profilePhotos} = useAuth()
    var artiste = userData?.artiste

    return (
        <div className ="Sidebar">
        <div className = "SideProfile"><Link to ='/Profile'>
            <div className ='SideProfile-image'><img src ={profilePhotos} alt =''/> </div>
            </Link>
            <h3>{artiste}</h3>
            <h4>Ughelli </h4>
           </div>
        <div className = "Sidelinks">
            <ul>
                <li> <Link  to ='/Dashboard'>Dashboard</Link></li>
                <li> <Link to ='/Wallet'> Wallet</Link></li>
                <li> <Link to ='/Analytics'> Analytics</Link></li>
                  <li><Link to ='/Song'>Upload Song</Link> </li>
                  <li><Link to ='/Album'>Upload Album</Link> </li>
                
                  
            </ul>
        </div>
     
           
    </div>
    )
}

export default Sidebar
