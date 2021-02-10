import React, { useState } from 'react';
import Company from './Company';
import { CompanysWrapper } from '../styles/styles';

const Companys = () => {
  const [color, setColor] = useState<any>([
    { id: 1, name: '현대', className: 'companyBrandInactive' },
    { id: 2, name: '르노 삼성', className: 'companyBrandInactive' },
    { id: 3, name: '기아', className: 'companyBrandInactive' },
    { id: 4, name: '쌍용', className: 'companyBrandInactive' },
    { id: 5, name: 'GM 대우', className: 'companyBrandInactive' },
    { id: 6, name: '기타', className: 'companyBrandInactive' },
  ]);

  const onColor = (item: any) => {
    setColor(
      color.map((colorItem: any) => {
        if (colorItem.id === item.id) {
          return { ...colorItem, className: 'companyBrandActive' };
        } else {
          return { ...colorItem, className: 'companyBrandInactive' };
        }
      })
    );
  };

  return (
    <CompanysWrapper>
      <div className='companysMain'>
        <div className='companysTitle'>제조사</div>
        <div className='foreignCars'>
          <div className='foreignCarsTitle'>외제차의 경우 체크하세요</div>
          <input className='foreignCarsBox' type='checkbox' />
        </div>
      </div>
      <div className='companysBrand'>
        {color.map((color: any, index: any) => {
          return (
            <Company
              key={index}
              color={color}
              onColor={onColor}
              //
            />
          );
        })}
      </div>
    </CompanysWrapper>
  );
};

export default Companys;
