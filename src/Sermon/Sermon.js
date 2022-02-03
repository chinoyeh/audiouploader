import React, {useState} from 'react';
import { useNavigate } from 'react-router'
import { useAuth } from "../contexts/AuthContext"
import ChurchNav from '../Components/Navbar/ChurchNav'
import ChurchSide from '../Components/Sidebar/ChurchSide'
import './Semon.css'

const Sermon = () => {
    const [title ,setTitle] = useState("") 
    const [preacher ,setPreacher] = useState("") 
    const [date, setDate] = useState('')
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [sermonFile ,setSermonFile] = useState() 
    const { uploadSermonPreview} = useAuth()
    const navigate = useNavigate()
 
    function handleSubmit (e){
        e.preventDefault()
        try {
            setError('')
            setLoading (true)
           uploadSermonPreview(title, sermonFile, preacher )
            navigate('/SermonPreview')
          
          
        } catch (err){
            console.log(err)
            setError('Failed to create an account')
        
        }
        setLoading (false)
    }
  return <div className='Sermon'>
   <ChurchNav/>
   <ChurchSide/>
   <div className='Sermon-content'>
         <div className ='Sermon-nav'>
                    <ol>
                        <li className ='navlink'>Details</li>
                        <li>Preview</li>
                        <li>Upload</li>
                    </ol>
        </div>
        
        <div className='sermon-details'>
            <form className='sermon-form' onSubmit={handleSubmit}> 
                <div className='sermon-title'>
                    <h4>Sermon Title</h4>
                    <input type ='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='sermon-file'>
                    <h4>Sermon File</h4>
                    <input type ='file'  onChange={(e)=>{setSermonFile(e.target.files[0])}}/>
                </div>
                <div className='sermon-title'>
                    <h4>Sermon Preacher</h4>
                    <input type ='text' value ={preacher} onChange={(e)=>setPreacher(e.target.value)}/>
                </div>
                {/* <div className='sermon-file'>
                    <h4>Date</h4>
                    <input type ='date' value ={date} onChange={(e)=>{setDate(e.target.files[0])}}/>
                </div> */}
                <div className ='sermon-button'>
                  <button  type='submit' >
                        Preview
                    </button>
                  </div>
            </form>
        </div>
   </div>
  </div>
};

export default Sermon;
