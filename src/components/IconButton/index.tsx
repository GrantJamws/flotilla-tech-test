import './styles.scss';

import React from 'react';

import { Menu } from 'grommet-icons';

interface IconButtonProps {
  className?: string;
  icon: JSX.Element;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ className = "", icon, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`icon-button ${className}`}>
      {icon}
    </button>
  );
}

export default IconButton;
