import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="doctors">Doctors</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="location">Location</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
