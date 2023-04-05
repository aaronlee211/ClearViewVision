import React from 'react'
import { NavLink } from 'react-router-dom'


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg narbar-dark bg-primary" data-bs-theme="dark">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink className="nav-link active" to="doctor">Doctors</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="review">Reviews</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav