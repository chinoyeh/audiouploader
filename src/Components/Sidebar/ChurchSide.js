import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'



import './Sidebar.css'
const Sidebar = () => {
    const {churchData} = useAuth()

 
    var churchName = churchData?.churchName
    console.log (churchName)
 
    return (
        <div className ="Sidebar">
        <div className = "SideProfile"><Link to ='/Profile'>
            <div className ='SideProfile-image'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSK_-PJfARbbUnpg7CH_qgALvjn5JungXtg&usqp=CAU'/> </div>
            </Link>
            <h3>{churchName}</h3>
            <h4>Ughelli </h4>
           </div>
        <div className = "Sidelinks">
            <ul>
                <li> <Link  to ='/ChurchDash'>Dashboard</Link></li>
                <li> <Link to ='/Wallet'> Wallet</Link></li>
                <li> <Link to ='/Analytics'> Analytics</Link></li>
                <li> <Link to ='/Sermon'>Upload Sermon</Link></li>
                <li> <Link to ='/Series'>Upload Series</Link></li>
              
                
                  
            </ul>
        </div>
     
           
    </div>
    )
}

export default Sidebar
