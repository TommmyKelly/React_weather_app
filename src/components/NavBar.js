import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='navbar-fixed'>
      <nav class='nav-wrapper'>
        <div className='nav-wrapper blue-grey darken-3 '>
          <Link to='/'>
            <span
              href='#'
              className='brand-logo left'
              style={{ marginLeft: "30px" }}
            >
              Weather App
            </span>
          </Link>
          <div class='nav-content'>
            <ul className='right '>
              {useLocation().pathname === "/about" ? (
                <li>
                  <Link
                    to=''
                    className='waves-effect waves-light btn modal-trigger'
                  >
                    <strong>Back</strong>
                  </Link>
                </li>
              ) : (
                <li>
                  {" "}
                  <Link
                    to='about'
                    className='waves-effect waves-light btn modal-trigger'
                  >
                    <strong>About</strong>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
