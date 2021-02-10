import React, { useState } from 'react';
import { CarsInformationWrapper } from '../styles/styles';
import AccidentsHistory from './AccidentsHistory';
import FixHistory from './FixHistory';
import Companys from './Companys';
import CarsImage from './CarsImage';

const CarsInformation = () => {
  const [collapse, setCollapse] = useState(false);
  const [rotate, setRotate] = useState('arrowInactive');

  const onToggle = () => {
    setCollapse(!collapse);
    setRotate(collapse ? 'arrowInactive' : 'arrowActive');
  };

  return (
    <CarsInformationWrapper>
      <div className='carsInformationMain'>
        <div className='carsInformationTitle'>중고차 1 정보</div>
        <img
          className={`${rotate}`}
          onClick={onToggle}
          src='/images/arrow.png'
          alt='클릭해주세요.'
        />
      </div>
      <div>
        {collapse && (
          <>
            <AccidentsHistory />
            <FixHistory />
            <Companys />
            <CarsImage />
          </>
        )}
      </div>
    </CarsInformationWrapper>
  );
};

export default CarsInformation;
