import { useState } from 'react'
import './App.css'
import{Routes, Route} from 'react-router-dom'
import Posts from "./Pages/Posts"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'

function App() {
  

  return (
    <div>
      <Routes>
          <Route path='/posts' element={<Posts />}  />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
      </Routes>

    </div>
  )
}

export default App
