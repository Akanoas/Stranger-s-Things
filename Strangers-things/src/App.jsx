
import { useState } from 'react'
import{Routes, Route} from 'react-router-dom'
import Posts from "./Pages/Posts"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import './Index.css'

function App() {
  const[token, setToken]= useState(localStorage.getItem('token'));

  return (
    <div className='app'>
      <NavBar className='Navbar' token={ token }/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/posts' element={<Posts token={token}/>}  />
        <Route path='/profile' element={<Profile token={token}/>} />
        <Route path='/login' element={<Login setToken={setToken}/>} />
        <Route path='/register' element={<Register setToken={setToken}/>} />
      </Routes>

    </div>
  )
}

export default App
