import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Dashboard from './Dashboard/Dashboard';
import Album from './Album/Album';
import Song from './Song/Song';
import Wallet from './Wallet';
import Profile from './Profile/Profile';
import Analytics from './Analytics';
import Preview from './Song/Preview'
import Sermon from './Sermon/Sermon';
import PreviewSignup from './Signup/PreviewSignup';
import ChurchSignup from './Signup/ChurchSignup'
import ChurchDash from './Dashboard/ChurchDash'
import ChurchLogin from './Login/ChurchLogin'
import SermonPreview from './Sermon/SermonPreview'
import Series from './Series/Series'
import SeriesPreview from './Series/SeriesPreview';

import './App.css'
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
  <Router>
  <AuthProvider>
    <Routes>
  <Route  path='/' element ={<PreviewSignup/>}/>
  <Route path='/Signup' element ={<Signup/>}/>
  <Route path='/Dashboard' element ={<Dashboard/>}/>
  <Route path='/Album' element ={<Album/>}/>
  <Route path='/Song' element ={<Song/>}/>
  <Route path='/Wallet' element ={<Wallet/>}/>
  <Route path='/Profile' element ={<Profile/>}/>
  <Route path='/Analytics' element ={<Analytics/>}/>
  <Route path='/Preview' element ={<Preview/>}/>
  <Route path ='/Sermon' element ={<Sermon/>}/>
  <Route path = '/Login' element={<Login/>}/>
  <Route path = '/ChurchLogin' element={<ChurchLogin/>}/>
  <Route path = '/ChurchSignup' element = {<ChurchSignup/>}/>
  <Route path = '/ChurchDash' element ={<ChurchDash/>}/>
  <Route path = '/SermonPreview' element = {<SermonPreview/>}/>
  <Route path ='/Series' element ={<Series/>}></Route>
  <Route path = '/SeriesPreview' element = {<SeriesPreview/>}/>
</Routes> 
</AuthProvider>
</Router>
  )
}

export default App
