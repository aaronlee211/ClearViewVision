import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/banner.css'


function Banner() {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div id="banner-grid">
            <div id="first-col">
                <img id="banner-logo" src={require("../images/tmpimage.jpg")} />
            </div>
            <div id="second-col">
                <div className='banner-container'>
                    <p>Book an appointment</p>
                </div>
                <div className='banner-container'>
                    <p>956-324-2598</p>
                </div>
                <div className='banner-container'>
                    <p>5017 W US Hwy 290 Service Road, Austin, TX 78735</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Banner
// phone number / book appointment / location
