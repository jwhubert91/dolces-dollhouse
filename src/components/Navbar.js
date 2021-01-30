import React from 'react';
import './Navbar.css';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className='navbar'>
      <Logo isNavbarLogo={true} />
    </nav>
  );
}

export default Navbar;
