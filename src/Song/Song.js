import React ,{useRef, useState} from 'react'
import { useAuth } from "../contexts/AuthContext"
import './Song.css'
import { useNavigate } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

const Song = () => {
    const { uploadSongPreview} = useAuth()
    const [art, setArt] = useState('')
    const [title, setTitle] = useState ('')
    const [genre, setGenre] = useState('')
    const [file, setFile] = useState('')
    const [producer, setProducer] = useState('')
    const [writer, setWriter] = useState ('')
    const [lyrics, setLyrics] = useState('')
    const [otherArtiste, setOtherArtiste] = useState('')
    const [date, setDate] = useState('')
 
    const navigate = useNavigate()
 
    const [error, setError] = useState ('')
    const [loading, setLoading] = useState (false)
    function handleSubmit (e){
        e.preventDefault()
    


      
        try {
            setError('')
            setLoading (true)
              uploadSongPreview( art, title,file, producer, writer, lyrics, otherArtiste, date)
          
              navigate('/Preview')
               
          
        } catch (err){
            console.log(err)
            setError('Data not uploaded')
        
        }
        setLoading (false)
    }
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className ='uploadsong-content'>
                <div className ='uploadsong-nav'>
                    <ol>
                        <li className ='navlink'>Details</li>
                        <li>Preview</li>
                        <li>Upload</li>
                    </ol>
                </div>
                <div className ='song-details'>
                    <div className='error'>
                           <p> {error} </p>
                    </div>
                <form className ='song-form' onSubmit ={handleSubmit}>
                    <ol>
                        <li>
                            <div className ='song-cover'>
                                <h4>Select Cover Art</h4>
                                <input type ='file' onChange={(e)=>{setArt(e.target.files[0])}}/>
                                
                            </div>
                        </li>
                        <li>
                            <div className ='song-form'>
                                <h4>Enter Song Title</h4>
                                <input type ='text'  value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-genre'>
                                <h4>Select Genre</h4>
                             
                                <label htmlFor ='christianrock' className ='container'>Christain Rock
                                <input type ='radio' id='christianrock' name ='genre'
                                value ='christianrock'   />
                                <span className="checkmark"></span>
                                </label>
                                

                                <label  htmlFor ='spiritual'  className ='container'>Spiritual
                                <input type ='radio' id='spiritual' name ='genre'
                                value ='spiritual'  />
                                <span className="checkmark"></span>
                                </label>

                                
                                <label htmlFor ='blackgospel' className ='container'>Black Gospel Music
                                <input type ='radio' id='blackgospel' name ='genre'
                                value ='blackgospel'  />
                                <span className="checkmark"></span>
                                </label>
                                
                              
                                <label htmlFor ='hymn' className ='container'>Hymn
                                <input type ='radio' id='hymn' name ='genre'
                                value ='hymn'  />
                                <span className="checkmark"></span>
                                </label>
                           

                                <label htmlFor ='africanamerican' className ='container'>African American Music
                                <input type ='radio' id='africanamerican'name ='genre'
                                value ='africanamerican'  />
                                <span className="checkmark"></span>
                                </label>

                              
                                <label htmlFor ='gospelreggae'  className ='container' >Gospel Reggae
                                <input type ='radio' id='gospelreggae' name ='genre'
                                value ='gospelreggae'  />
                                <span className="checkmark"></span>
                                </label>

                               
                                <label htmlFor ='acapella' className ='container'>Acapella
                                <input type ='radio' id='acapella' name ='genre'
                                value ='acapella'  />
                                <span className="checkmark"></span>
                                </label>

                             
                                <label htmlFor ='nigeriangospel'  className ='container'>Nigerian Gospel
                                <input type ='radio' id='nigeriangospel' name ='genre'
                                value ='nigeriangospel'  />
                                <span className="checkmark"></span>
                                </label>

                                <label htmlFor ='jesusmusic'  className ='container'>Jesus Music
                                <input type ='radio' id='jesusmusic' name ='genre'
                                value ='jesusmusic'  />
                                <span className="checkmark" ></span>
                                </label>

                             
                                <label htmlFor ='cac' className ='container'>Christain Adult Contemporary
                                <input type ='radio' id='cac'name ='genre'
                                value ='cac'  />
                                <span className="checkmark" ></span>
                                </label>

                                <label htmlFor ='traditionalgospel' className ='container'>Traditional Gospel
                                <input type ='radio' id='traditionalgospel' name ='genre'
                                value ='traditionalgospel'  />
                                <span className="checkmark" ></span>
                                </label>

                              
                                <label htmlFor ='car' className ='container'>Christain Alternative Rock
                                <input type ='radio' id='car'name ='genre'
                                value ='car'  />
                                <span className="checkmark" ></span>
                                </label>

                              
                                <label htmlFor ='gospelblues'  className ='container'>Gospel Blues
                                <input type ='radio' id='gospelblues'name ='genre'
                                value ='gospelblues'  />
                                <span className="checkmark" ></span>
                                </label>

                                <label htmlFor ='christianhiphop' className ='container'>Christian Hip-Hop
                                 
                                <input type ='radio' id='christianhiphop' name ='genre'
                                value ='christianhiphop'  />
                                <span className="checkmark" ></span>
                                </label>

                                
                                
                                <label htmlFor ='cwm'  className ='container'>Contemporary Worship Muscic
                                <input type ='radio' id='cwm' name ='genre'
                                value ='cwm'  />
                                <span className="checkmark" ></span>
                                </label>
                                
                              
                                <label htmlFor ='ccm' className ='container'>Christain Country Music
                                <input type ='radio' id='ccm' name ='genre'
                                value ='ccm'  />
                                <span className="checkmark"></span>
                                </label>

                              
                                <label htmlFor ='ucm'className ='container'>Urban Contemporary Music
                                <input type ='radio' id='ucm' name ='genre'
                                value ='ucm'  />
                                <span className="checkmark"></span>
                                </label>

                                <label htmlFor ='tbg' className ='container'>Traditional Black Gospel
                                <input type ='radio' id='tbg' name ='genre'
                                value ='tbg'  />
                                <span className="checkmark" ></span>
                                </label>

                                
                     
                               
                            </div>
                        </li>
                        <li>
                        <div className ='song-file'>
                                <h4>Select Song File</h4>
                                <input type ='file'   onChange={(e)=>{setFile(e.target.files[0])}} />
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Producer</h4>
                                <input type ='text'    value={producer} onChange={(e)=>{setProducer(e.target.value)}}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Writer(s)</h4>
                                <input type ='text'   value={writer} onChange={(e)=>{setWriter(e.target.value)}}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Lyrics</h4>
                                <input type ='text'   value={lyrics} onChange={(e)=>{setLyrics(e.target.value)}}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4> Add Other Artiste</h4>
                                <input type ='text'  value={otherArtiste} onChange={(e)=>{setOtherArtiste(e.target.value)}}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Date of Release</h4>
                                <input type ='text'   value={date} onChange={(e)=>{setDate(e.target.value)}}/>
                            </div>
                        </li>
                    </ol>
                  <div className ='preview-button'>
                  <button  type='submit' >
                        Preview
                    </button>
                  </div>
                    </form>
               

              
                </div>
               
                </div>
    
           
           
           

            </div>
            
      
    )
}

export default Song
