import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../pages/signup.css'
import '../pages/styles/topbar.css'
const Header = () => {
 return (
         <div className="header">
          <img className="header__logo" src={require('../assets/logo.png')} alt="signup logo" />
        </div>
  )
}

export default Header