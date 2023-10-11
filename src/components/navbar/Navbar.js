import React, { useState } from 'react'
import './navbar.css'
import logoImg from '../../assets/logo.png'
import { Link } from 'react-scroll'
import AdminOnlyRoute from '../adminOnlyRoute/AdminOnlyRoute'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { toast } from 'react-toastify'
import { auth } from '../firebase/config'
import ShowOnLogin, { ShowOnLogOut } from '../hiddenLinks/HiddenLink'
import closeIcon from '../../assets/close.png'
import menuIcon  from '../../assets/menu.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [color, setColor] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 700) {
      setColor(true)
    } else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    toast.success('Successful...')
  }).catch((error) => {
    toast.error(error.message)
  });
  }

  const handleLogout = () => {
    signOut(auth)
    toast.success('successfully signout.')
  }

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  const closeMenu = () => {
    setShowMenu(false)
  }
  return (
    <section className={color ? 'navbar-section backgroundBg' : 'navbar-section' }>
        <div className='navbar'>
        <NavLink to="/" className='logo'>
            <img src={logoImg} alt=''/>
            <span><h1>KLEM - ELECTRICAL</h1>ENGINEERING</span>
        </NavLink>
        <nav className='navDestopMenu'>
          <AdminOnlyRoute>
          <button className='admin'>Admin</button>
          </AdminOnlyRoute>
           <NavLink to="/" className='desktopListItem'>Home</NavLink>
           <Link className='desktopListItem'>About us</Link>
           <Link className='desktopListItem'>Services</Link>
           <NavLink to='/my-works' className='desktopListItem'>Our Work</NavLink>
           <NavLink to="/contact" className='desktopListItem'>Contact</NavLink>
          <ShowOnLogOut>

           <button
            className='loginBtn'
            onClick={signInWithGoogle}>
              AdminOnly
            </button>
           </ShowOnLogOut>

              <ShowOnLogin>
              <button className='logoutBtn'
              onClick={handleLogout}
              >Logout</button>
              </ShowOnLogin>
        </nav>

        <div className='contactBtn'>
            <p>070-670-057-59</p>
            <div>
            <NavLink to="/contact" className='contactInfoBtn'>Contact us</NavLink>
            </div>
        </div>

     { showMenu ? 
     <img src={closeIcon} 
     alt='close' 
     className='menu' 
     onClick={handleShowMenu} /> :
        <img 
        className='menu'  
        src={menuIcon} 
        alt='logo' 
        onClick={handleShowMenu}/>
      }
    
      <div className='mobileWrapperMenu'>
      </div>
        <div
        onClick={closeMenu}
         className={showMenu ? 'mobileMenu activeMenu' : 'mobileMenu'}>
          <AdminOnlyRoute>
          <button className='admin'>Admin</button>
          </AdminOnlyRoute>
           <NavLink to="/" className='mobileListItem'>Home</NavLink>
           <NavLink  className='mobileListItem'>About us</NavLink>
           <NavLink  className='mobileListItem'>Services</NavLink>
           <NavLink to="my-works"  className='mobileListItem'>Our Work</NavLink>
           <NavLink to="/contact" className='mobileListItem'>Contact</NavLink>
          <ShowOnLogOut>

           <button
            className='loginBtn'
            onClick={signInWithGoogle}>
              AdminOnly
            </button>
           </ShowOnLogOut>

              <ShowOnLogin>
              <button className='logoutBtn'
              onClick={handleLogout}
              >Logout</button>
              </ShowOnLogin>

              <div className='contactMobileBtn'>
            <span>070-670-057-59</span>
            <div>
            <button className='contactInfoBtn'>Contact us</button>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Navbar