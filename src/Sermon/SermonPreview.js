import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import {  useNavigate } from 'react-router'
import ChurchNav from '../Components/Navbar/ChurchNav'
import ChurchSide from '../Components/Sidebar/ChurchSide'
import './Semon.css'

const Preview = () => {
    const {sermonPreview, uploadSermon} = useAuth()
    const title = sermonPreview.title
    const fileName = sermonPreview.file.name
    const file = sermonPreview.file
    const preacher = sermonPreview.preacher
    const date = sermonPreview.date
    const navigate = useNavigate()
 
    const [error, setError] = useState ('')
    const [loading, setLoading] = useState (false)
    function upload (e){
        e.preventDefault()
       
        //  return
        try {
            setError('')
            setLoading (true)
            uploadSermon(title, file, preacher)
            navigate('/ChurchDash')
          
          
        } catch (err){
            console.log(err)
            setError('Failed to create an account')
        
        }
        setLoading (false)
    }

    
    return (
        <div className ='preview'>
            <ChurchNav/>
            <ChurchSide/>
            <div className ='uploadsong-content'>
                <div className ='uploadsong-nav'>
                    <ol>
                        <li >Details</li>
                        <li className ='navlink'>Preview</li>
                        <li>Upload</li>
                    </ol>
                </div>
             <div className ='preview-content'>
                <div className ='song-preview'>
              
                  <h4>Sermon Title:  <span>{title}</span></h4>
             
                    <h4> File Name:  <span>{fileName}</span></h4>
                    <h4>Preacher:  <span>{preacher}</span></h4>
                    {/* <h4> Date: <span>{date}</span></h4> */}
               
         

                </div>
                <div className= 'preview-button'>
                <button onClick={upload}>Upload</button>
                    
                </div>
             </div>
            </div>
         
        </div>
    )
}

export default Preview
