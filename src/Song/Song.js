import React ,{useRef, useState} from 'react'
import { useAuth } from "../contexts/AuthContext"
import './Song.css'
import { Navigate, useNavigate } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

const Song = () => {
    const {uploadSong, currentUser} = useAuth()
    const artRef = useRef()
    const titleRef = useRef()
    const genreRef = useRef()
    const fileRef = useRef()
    const producerRef = useRef()
    const writerRef = useRef()
    const lyricsRef = useRef()
    const dateRef = useRef()
    const navigate = useNavigate()
 
    const [error, setError] = useState ('')
    const [loading, setLoading] = useState (false)
    function handleSubmit (e){
        e.preventDefault()
        //  console.log(currentUser)
        //  return
        try {
            setError('')
            setLoading (true)
           uploadSong( currentUser.uid,artRef.current.value,titleRef.current.value,genreRef.current.value, fileRef.current.value,producerRef.current.value, writerRef.current.value, lyricsRef.current.value,dateRef.current.value)
            navigate('/Preview')
          
          
        } catch (err){
            console.log(err)
            setError('Failed to create an account')
        
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
                <form className ='song-form' onSubmit ={handleSubmit}>
                    <ol>
                        <li>
                            <div className ='song-cover'>
                                <h4>Select Cover Art</h4>
                                <input type ='file' multiple accept ='image/*' ref={artRef}/>
                            </div>
                        </li>
                        <li>
                            <div className ='song-form'>
                                <h4>Enter Song Title</h4>
                                <input type ='text'  ref={titleRef}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-genre'>
                                <h4>Select Genre</h4>
                             
                                <label for ='christianrock' className ='container'>Christain Rock
                                <input type ='radio' id='christianrock' name ='genre'
                                value ='christianrock'  ref={genreRef} />
                                <span className="checkmark"></span>
                                </label>
                                

                                <label  for ='spiritual'  className ='container'>Spiritual
                                <input type ='radio' id='spiritual' name ='genre'
                                value ='spiritual'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                                
                                <label for ='blackgospel' className ='container'>Black Gospel Music
                                <input type ='radio' id='blackgospel' name ='genre'
                                value ='blackgospel'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>
                                
                              
                                <label for ='hymn' className ='container'>Hymn
                                <input type ='radio' id='hymn' name ='genre'
                                value ='hymn'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>
                           

                                <label for ='africanamerican' className ='container'>African American Music
                                <input type ='radio' id='africanamerican'name ='genre'
                                value ='africanamerican'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                              
                                <label for ='gospelreggae'  className ='container' >Gospel Reggae
                                <input type ='radio' id='gospelreggae' name ='genre'
                                value ='gospelreggae'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                               
                                <label for ='acapella' className ='container'>Acapella
                                <input type ='radio' id='acapella' name ='genre'
                                value ='acapella'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                             
                                <label for ='nigeriangospel'  className ='container'>Nigerian Gospel
                                <input type ='radio' id='nigeriangospel' name ='genre'
                                value ='nigeriangospel'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                                <label for ='jesusmusic'  className ='container'>Jesus Music
                                <input type ='radio' id='jesusmusic' name ='genre'
                                value ='jesusmusic'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                             
                                <label for ='cac' className ='container'>Christain Adult Contemporary
                                <input type ='radio' id='cac'name ='genre'
                                value ='cac'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                                <label for ='traditionalgospel' className ='container'>Traditional Gospel
                                <input type ='radio' id='traditionalgospel' name ='genre'
                                value ='traditionalgospel'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                              
                                <label for ='car' className ='container'>Christain Alternative Rock
                                <input type ='radio' id='car'name ='genre'
                                value ='car'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                              
                                <label for ='gospelblues'  className ='container'>Gospel Blues
                                <input type ='radio' id='gospelblues'name ='genre'
                                value ='gospelblues'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                                <label for ='christianhiphop' className ='container'>Christian Hip-Hop
                                 
                                <input type ='radio' id='christianhiphop' name ='genre'
                                value ='christianhiphop'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                                
                                
                                <label for ='cwm'  className ='container'>Contemporary Worship Muscic
                                <input type ='radio' id='cwm' name ='genre'
                                value ='cwm'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>
                                
                              
                                <label for ='ccm' className ='container'>Christain Country Music
                                <input type ='radio' id='ccm' name ='genre'
                                value ='ccm'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                              
                                <label for ='ucm'className ='container'>Urban Contemporary Music
                                <input type ='radio' id='ucm' name ='genre'
                                value ='ucm'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                                <label for ='tbg' className ='container'>Traditional Black Gospel
                                <input type ='radio' id='tbg' name ='genre'
                                value ='tbg'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                                
                     
                               
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Select Song File</h4>
                                <input type ='text'  ref={fileRef}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Producer</h4>
                                <input type ='text'  ref={producerRef}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Writer(s)</h4>
                                <input type ='text' ref={writerRef}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Lyrics</h4>
                                <input type ='text'  ref={lyricsRef}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4> Add Other Artiste</h4>
                                <input type ='text'/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Date of Release</h4>
                                <input type ='text'  ref={dateRef}/>
                            </div>
                        </li>
                    </ol>
                  <div className ='preview-button'>
                  <button type='submit' >
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
