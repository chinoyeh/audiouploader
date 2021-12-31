import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup';
import Home from './Home';
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
</Routes> 
</AuthProvider>
</Router>
  )
}

export default App
