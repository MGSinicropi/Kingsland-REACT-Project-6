//type RFCE to automatically import React from 'react'

import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Buttons/Buttons";
import './Navbar.css';

//returns values that can be updated later

// when menu is clicked goes from hamburger menu to bars

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  // function to setClick and enable the toggling of hamburger menu on click (useState)
  const handleClick = () => setClick(!click);

  // When option in menu is clicked the menu should disappear
  const closeMobileMenu = () => setClick(false);

//functoin to display button on page according to screensize(fulpage or responsive)

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    } else{
        setButton(true);
    }
};

// Hide my button in navbar if pge elements dont load in time
 useEffect(() => {
     showButton();
    
 },[]);
    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            I AM ONE MEDIA   <i className="fas fa-microphone-alt" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/platforms"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Platforms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/niches"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Niches
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/SignUp"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Signup
              </Link>
              <Link
                to="/Login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Become ONE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
