import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper grey darken-4'>
          <Link to='/'>
            <span href='#' className='brand-logo center'>
              Weather App
            </span>
          </Link>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a
                className='waves-effect waves-light btn modal-trigger'
                href='#modal1'
              >
                <i className='material-icons'>search</i>
              </a>
            </li>
            <li>
              <Link
                to='about'
                className='waves-effect waves-light btn modal-trigger'
                href='#modal1'
              >
                <strong>About</strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
