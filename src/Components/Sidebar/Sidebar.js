import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'



import './Sidebar.css'
const Sidebar = () => {
    const {userData} = useAuth()

    return (
        <div className ="Sidebar">
        <div className = "Profile"><Link to ='/Profile'>
            <div className ='Profile-image'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSK_-PJfARbbUnpg7CH_qgALvjn5JungXtg&usqp=CAU'/> </div>
            </Link>
            <h3>{userData}</h3>
            <h4>Ughelli </h4>
           </div>
        <div className = "Sidelinks">
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
    )
}

export default Sidebar
