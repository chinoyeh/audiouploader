import React from 'react'

import './Song.css'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

const Song = () => {
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
                    <ol>
                        <li>
                            <div className ='song-cover'>
                                <h4>Select Cover Art</h4>
                                <input type ='file' multiple accept ='image/*'/>
                            </div>
                        </li>
                        <li>
                            <div className ='song-form'>
                                <h4>Enter Song Title</h4>
                                <input type ='text'/>
                            </div>
                        </li>
                        <li>
                            <div className ='song-genre'>
                                <h4>Select Genre</h4>
                             
                                <label for ='christianrock' className ='container'>Christain Rock
                                <input type ='radio' id='christianrock' name ='genre'
                                value ='christianrock'/>
                                <span class="checkmark"></span>
                                </label>
                                

                                <label  for ='spiritual'  className ='container'>Spiritual
                                <input type ='radio' id='spiritual' name ='genre'
                                value ='spiritual'/>
                                <span class="checkmark"></span>
                                </label>

                                
                                <label for ='blackgospel' className ='container'>Black Gospel Music
                                <input type ='radio' id='blackgospel' name ='genre'
                                value ='blackgospel'/>
                                <span class="checkmark"></span>
                                </label>
                                
                              
                                <label for ='hymn' className ='container'>Hymn
                                <input type ='radio' id='hymn' name ='genre'
                                value ='hymn'/>
                                <span class="checkmark"></span>
                                </label>
                           

                                <label for ='africanamerican' className ='container'>African American Music
                                <input type ='radio' id='africanamerican'name ='genre'
                                value ='africanamerican'/>
                                <span class="checkmark"></span>
                                </label>

                              
                                <label for ='gospelreggae'  className ='container' >Gospel Reggae
                                <input type ='radio' id='gospelreggae' name ='genre'
                                value ='gospelreggae'/>
                                <span class="checkmark"></span>
                                </label>

                               
                                <label for ='acapella' className ='container'>Acapella
                                <input type ='radio' id='acapella' name ='genre'
                                value ='acapella'/>
                                <span class="checkmark"></span>
                                </label>

                             
                                <label for ='nigeriangospel'  className ='container'>Nigerian Gospel
                                <input type ='radio' id='nigeriangospel' name ='genre'
                                value ='nigeriangospel'/>
                                <span class="checkmark"></span>
                                </label>

                                <label for ='jesusmusic'  className ='container'>Jesus Music
                                <input type ='radio' id='jesusmusic' name ='genre'
                                value ='jesusmusic'/>
                                <span class="checkmark" ></span>
                                </label>

                             
                                <label for ='cac' className ='container'>Christain Adult Contemporary
                                <input type ='radio' id='cac'name ='genre'
                                value ='cac'/>
                                <span class="checkmark" ></span>
                                </label>

                                <label for ='traditionalgospel' className ='container'>Traditional Gospel
                                <input type ='radio' id='traditionalgospel' name ='genre'
                                value ='traditionalgospel'/>
                                <span class="checkmark" ></span>
                                </label>

                              
                                <label for ='car' className ='container'>Christain Alternative Rock
                                <input type ='radio' id='car'name ='genre'
                                value ='car'/>
                                <span class="checkmark" ></span>
                                </label>

                              
                                <label for ='gospelblues'  className ='container'>Gospel Blues
                                <input type ='radio' id='gospelblues'name ='genre'
                                value ='gospelblues'/>
                                <span class="checkmark" ></span>
                                </label>

                                <label for ='christianhiphop' className ='container'>Christian Hip-Hop
                                 
                                <input type ='radio' id='christianhiphop' name ='genre'
                                value ='christianhiphop'/>
                                <span class="checkmark" ></span>
                                </label>

                                
                                
                                <label for ='cwm'  className ='container'>Contemporary Worship Muscic
                                <input type ='radio' id='cwm' name ='genre'
                                value ='cwm'/>
                                <span class="checkmark" ></span>
                                </label>
                                
                              
                                <label for ='ccm' className ='container'>Christain Country Music
                                <input type ='radio' id='ccm' name ='genre'
                                value ='ccm'/>
                                <span class="checkmark"></span>
                                </label>

                              
                                <label for ='ucm'className ='container'>Urban Contemporary Music
                                <input type ='radio' id='ucm' name ='genre'
                                value ='ucm'/>
                                <span class="checkmark"></span>
                                </label>

                                <label for ='tbg' className ='container'>Traditional Black Gospel
                                <input type ='radio' id='tbg' name ='genre'
                                value ='tbg'/>
                                <span class="checkmark" ></span>
                                </label>

                                
                     
                               
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Select Song File</h4>
                                <input type ='text'/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Producer</h4>
                                <input type ='text'/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Writer(s)</h4>
                                <input type ='text'/>
                            </div>
                        </li>
                        <li>
                        <div className ='song-form'>
                                <h4>Enter Song Lyrics</h4>
                                <input type ='text'/>
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
                                <input type ='text'/>
                            </div>
                        </li>
                    </ol>

                </div>
                <div className ='uploadsong-button'>
                    <button type='submit'>
                        Preview
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Song
