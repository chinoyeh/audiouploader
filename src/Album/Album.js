import React ,{useState, useRef}from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

import './Album.css'


const Album = () => {
  
    const [popup, setPopup] = useState('popup-hidden')
    const [art, setArt] = useState ('')
    const [title, setTitle] = useState ('')
    const genreRef = useRef()
    const [details, setDetails] = useState('')
    const [producer, setProducer] = useState('')
    const [writer, setWriter] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [otherArtiste, setOtherArtiste] = useState('')
    const [date, setDate] = useState('')

    return (
        <div className='album' >
            <Navbar/>
            <Sidebar/>
            <div className='album-content'  >
            <div className ='uploadsong-nav'>
                    <ol>
                        <li className ='navlink'>Details</li>
                        <li>Preview</li>
                        <li>Upload</li>
                 
                    </ol>
                </div>
                <div className='add-song'>
                    <h3 onClick ={()=> setPopup((popup)=>(popup==='popup'?'popup-hidden' : 'popup'))} >Add New Song</h3>
                    <div className={popup}>
                        <div className='album-details'>
                    <form className ='album-form'>
                    <ol>
                        <li>
                            <div className ='song-cover'>
                                <h4>Select Album Art</h4>
                                <input type ='file'  onChange={(e)=>{setArt(e.target.files[0])}}/>
                            </div>
                        </li>
                        <li>
                            <div className ='song-form'>
                                <h4>Enter Album Title</h4>
                                <input type ='text'  value ={title} onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-genre'>
                                <h4>Select Genre</h4>
                             
                                <label htmlFor ='christianrock' className ='container'>Christain Rock
                                <input type ='radio' id='christianrock' name ='genre'
                                value ='christianrock'  ref={genreRef} />
                                <span className="checkmark"></span>
                                </label>
                                

                                <label  htmlFor ='spiritual'  className ='container'>Spiritual
                                <input type ='radio' id='spiritual' name ='genre'
                                value ='spiritual'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                                
                                <label htmlFor ='blackgospel' className ='container'>Black Gospel Music
                                <input type ='radio' id='blackgospel' name ='genre'
                                value ='blackgospel'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>
                                
                              
                                <label htmlFor ='hymn' className ='container'>Hymn
                                <input type ='radio' id='hymn' name ='genre'
                                value ='hymn'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>
                           

                                <label htmlFor ='africanamerican' className ='container'>African American Music
                                <input type ='radio' id='africanamerican'name ='genre'
                                value ='africanamerican'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                              
                                <label htmlFor ='gospelreggae'  className ='container' >Gospel Reggae
                                <input type ='radio' id='gospelreggae' name ='genre'
                                value ='gospelreggae'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                               
                                <label htmlFor ='acapella' className ='container'>Acapella
                                <input type ='radio' id='acapella' name ='genre'
                                value ='acapella'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                             
                                <label htmlFor ='nigeriangospel'  className ='container'>Nigerian Gospel
                                <input type ='radio' id='nigeriangospel' name ='genre'
                                value ='nigeriangospel'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                                <label htmlFor ='jesusmusic'  className ='container'>Jesus Music
                                <input type ='radio' id='jesusmusic' name ='genre'
                                value ='jesusmusic'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                             
                                <label htmlFor ='cac' className ='container'>Christain Adult Contemporary
                                <input type ='radio' id='cac'name ='genre'
                                value ='cac'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                                <label htmlFor ='traditionalgospel' className ='container'>Traditional Gospel
                                <input type ='radio' id='traditionalgospel' name ='genre'
                                value ='traditionalgospel'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                              
                                <label htmlFor ='car' className ='container'>Christain Alternative Rock
                                <input type ='radio' id='car'name ='genre'
                                value ='car'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                              
                                <label htmlFor ='gospelblues'  className ='container'>Gospel Blues
                                <input type ='radio' id='gospelblues'name ='genre'
                                value ='gospelblues'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                                <label htmlFor ='christianhiphop' className ='container'>Christian Hip-Hop
                                 
                                <input type ='radio' id='christianhiphop' name ='genre'
                                value ='christianhiphop'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                                
                                
                                <label htmlFor ='cwm'  className ='container'>Contemporary Worship Muscic
                                <input type ='radio' id='cwm' name ='genre'
                                value ='cwm'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>
                                
                              
                                <label htmlFor ='ccm' className ='container'>Christain Country Music
                                <input type ='radio' id='ccm' name ='genre'
                                value ='ccm'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                              
                                <label htmlFor ='ucm'className ='container'>Urban Contemporary Music
                                <input type ='radio' id='ucm' name ='genre'
                                value ='ucm'  ref={genreRef}/>
                                <span className="checkmark"></span>
                                </label>

                                <label htmlFor ='tbg' className ='container'>Traditional Black Gospel
                                <input type ='radio' id='tbg' name ='genre'
                                value ='tbg'  ref={genreRef}/>
                                <span className="checkmark" ></span>
                                </label>

                                
                     
                               
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Details</h4>
                                <input type ='file' onChange={(e)=>{setDetails(e.targetfiles[0])}}/>
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
    )
}

export default Album
