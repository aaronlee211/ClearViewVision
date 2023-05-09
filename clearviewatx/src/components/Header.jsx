import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <>
    <div className='flex flex-row justify-between my-5'>
      <div>
        <img className='ml-5 header-img'src={require("../images/ClearViewLogo.png")} alt=''></img>
      </div>
      <div className='flex flex-row items-center mr-5 header-div'>
          <p className='mr-2 2xl:text-3xl'>Home</p>
          <p className='mr-2 ml-2 2xl:text-3xl'>About</p>
          <p className='mr-2 ml-2 2xl:text-3xl'>Services</p>
          <p className='mr-2 ml-2 2xl:text-3xl'>Contact Us</p>
          <div className='badge badge-outline badge-lg header-div'>
            <p className='mr-2 ml-2 2xl:text-3xl'>Book an Appointment</p>
          </div>
      </div>
    </div>
    <div className='flex justify-center items-center bottom-nav h-14'>
      <p className='banner-nav text-2xl'>Call Us! XXX-XXX-XXXX or Book Online!</p>
    </div>
    </>
  )
}

export default Header
