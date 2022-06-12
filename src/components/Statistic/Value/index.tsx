import './styles.scss';

import React from 'react';

interface StatisticValueProps {
  className?: string;
  value: number | string | JSX.Element;
}

const StatisticValue: React.FC<StatisticValueProps> = ({ className = "", value }) => {
  return (
    <div
      className={`statistic-value ${className}`}>
      <p className="value">
        {value}
      </p>
    </div>
  );
}

export default StatisticValue;
