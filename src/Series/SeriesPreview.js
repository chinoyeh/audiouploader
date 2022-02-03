import React, {useState} from 'react'
import ChurchNav from '../Components/Navbar/ChurchNav'
import ChurchSide from '../Components/Sidebar/ChurchSide'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from 'react-router'


const SeriesPreview = () => {
  
    const [popup, setPopup] = useState('popup-hidden')
    const [title, setTitle] = useState('')
    const [file, setFile] = useState()
    const [date, setDate] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const {uploadSermon, SermonPreview} = useAuth()
    const navigate = useNavigate()
    // var sermonTitle = SermonPreview.title
    // var sermonFile = SermonPreview.file.name
    // var sermonDate = SermonPreview.preacher
    function handleSubmit (e){
        e.preventDefault()
        try {
            setError('')
            setLoading (true)
        //    uploadSermon(title, file, date )
            navigate('/SeriesPreview')
          
          
        } catch (err){
            console.log(err)
            setError('Failed to create an account')
        
        }
        setLoading (false)
    }
    return (
        <div className='album' >
            <ChurchNav/>
            <ChurchSide/>
            <div className='series-content'  >
            <div className ='series-nav'>
                    <ol>
                        <li className ='navlink'>Details</li>
                        <li>Preview</li>
                        <li>Upload</li>
                 
                    </ol>
                </div>
                <div>
                {/* <h4>Sermon Title:  <span>{sermonTitle}</span></h4>
              */}
           
                </div>
                <div className='add-sermon'>
                    <h3 onClick ={()=> setPopup((popup)=>(popup==='popup'?'popup-hidden' : 'popup'))} >Add New Sermon</h3>
                    <div className={popup}>
                        <div className='series-details'>
                    <form className ='series-form' onSubmit={handleSubmit}>
                    <ol>
                        <li>
                            <div className ='series-form'>
                                <h4>Enter Series Title</h4>
                                <input type ='text'  value ={title} onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                        </li>
                       
                        <li>
                        <div className ='series-file'>
                                <h4>File </h4>
                                <input type ='file' onChange={(e)=>setFile(e.target.files[0])}/>
                            </div>
                        </li>
                        <li>
                            <div className ='series-form'>
                                <h4>Enter Date</h4>
                                <input type ='text'  value ={date} onChange={(e)=>setDate(e.target.value)}/>
                            </div>
                        </li>
                       
                     
                        </ol>
                   
                        <div className ='series-button'>
                  <button  type='submit' >
                        Next
                    </button>
                  </div>
                        
                        </form>
                        </div>

                    </div>
                 
                    <h3>Choose from existing</h3>
                </div>
            </div>
 
            
        </div>
    )}

export default SeriesPreview;
