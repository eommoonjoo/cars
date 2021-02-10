import React from 'react';
import { SelectWrapper, SelectNavbar, SelectTitle } from '../styles/styles';
import CarsInformation from '../components/CarInformation';

const Select = () => {
  return (
    <SelectWrapper>
      <SelectNavbar />
      <SelectTitle>
        <div className='titleName'>똑똑한 중고차</div>
      </SelectTitle>
      <CarsInformation />
    </SelectWrapper>
  );
};

export default Select;
