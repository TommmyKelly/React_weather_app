import React from "react";

const NavBar = () => {
  return (
    <div classNameName='navbar-fixed'>
      <nav>
        <div className='nav-wrapper grey darken-4'>
          <span href='#' className='brand-logo center'>
            <strong>Weather App</strong>
          </span>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a
                className='waves-effect waves-light btn modal-trigger'
                href='#modal1'
              >
                <i className='material-icons'>search</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
