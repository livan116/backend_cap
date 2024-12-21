import React, { useEffect } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }
 
  return (
    <div className='header'>
        <div className="name">
            Job Finder
        </div>
        <div className="logout_name">
            <button onClick={handleLogout}>{}Logout</button>
            <div className="userN">hello world</div>
            <div className='image'></div>

        </div>
    </div>
  )
}

export default Header