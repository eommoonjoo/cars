import React from 'react';
import { CompanyWrapper } from '../styles/styles';

interface IProps {
  color: any;
  onColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Company: React.FC<IProps> = ({ color, onColor }) => {
  return (
    <CompanyWrapper>
      <div
        className={`${color.className}`}
        onClick={
          () => onColor(color)
          //
        }>
        {color.name}
      </div>
    </CompanyWrapper>
  );
};

export default Company;
