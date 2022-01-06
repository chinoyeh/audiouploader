import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import './Analytics.css'

const Analytics = () => {
    return (
        <div className ='Analytics'>
            <Navbar/>
            <Sidebar/>
            <div className ='analytics-content'>
                <div className ='tops'>
                    <div className ='ratings'>
                        <h4>Total Streams</h4>
                        <h3>60,000</h3>
                    </div>
                    <div className ='ratings'>
                        <h4>Total Streams</h4>
                        <h3>60,000</h3>
                    </div>
                    <div className ='ratings'>
                        <h4>Total Streams</h4>
                        <h3>60,000</h3>
                    </div>
                    <div className ='ratings'>
                        <h4>Total Streams</h4>
                        <h3>60,000</h3>
                    </div>
                    <div className ='ratings'>
                        <h4>Total Streams</h4>
                        <h3>60,000</h3>
                    </div>
                    <div className ='ratings'>
                        <h4>Total Streams</h4>
                        <h3>60,000</h3>
                    </div>

                </div>
            </div>
            
            
        </div>
    )
}

export default Analytics
