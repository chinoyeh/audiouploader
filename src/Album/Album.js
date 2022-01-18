import React ,{useState}from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Popup from './Popup'
import './Album.css'


const Album = () => {
    const [loading, setLoading] = useState(false)
    const togglePopup =()=>{
        setLoading(!loading)
    }
    return (
        <div className='album'>
            <Navbar/>
            <Sidebar/>
            <div className='album-content'>
            <div className ='uploadsong-nav'>
                    <ol>
                        <li className ='navlink'>Details</li>
                        <li>Preview</li>
                        <li>Upload</li>
                 
                    </ol>
                </div>
                <div className='add-song'>
                    <h3 onClick ={togglePopup} >Add New Song</h3>
                    {loading && <Popup/>}
                    <h3>Choose from existing</h3>
                </div>
            </div>
 
            
        </div>
    )
}

export default Album
