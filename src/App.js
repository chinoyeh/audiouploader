import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup';
import Home from './Home';
import Album from './Album';
import Song from './Song';
import Wallet from './Wallet';
import Profile from './Profile';
import './App.css'
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
  <Router>
  <AuthProvider>
    <Routes>
  <Route  path='/' element ={<Login/>}/>
  <Route path='/Signup' element ={<Signup/>}/>
  <Route path='/Home' element ={<Home/>}/>
  <Route path='/Album' element ={<Album/>}/>
  <Route path='/Song' element ={<Song/>}/>
  <Route path='/Wallet' element ={<Wallet/>}/>
  <Route path='/Profile' element ={<Profile/>}/>
</Routes> 
</AuthProvider>
</Router>
  )
}

export default App
