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
                                <label class="container">One
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">One
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">One
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span class="checkmark"></span>
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
