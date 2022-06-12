import './styles.scss';

import React from 'react';

import { Menu } from 'grommet-icons';
import { Chart } from 'grommet';
import { CompanyYearEndData } from '../../types';
import { ColorType, ThicknessType } from 'grommet/utils';

interface EmployeesPerYearProps {
  className?: string;
  yearEndData?: CompanyYearEndData[];
}

const EmployeesPerYear: React.FC<EmployeesPerYearProps> = ({ className = "", yearEndData }) => {
  const values: (number | number[] | { color?: ColorType; label?: string | undefined; onClick?: ((...args: any[]) => any) | undefined; onHover?: ((...args: any[]) => any) | undefined; opacity?: number | boolean | "strong" | "weak" | "medium" | undefined; thickness?: ThicknessType | undefined; value: number | number[]; })[] | { value: number[]; label: string; }[] = [];
  yearEndData?.forEach((value, index) => {
    values.push({
      value: [index, value.employees],
      label: value.company?.name || ''
    })
  });
  return (
    <Chart
      animate
      round
      values={values}
      aria-label="Employees Per Year Chart"/>
  );
}

export default EmployeesPerYear;
