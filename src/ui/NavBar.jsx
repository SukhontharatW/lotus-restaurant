import { useRef } from "react";
import imgLogo from "../img/logo/logo-primary.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const navRef = useRef();

  const enableNavBar = () => {
    navRef.current.classList.toggle("navbar__responsive");
  };
  return (
    <div className="navbar">
      <div className="navbar__container">
        <a href="#" className="logo">
          <img src={imgLogo} alt="primary-logo" />
        </a>
        <div className="navbar__contect">
          <ul ref={navRef} className="navbar__main">
            <li className="navbar__list">
              <a onClick={enableNavBar} href="#" className="navbar__link">
                Home
              </a>
            </li>
            <li className="navbar__list">
              <a onClick={enableNavBar} href="#menu" className="navbar__link">
                Menu
              </a>
            </li>
            <li className="navbar__list">
              <a onClick={enableNavBar} href="#story" className="navbar__link">
                Testimonial
              </a>
            </li>
            <li className="navbar__list">
              <a
                onClick={enableNavBar}
                href="#booking"
                className="navbar__link"
              >
                Reservation
              </a>
            </li>
            <button
              className="navbar__menu navbar__menu-close"
              onClick={enableNavBar}
            >
              <FaTimes />
            </button>
          </ul>
          <button className="navbar__menu" onClick={enableNavBar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
