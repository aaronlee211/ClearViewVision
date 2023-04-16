import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <img id="navbar-logo" src={require("../images/ClearViewLogo.png")}></img>
          <ul className="bar">

            {/* This style is to move to a different page */}
            <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>

            {/* This style is to move to a different page */}
            <li className="nav-item">
                <NavLink className="nav-link active" to="doctors">Doctors</NavLink>
            </li>

            {/* This style is to move to a component div on the same page */}
            <li>
              <Link to="reviews" onClick={openBar} activeClass="active" spy={true} smooth={true} duration={1000}>
                Reviews
              </Link>
            </li>

            {/* This style is to move to a different page */}
            <li className="nav-item">
                <NavLink className="nav-link active" to="contact">Contact</NavLink>
            </li>

          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
