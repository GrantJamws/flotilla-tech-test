import './styles.scss';

import React from 'react';

import { Menu } from 'grommet-icons';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className = "" }) => {
  return (
    <header
      className={`navbar ${className}`}>
      <Menu 
        className="menu-icon" />
      <h1>
        Flotilla
      </h1>
    </header>
  );
}

export default NavBar;
