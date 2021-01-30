import React from 'react';
import './Logo.css';
import dollhouseLogoPng from '../images/dollhouse_png_optimized.png';

function Logo(props) {
  const {isNavbarLogo} = props;

  const logoClasses = isNavbarLogo ? 'logo-text navbar-logo' : 'logo-text';

  return (
    <span className={logoClasses}>
      <img src={dollhouseLogoPng} alt='logo' />
    </span>
  );
}

export default Logo;
