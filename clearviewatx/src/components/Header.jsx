import React from 'react'
import '../css/Header.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'


function Header() {
  const [activeTag, setActiveTag] = useState(0);

  const handleClick = (value) => {
    setActiveTag(value);
  };

  return (
    <>
    <div className='flex flex-row justify-between py-5 navbar-bg'>
      <div>
        <img className='ml-5 header-img'src={require("../images/ClearViewLogo.png")} alt=''></img>
      </div>
      <div className='flex flex-row items-center mr-5 headercontainer'>
          <NavLink className="navlink-header" to="/">
            <p className={`mr-2 2xl:text-3xl ${activeTag === 0 ? 'active' : ''}`} onClick={() => {handleClick(0)}}>Home</p>
          </NavLink>
          <NavLink className="navlink-header" to="about">
            <p className={`mr-2 ml-2 2xl:text-3xl ${activeTag === 1 ? 'active' : ''}`} onClick={() => {handleClick(1)}}>About</p>
          </NavLink>
          <NavLink className="navlink-header" to="services">
            <p className={`mr-2 ml-2 2xl:text-3xl ${activeTag === 2 ? 'active' : ''}`} onClick={() => {handleClick(2)}}>Services</p>
          </NavLink>
          <NavLink className="navlink-header" to="contact">
            <p className={`mr-2 ml-2 2xl:text-3xl ${activeTag === 3 ? 'active' : ''}`} onClick={() => {handleClick(3)}}>Contact Us</p>
          </NavLink>
          <div className='badge badge-outline badge-lg header-div'>
            <p className='mr-2 ml-2 2xl:text-3xl' onClick={handleClick}>Book an Appointment</p>
          </div>
      </div>
    </div>
    <div className='flex justify-center items-center bottom-nav h-14'>
      <p className='banner-nav text-2xl'>Text or call us at 512-957-6001 or <NavLink className="navlink-header underline" to="book">book online</NavLink>! &nbsp; HABLAMOS ESPAÑOL</p>
    </div>
    </>
  )
}

export default Header
