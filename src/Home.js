import React , { useState } from 'react'
import Navbar from './Navbar'
import { useAuth } from "./contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
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
        <div className ='Home'>
         <div className>Profile</div>
         <Navbar/>
         <div className ='chart'>
           <div className = 'total'>    
            <div className = 'earning'>
             <h5>Total earning</h5>
             <h3>Amount</h3>
             <h6>date</h6>
             <h6>Last Earning</h6>
            </div>
           <div className = 'streams'>
           <h5>Total Streams</h5>
             <h3>Amount</h3>
             <h6>date</h6>
             <h6>Last Stream</h6>
           </div>
           </div>
           <div className = 'graph'></div>
         </div>
         <h4> Top Songs </h4>
         <div>

         </div>
         <h4> Top Albums </h4>
         <div>
           
         </div>
    
          

            <button variant="link" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
