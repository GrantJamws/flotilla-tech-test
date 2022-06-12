import './styles.scss';

import React from 'react';

import { Menu } from 'grommet-icons';

interface StatisticProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
  filled?: boolean;
}

const Statistic: React.FC<StatisticProps> = ({ className = "", children, filled = false }) => {
  return (
    <div
      className={`statistic ${filled && 'statistic-filled'} ${className}`}>
      {children}
    </div>
  );
}

export default Statistic;
