import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className ="Navbar">
            <div className = "Profile"><Link to ='/Profile'>
                <div className ='Profile-image'> </div>
                <h3>Chinoyeh</h3>
                <h4>Ughelli </h4>
                </Link></div>
            <div className = "Navlinks">
                <ul>
                    <li> <Link  to ='/Home'>Dashboard</Link></li>
                    <li> <Link to ='/Wallet'> Wallet</Link></li>
                    <li> <Link to ='/Profile'>Songs</Link></li>
                      <li><Link to ='/Settings'>Upload Song</Link> </li>
                      <li><Link to ='/Settings'>Upload Album</Link> </li>
                    
                      
                </ul>
            </div>
         
               
        </div>
    )
}

export default Navbar

