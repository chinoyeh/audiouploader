import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Dashboard from './Dashboard/Dashboard';
import Album from './Album';
import Song from './Song/Song';
import Wallet from './Wallet';
import Profile from './Profile';
import Analytics from './Analytics';
import User from './Signup/User'
import Preview from './Song/Preview'
import './App.css'
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
  <Router>
  <AuthProvider>
    <Routes>
  <Route  path='/' element ={<Login/>}/>
  <Route path='/Signup' element ={<Signup/>}/>
  <Route path='/User' element ={<User/>}/>
  <Route path='/Dashboard' element ={<Dashboard/>}/>
  <Route path='/Album' element ={<Album/>}/>
  <Route path='/Song' element ={<Song/>}/>
  <Route path='/Wallet' element ={<Wallet/>}/>
  <Route path='/Profile' element ={<Profile/>}/>
  <Route path='/Analytics' element ={<Analytics/>}/>
  <Route path='/Preview' element ={<Preview/>}/>
</Routes> 
</AuthProvider>
</Router>
  )
}

export default App
