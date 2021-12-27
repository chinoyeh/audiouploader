import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Signup from './Signup';
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="Signup" element={<Signup />} />
     
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
