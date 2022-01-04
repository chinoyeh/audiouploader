import React from 'react'
import Navbar from './Components/Navbar/Navbar'

const Album = () => {
    return (
        <div className ='Album'>
            <Navbar/>
            <h1> Create a new Album</h1>
            <ul className ='Album-list'>
                <li><span>1</span> Details</li>
                <li><span>2</span> Upload</li>
                <li><span>3</span> Songs</li>
            </ul>

            
        </div>
    )
}

export default Album
