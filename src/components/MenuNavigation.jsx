import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { headerDisplay } from '../actions';

function MenuNavigation(props) {
  const dispatch = useDispatch();
  const [displayMenu, updateDisplayMenu] = useState(false);

  const toggleCheck = (e) => {
    if (!displayMenu) {
      localStorage.setItem('display', true)
      updateDisplayMenu(true);
      dispatch(headerDisplay(true))

    }
    else {
      localStorage.setItem('display', false)
      updateDisplayMenu(false);
      dispatch(headerDisplay(false))
    }
  }

  return (
    <>
      <div className={`menu-container ${displayMenu ? 'adapt' : 'non-adapt'}`}>
        <button className={`${displayMenu ? 'adapt' : 'non-adapt'} btn navigation`} onClick={toggleCheck}>
          <div className={`${displayMenu ? 'adapt' : 'non-adapt'} nav-icon`}></div>
        </button>
      </div>
      {displayMenu &&
        <div className={`links-box ${displayMenu ? 'adapt' : 'non-adapt'}`}>
          <div className="links-container">
            <ul className="links">
              <li className="link"><Link onClick={toggleCheck} to="/">Meny</Link></li>
              <li className="link"><Link onClick={toggleCheck} to="/about">Vårt Kaffe</Link></li>
            </ul>
          </div>
        </div>
      }
    </>
  );
}

export default MenuNavigation;