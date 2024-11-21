import React from 'react'
import '../css/Header.css'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'


function Header() {
  const [activeTag, setActiveTag] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = (value) => {
    setActiveTag(value);
  };

  const handleScrollToInsurance = () => {
    const insuranceSection = document.getElementById('insurance');
    if (insuranceSection) {
      window.scrollTo({
        top: insuranceSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (activeTag === 3) {
      handleScrollToInsurance();
    }
  }, [activeTag]);

  return (
    <>
      <div className='flex flex-row justify-between py-5 navbar-bg' id="topsection">
        <NavLink className="navlink-header" to="/">
          <div onClick={() => { handleClick(0) }}>
            <img className='ml-5 header-img' src={require("../images/ClearViewLogo.png")} alt="ClearView Vision Austin ATX, Austin Sunset Valley Eye Doctor"></img>
          </div>
        </NavLink>
        <div className='md:flex flex-row items-center mr-5 headercontainer hidden'>
          <NavLink className="navlink-header" to="/">
            <p className={`mr-2 2xl:text-3xl ${activeTag === 0 ? 'active' : ''}`} onClick={() => { handleClick(0) }}>Home</p>
          </NavLink>
          <NavLink className="navlink-header" to="about">
            <p className={`mr-2 ml-2 2xl:text-3xl ${activeTag === 1 ? 'active' : ''}`} onClick={() => { handleClick(1) }}>About</p>
          </NavLink>
          <NavLink className="navlink-header" to="services">
            <p className={`mr-2 ml-2 2xl:text-3xl ${activeTag === 2 ? 'active' : ''}`} onClick={() => { handleClick(2) }}>Services</p>
          </NavLink>
          <NavLink className="navlink-header" to="/services#insurance">
            <p className={`mr-2 ml-2 2xl:text-3xl ${activeTag === 3 ? 'active' : ''}`} onClick={() => { handleClick(3) }}>Insurances</p>
          </NavLink>
          <NavLink className="navlink-header" to="contact">
            <p className={`mr-2 ml-2 2xl:text-3xl ${activeTag === 4 ? 'active' : ''}`} onClick={() => { handleClick(4) }}>Contact Us</p>
          </NavLink>

          <NavLink className="navlink-header" to="book">
            <div className='badge badge-outline badge-lg header-div'>
              <p className='mr-2 ml-2 2xl:text-3xl' onClick={handleClick}>Book an Appointment</p>
            </div>
          </NavLink>
        </div>

        <div className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 my-auto mr-14"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink className="navlink-header" to="/">
                  <p className={`mx-1 2xl:text-3xl`} onClick={() => setIsNavOpen((prev) => !prev)}>Home</p>
                </NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink className="navlink-header" to="about">
                  <p className={`mx-1 2xl:text-3xl`} onClick={() => setIsNavOpen((prev) => !prev)}>About</p>
                </NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink className="navlink-header" to="services">
                  <p className={`mx-1 2xl:text-3xl`} onClick={() => setIsNavOpen((prev) => !prev)}>Services</p>
                </NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink className="navlink-header" to="/services#insurance" onClick={() => { handleScrollToInsurance() }}>
                  <p className={`mx-1 2xl:text-3xl`} onClick={() => setIsNavOpen((prev) => !prev)}>Insurances</p>
                </NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink className="navlink-header" to="contact">
                  <p className={`mx-1 2xl:text-3xl`} onClick={() => setIsNavOpen((prev) => !prev)}>Contact Us</p>
                </NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink className="navlink-header" to="book">
                  <p className={`mx-1 2xl:text-3xl`} onClick={() => setIsNavOpen((prev) => !prev)}>Appointments</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className='flex justify-center items-center bottom-nav h-14'>
        <p className='banner-nav text-base text-center sm:text-2xl'>Text or call us at 512-957-6001 or <NavLink className="navlink-header underline" to="book">book online</NavLink>! &nbsp; HABLAMOS ESPAÑOL</p>
      </div>
    </>
  )
}

export default Header
