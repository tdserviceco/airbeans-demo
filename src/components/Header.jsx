import React from 'react';
import Cart from './Cart';
import { useSelector } from 'react-redux';

import MenuNavigation from './MenuNavigation';
function Header(props) {
  const displayHeader = useSelector(state => state.headerDisplay);

  return (

    <header className={`${displayHeader ? 'adapt' : 'non-adapt'} header-container`}>
      {window.location.pathname !== '/about' &&
        <>
          <MenuNavigation />
          <Cart />
        </>
      }
      {window.location.pathname === '/about' &&
        <>
          <MenuNavigation />
        </>
      }
    </header>
  );
}

export default Header;