import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import {  useNavigate } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import './Song.css'

const Preview = () => {
    const { uploadSong, songPreview, songArt} = useAuth()
    var art = songPreview.image
    var songTitle = songPreview.title
    var file = songPreview.file
    var producer = songPreview.producer
    var writer = songPreview.writer
    var lyrics = songPreview.lyrics
    var otherArtiste = songPreview.otherArtiste
    var date =songPreview.date
    var fileName = songPreview.file.name
    const navigate = useNavigate()
 
    const [error, setError] = useState ('')
    const [loading, setLoading] = useState (false)
    function upload (e){
        e.preventDefault()
       
        try {
            setError('')
            setLoading (true)
           uploadSong(art,songTitle,file,producer,writer, lyrics, otherArtiste,date )
            navigate('/Song')
          
          
        } catch (err){
            console.log(err)
            setError('Failed to create an account')
        
        }
        setLoading (false)
    }

    
    return (
        <div className ='preview'>
            <Navbar/>
            <Sidebar/>
            <div className ='uploadsong-content'>
                <div className ='uploadsong-nav'>
                    <ol>
                        <li >Details</li>
                        <li className ='navlink'>Preview</li>
                        <li>Upload</li>
                    </ol>
                </div>
             <div className ='preview-content'>
             <div className ='song-cover'>
                
                <img src= {songArt} alt ='cover-art'/>
                </div>
                <div className ='song-preview'>
              
                 <h4>Song Title:  <span>{songTitle}</span></h4>
                    {/* <h4>Song Genre:  <span>{genre}</span></h4> */}
                    <h4>File : <span>{fileName}</span></h4>
                    <h4>Song Producer:  <span>{producer}</span></h4>
                    <h4>Song Writer:  <span>{writer}</span></h4>
                    <h4> Other Artiste:  <span>{otherArtiste}</span></h4>
                    <h4>Date of Release:  <span>{date}</span></h4>
         

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
