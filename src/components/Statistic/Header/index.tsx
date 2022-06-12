import './styles.scss';

import React from 'react';

interface StatisticHeaderProps {
  className?: string;
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
}

const StatisticHeader: React.FC<StatisticHeaderProps> = ({ className = "", title, subtitle }) => {
  return (
    <div
      className={`statistic-header ${className}`}>
      <h3 className="title">
        {title}
      </h3>
      <p className="subtitle">
        {subtitle}
      </p>
    </div>
  );
}

export default StatisticHeader;
