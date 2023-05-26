import React from 'react'
import '../css/Footer.css'
import { ExternalLink } from 'react-external-link';
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="w-full h-fit footer py-10 px-20" id="footerBackground">
        <div>
          <img className='m5-5 footer-img' src={require("../images/ClearViewLogo.png")} alt=''></img>
          <p className="footerText">
            &copy; 2023 ClearView Vision ATX.<br />
            All rights reserved.
          </p>
        </div>
        <div>
          <span className="footerTitle text-2xl">Resources</span>
          <a className="link link-hover footerText">Insurance Plans</a>
          <a className="link link-hover footerText">FAQ's</a>
          <a className="link link-hover footerText">Customer Reviews</a>
        </div>
        <div>
          <span className="footerTitle text-2xl">About ClearView</span>
          <NavLink className="link link-hover footerText" to="/about">
            About Us
          </NavLink>
          {/* <a className="">About Us</a> */}
          <a className="link link-hover footerText">Our Services</a>
          <a className="link link-hover footerText">Contact Us</a>
          <a className="link link-hover footerText">Careers</a>
        </div>
        <div>
          <span className="footerTitle text-2xl">Location & Hours</span>
          <p className="footerText">Address:</p>
          <ExternalLink className="footerText link link-hover"
          href="https://www.google.com/maps/place/ClearView+Vision/@30.2328086,-97.8277622,17z/data=!3m1!4b1!4m6!3m5!1s0x865b4be7ae82f12b:0x7f59bfd2b85a9872!8m2!3d30.2328041!4d-97.8228859!16s%2Fg%2F11khzp9p6g">
            5017 W US 290 Hwy Service Road, Austin, TX 78735 <br/> (located at Walmart)
          </ExternalLink>
          <p className="footerText">
            Hours: <br/>
            Sunday:  Closed<br/>
            Monday:  Closed<br/>
            Tuesday:  10AM - 6PM<br/>
            Wednesday:  10AM - 6PM<br/>
            Thursday:  10AM - 6PM<br/>
            Friday:  10AM - 6PM<br/>
            Saturday:  10AM - 6PM
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
